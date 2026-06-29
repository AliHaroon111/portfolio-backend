import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const handleContactFrom = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        await resend.emails.send({
            from: 'Portfolio <onboarding@resend.dev>', // free tier sender
            to: process.env.EMAIL_USER,               // your gmail
            replyTo: email,
            subject: `💼 Portfolio message from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        });

        return res.status(200).json({
            status: 'success',
            message: 'Your message has been sent successfully!'
        });
    } catch (err) {
        console.error('MAIL ERROR', err);
        return res.status(500).json({
            status: 'error',
            message: 'An internal error occurred. Please try again later.'
        });
    }
}