import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const TEST_TO = process.env.RESEND_TEST_TO || "aldhairvera15@gmail.com";
const FROM_EMAIL = "onboarding@resend.dev"; // Default Resend testing email
const escapeHtml = (value: string) => value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

exports.handler = async (event: { body: string; httpMethod: string }) => {
    // Only allow POST
    if (event.httpMethod !== "POST") {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: "Method Not Allowed" }),
        };
    }

    try {
        const payload = JSON.parse(event.body || "{}");
        const name = typeof payload.name === "string" ? payload.name.trim() : "";
        const email = typeof payload.email === "string" ? payload.email.trim() : "";
        const message = typeof payload.message === "string" ? payload.message.trim() : "";

        if (!name || !email || !message) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: "Missing required fields" }),
            };
        }

        if (name.length > 120 || email.length > 254 || message.length > 5000 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: "Invalid form data" }),
            };
        }

        if (!process.env.RESEND_API_KEY) {
            return {
                statusCode: 503,
                body: JSON.stringify({ error: "Email service is not configured" }),
            };
        }

        const safeName = escapeHtml(name);
        const safeEmail = escapeHtml(email);
        const safeMessage = escapeHtml(message).replace(/\r?\n/g, "<br>");

        const { data, error } = await resend.emails.send({
            from: `Portfolio Contact <${FROM_EMAIL}>`,
            to: [TEST_TO],
            subject: `New Message from ${name.replace(/[\r\n]/g, " ")}`,
            replyTo: email,
            html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `,
        });

        if (error) {
            console.error("Resend Error:", error);
            return {
                statusCode: 400,
                body: JSON.stringify({ error: error.message }),
            };
        }

        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Email sent successfully", data }),
        };
    } catch (error) {
        console.error("Server Error:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Internal Server Error" }),
        };
    }
};
