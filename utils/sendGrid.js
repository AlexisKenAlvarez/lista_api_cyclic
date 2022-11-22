const sgMail = require("@sendgrid/mail")
require('dotenv').config();

module.exports = async (email, subject, text) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    try {
        const message = {
            to: email,
            from: {
                name: 'Lista PH',
                email: process.env.USER
            },
            subject: subject,
            text: "From LISTA",
            html: text
        }

        await sgMail.send(message).then((response) => 
        console.log("Email sent")).catch((error) => 
        console.log(error.message))
        
    } catch (error) {
        console.log(error.message)
    }

}