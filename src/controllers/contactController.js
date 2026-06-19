import nodemailer from 'nodemailer'

export const handleContactFrom = async(req, res) =>{
    try {
        // Data is already verified by the middleware layer!
        const {name, email, message} = req.body

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const emailOpions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            replyTo: email,
            subject: `💼Portfolio messafe from ${name}`,
            text:  `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        };

        await transporter.sendMail(emailOpions);

        return res.status(200).json({
            status: 'success',
            message: 'Your message has been sent successfully!'
        });
    } catch (err) {
        console.error('MAIL ERROR',err);
        return res.status(500).json({
            status: 'error',
            message: 'An internal error occurred while transmission. Please try again later.'
        });
    }
}