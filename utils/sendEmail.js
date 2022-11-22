const nodemailer = require("nodemailer")
require('dotenv').config();

module.exports = async(email, subject, text) => {
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.HOST,
            service: 'Sendinblue',
            post: 587,
            secure: process.env.SECURE,
            auth: {
                user: process.env.USER,
                pass: process.env.PASS
            }


        })

        await transporter.sendMail({
            from: process.env.USER,
            to: email,
            subject: subject,
            text: text
        })
        console.log("Email send sucessful")
    } catch (error) {
        console.log("Email not sent")
        console.log(error)
    }
}