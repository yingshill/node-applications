const mail = require('@sendgrid/mail')
const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        cc: 'vincy.modis@gmail.com',
        from: 'serendipper.liu@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'serendipper.liu@gmail.com',
        subject: 'You successfully remove your account in Application.',
        text: `Hi ${name}, we are sad to see you leave. Could you leave us some feedback?`
    })
}
module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}