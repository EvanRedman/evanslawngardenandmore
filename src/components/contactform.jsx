
import { useState } from "react";
import {
    ArrowRight,
    CheckCircle2,
    AlertCircle,
    Mail,
    MessageSquare,
    User,
} from "lucide-react";

const initialForm = {
    name: "",
    email: "",
    question: "",
    website: "",
};

export default function ContactForm() {
    const [form, setForm] = useState(initialForm);
    const [status, setStatus] = useState("");
    const [statusType, setStatusType] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus("");
        setStatusType("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            // Safely read response, even when empty
            const rawResponse = await response.text();

            let data = {};

            if (rawResponse) {
                try {
                    data = JSON.parse(rawResponse);
                } catch {
                    throw new Error(
                        `Unexpected server response (HTTP ${response.status}).`
                    );
                }
            }

            if (response.status === 429) {
                throw new Error(
                    "Too many requests. Please try again in a minute."
                );
            }

            if (!response.ok) {
                throw new Error(
                    data.error ||
                    data.message ||
                    `Failed to send message (HTTP ${response.status}).`
                );
            }

            if (data.success !== true) {
                throw new Error(
                    "The server did not confirm your message was sent."
                );
            }

            setStatus(data.message || "Your message was sent!");
            setStatusType("success");
            setForm(initialForm);

        } catch (error) {
            console.error("Contact form error:", error);

            setStatus(
                error.message || "Something went wrong. Please try again."
            );
            setStatusType("error");

        } finally {
            setLoading(false);
        }
    };

    const inputClasses =
        "w-full rounded-xl border border-stone-200 dark:border-stone-700 " +
        "bg-stone-50 dark:bg-stone-800/60 " +
        "px-4 py-3.5 text-sm text-stone-900 dark:text-stone-100 " +
        "placeholder:text-stone-400 dark:placeholder:text-stone-500 " +
        "outline-none transition-all duration-200 " +
        "focus:border-green-600 focus:ring-2 focus:ring-green-600/15";

    const labelClasses =
        "flex items-center gap-2 text-sm font-semibold " +
        "text-stone-700 dark:text-stone-200 mb-2";

    return (
        <section
            className="min-h-[85vh] bg-stone-50 dark:bg-[#0a1209] pt-8 sm:pt-12 pb-20"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6">

                {/* Page heading */}
                <div className="text-center mb-12 sm:mb-16">
                    <h1
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 dark:text-stone-50 mt-4"
                        style={{ fontFamily: "'Fraunces', serif" }}
                    >
                        Let's Get in Touch About
                        <br />
                        <span className="text-[var(--secondarygreen)] dark:text-green-400">
                            Your Property.
                        </span>
                    </h1>

                    <p className="text-stone-500 dark:text-stone-400 mt-5 max-w-lg mx-auto text-base sm:text-lg leading-relaxed">
                        Have some questions for us, or want to book? Send us a message
                        and we'll get back to you as soon as we can.
                    </p>
                </div>

                {/* Contact form card */}
                <div className="max-w-2xl mx-auto">
                    <div className="bg-white dark:bg-[#111d10] rounded-2xl sm:rounded-3xl border border-stone-200 dark:border-stone-800 shadow-sm overflow-hidden">

                        {/* Green accent strip */}
                        <div className="h-1.5 bg-gradient-to-r from-[var(--maingreen)] via-green-600 to-[var(--secondarygreen)]" />

                        <div className="p-6 sm:p-10">
                            <form onSubmit={handleSubmit} className="space-y-6">

                                {/* Spam honeypot */}
                                <div
                                    aria-hidden="true"
                                    style={{
                                        position: "absolute",
                                        left: "-9999px",
                                        width: "1px",
                                        height: "1px",
                                        overflow: "hidden",
                                    }}
                                >
                                    <label htmlFor="website">
                                        Leave this field empty
                                    </label>
                                    <input
                                        id="website"
                                        type="text"
                                        name="website"
                                        value={form.website}
                                        onChange={handleChange}
                                        tabIndex={-1}
                                        autoComplete="off"
                                    />
                                </div>

                                {/* Name and Email */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label htmlFor="name" className={labelClasses}>
                                            <User className="w-4 h-4 text-green-700 dark:text-green-400" />
                                            Your Name
                                        </label>
                                        <input
                                            id="name"
                                            type="text"
                                            name="name"
                                            value={form.name}
                                            onChange={handleChange}
                                            placeholder="Enter your name here"
                                            autoComplete="name"
                                            className={inputClasses}
                                            maxLength={100}
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className={labelClasses}>
                                            <Mail className="w-4 h-4 text-green-700 dark:text-green-400" />
                                            Email Address
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            name="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            placeholder="Enter your email here"
                                            autoComplete="email"
                                            className={inputClasses}
                                            maxLength={254}
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="question" className={labelClasses}>
                                        <MessageSquare className="w-4 h-4 text-green-700 dark:text-green-400" />
                                        How Can We Help?
                                    </label>
                                    <textarea
                                        id="question"
                                        name="question"
                                        value={form.question}
                                        onChange={handleChange}
                                        placeholder="Write us about your yard, the services you're interested in, or any questions you have. Please be as descriptive a possible."
                                        rows={6}
                                        maxLength={5000}
                                        className={`${inputClasses} resize-y`}
                                        required
                                    />
                                </div>

                                {/* Submission status */}
                                {status && (
                                    <div
                                        role="status"
                                        aria-live="polite"
                                        className={`flex items-start gap-3 rounded-xl p-4 text-sm ${statusType === "success"
                                            ? "bg-green-50 text-green-800 dark:bg-green-950/60 dark:text-green-300"
                                            : "bg-red-50 text-red-700 dark:bg-red-950/40 dark:text-red-300"
                                            }`}
                                    >
                                        {statusType === "success" ? (
                                            <CheckCircle2 className="w-5 h-5 shrink-0" />
                                        ) : (
                                            <AlertCircle className="w-5 h-5 shrink-0" />
                                        )}
                                        <span>{status}</span>
                                    </div>
                                )}

                                {/* Submit */}
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full inline-flex items-center justify-center gap-2
                                                bg-[var(--secondarygreen)] hover:bg-green-600
                                                disabled:opacity-60 disabled:cursor-not-allowed
                                                text-white font-semibold px-6 py-4 rounded-xl
                                                transition-all duration-200
                                                hover:shadow-lg hover:shadow-green-900/15
                                                focus-visible:outline-none focus-visible:ring-2
                                                focus-visible:ring-green-500 focus-visible:ring-offset-2"
                                >
                                    {loading ? (
                                        "Sending Your Message..."
                                    ) : (
                                        <>
                                            Send Message
                                            <ArrowRight className="w-4 h-4" />
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
