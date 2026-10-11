
import { Resend } from "resend";

export default async (request) => {
  if (request.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  try {
    const { name, email, question } = await request.json();

    // Validate untrusted user input
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof question !== "string" ||
      !name.trim() ||
      name.length > 100 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      email.length > 254 ||
      !question.trim() ||
      question.length > 5000
    ) {
      return Response.json(
        { message: "Invalid form data" },
        { status: 400 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const from = "Website <questions@yourbusiness.com>";
    const businessEmail = "contact@yourbusiness.com";

    // 1. Notify your business
    const notification = await resend.emails.send({
      from,
      to: businessEmail,
      replyTo: email,
      subject: "New customer question",
      text: `Name: ${name}
Email: ${email}

Question:
${question}`
    });

    if (notification.error) {
      throw new Error("Business notification failed");
    }

    // 2. Send confirmation to customer
    const confirmation = await resend.emails.send({
      from,
      to: email,
      replyTo: businessEmail,
      subject: "We received your question!",
      text: `Hi ${name},

Thanks for contacting us! We've received your question:

${question}

We'll get back to you as soon as possible.

Best,
The Team`
    });

    if (confirmation.error) {
      console.error("Confirmation failed:", confirmation.error);
      return Response.json({
        message: "Your question was sent, but we couldn't send a confirmation email."
      });
    }

    return Response.json({
      message: "Your question was sent successfully!"
    });

  } catch (error) {
    console.error(error);

    return Response.json(
      { message: "Could not send question" },
      { status: 500 }
    );
  }
};
