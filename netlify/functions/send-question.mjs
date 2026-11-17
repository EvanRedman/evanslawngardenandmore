
import { Resend } from "resend";

const BUSINESS_EMAIL = "";
const FROM_EMAIL = "onboarding@resend.dev";

// Escape user input before inserting it into HTML
function escapeHtml(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

export default async (request) => {
    if (request.method !== "POST") {
        return Response.json(
            { error: "Method not allowed" },
            { status: 405 }
        );
    }

    try {
        const rawBody = await request.text();

        if (!rawBody.trim()) {
            return Response.json(
                { error: "Request body is empty" },
                { status: 400 }
            );
        }

        if (rawBody.length > 10000) {
            return Response.json(
                { error: "Submission too large" },
                { status: 413 }
            );
        }

        let data;

        try {
            data = JSON.parse(rawBody);
        } catch {
            return Response.json(
                { error: "Invalid JSON" },
                { status: 400 }
            );
        }

        if (!data || typeof data !== "object" || Array.isArray(data)) {
            return Response.json(
                { error: "Invalid submission" },
                { status: 400 }
            );
        }

        const { name, email, question, website } = data;

        // Honeypot spam protection
        if (website) {
            return Response.json({
                success: true,
                message: "Your message was sent!",
            });
        }

        // Validate inputs
        if (
            typeof name !== "string" ||
            typeof email !== "string" ||
            typeof question !== "string" ||
            !name.trim() ||
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
            !question.trim() ||
            name.length > 100 ||
            email.length > 254 ||
            question.length > 5000
        ) {
            return Response.json(
                { error: "Please complete all fields correctly." },
                { status: 400 }
            );
        }

        if (!process.env.RESEND_API_KEY) {
            console.error("RESEND_API_KEY is missing");

            return Response.json(
                { error: "Email service unavailable." },
                { status: 500 }
            );
        }

        const customerName = name.trim();
        const customerEmail = email.trim();
        const customerQuestion = question.trim();
        const firstName = customerName.split(/\s+/)[0];


        const replySubject = "Re: Your inquiry to Evan's Lawn & Garden";

        const quotedInquiry = customerQuestion
            .split(/\r?\n/)
            .map((line) => `> ${line}`)
            .join("\n");

        const replyBody = `Hi ${firstName},


In your email to us, you wrote:

${quotedInquiry}
`;

        const replyLink =
            `mailto:${customerEmail}` +
            `?subject=${encodeURIComponent(replySubject)}` +
            `&body=${encodeURIComponent(replyBody)}`;


        // Build a styled notification email
        const html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
      </head>
      <body style="margin:0;padding:30px 15px;background:#f5f6f3;font-family:Arial,sans-serif;color:#263328;">

        <div style="max-width:580px;margin:0 auto;background:#ffffff;border:1px solid #e0e7df;border-radius:12px;overflow:hidden;">

          <div style="height:6px;background:#437d51;"></div>

          <div style="padding:32px;">

            <p style="font-size:12px;font-weight:bold;color:#528360;letter-spacing:1.5px;text-transform:uppercase;margin:0 0 12px;">
              Evan's Lawn & Garden
            </p>

            <h1 style="font-size:25px;line-height:1.3;margin:0 0 24px;color:#243b28;">
              New Website Inquiry
            </h1>

            <p style="font-size:14px;color:#7a827a;margin:0 0 5px;">
              From
            </p>

            <p style="font-size:18px;font-weight:bold;margin:0 0 5px;">
              ${escapeHtml(customerName)}
            </p>

            <p style="font-size:14px;color:#527c5a;margin:0 0 26px;">
              ${escapeHtml(customerEmail)}
            </p>

            <p style="font-size:12px;font-weight:bold;color:#748073;letter-spacing:1px;text-transform:uppercase;margin:0 0 10px;">
              Their Message
            </p>

            <div style="background:#f4f7f2;border:1px solid #e2eade;border-radius:8px;padding:20px;margin-bottom:28px;font-size:15px;line-height:1.7;white-space:pre-wrap;overflow-wrap:anywhere;">${escapeHtml(customerQuestion)}</div>

            <a href="${escapeHtml(replyLink)}"
               style="display:block;background:#39764b;color:#ffffff;text-decoration:none;text-align:center;font-weight:bold;font-size:15px;padding:16px 20px;border-radius:8px;">
              Reply to ${escapeHtml(firstName)}
            </a>

            <p style="font-size:12px;line-height:1.6;color:#8a948a;text-align:center;margin:18px 0 0;">
              Opens a new email to the customer.
              You can also use your email app's normal Reply button.
            </p>

          </div>
        </div>

      </body>
      </html>
    `;

        const resend = new Resend(process.env.RESEND_API_KEY);

        const { data: emailData, error } = await resend.emails.send({
            from: FROM_EMAIL,
            to: BUSINESS_EMAIL,

            // Keep normal Reply functionality
            replyTo: customerEmail,

            subject: `New Website Inquiry from ${customerName}`,

            // Styled email with reply button
            html,

            // Plain-text fallback for email clients
            text: `New Website Inquiry

Name: ${customerName}
Email: ${customerEmail}

Message:
${customerQuestion}

Reply directly to this email to respond to the customer.
`,
        });

        if (error) {
            console.error("Resend API error:", {
                name: error.name,
                message: error.message,
                statusCode: error.statusCode,
            });

            return Response.json(
                { error: "Unable to send message. Please try again." },
                { status: 500 }
            );
        }

        console.log("Email submitted successfully:", emailData?.id);

        return Response.json({
            success: true,
            message: "Your message was sent successfully!",
        });

    } catch (error) {
        console.error("Contact form error:", error);

        return Response.json(
            { error: "An unexpected error occurred." },
            { status: 500 }
        );
    }
};

// Netlify rate limiting
export const config = {
    path: "/api/contact",
    rateLimit: {
        windowLimit: 5,
        windowSize: 60,
        aggregateBy: ["ip", "domain"],
    },
};
