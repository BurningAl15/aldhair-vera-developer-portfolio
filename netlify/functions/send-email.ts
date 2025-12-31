import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const TEST_TO = process.env.RESEND_TEST_TO || "aldhairvera15@gmail.com";
const FROM_EMAIL = "onboarding@resend.dev"; // Default Resend testing email

exports.handler = async (event: { body: string; httpMethod: string }) => {
    // Only allow POST
    if (event.httpMethod !== "POST") {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: "Method Not Allowed" }),
        };
    }

    try {
        const { name, email, message } = JSON.parse(event.body);

        if (!name || !email || !message) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: "Missing required fields" }),
            };
        }

        const { data, error } = await resend.emails.send({
            from: `Portfolio Contact <${FROM_EMAIL}>`,
            to: [TEST_TO],
            subject: `New Message from ${name}`,
            replyTo: email,
            html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
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
