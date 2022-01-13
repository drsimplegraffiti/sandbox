const nodemailer = require('nodemailer');

exports.sendMail = async(option) => {
    // Create a transporter object
    const transporter = nodemailer.createTransport({
            host: process.env.SMPT_HOST,
            port: process.env.SMTP_PORT,
            auth: {
                user: process.env.SMPT_USER,
                pass: process.env.SMPT_PASSWORD
            }
        })
        // name, email, subject, message
    const mailOptions = {
        from: `${option.name} <${ option.email}>`,
        to: process.env.YOUR_EMAIL,
        subject: `Contact Us Form- ${option.subject}`,
        html: option.message
    }
    await transporter.sendMail(mailOptions);

}


//  transporter.sendMail(mailOptions, (err, response) => {
//         if (err)
//             console.log(err);
//     })