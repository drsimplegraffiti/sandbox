const nodemailer = require('nodemailer');

const sendEmail = async(options, attachment = false) => {
    const transporter = nodemailer.createTransport({
        host: process.env.SPACEET_SMTP_HOST,
        port: process.env.SPACEET_SMTP_PORT,
        auth: {
            user: process.env.SPACEET_SMTP_USER,
            pass: process.env.SPACEET_SMTP_PASSWORD,
        },
    });
    const message = {
        from: `${process.env.SPACEET_EMAIL_FROM_NAME} <${process.env.SPACEET_FROM_EMAIL}>`,
        to: options.email,
        subject: options.subject,
        text: options.message,
        html: options.message,
    };

    if (attachment) {
        console.log({ attachment });
        message.attachments = [{
            filename: options.filename,
            path: options.path,
        }, ];
    }

    await transporter.sendMail(message);
};

module.exports = sendEmail;