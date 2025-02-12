import nodeMailer from "nodemailer"

export const sendEmail = async (options) => {

    const transpoter = nodeMailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        service: process.env.SMTP_SERVICE,
        auth: {
            user: process.env.SMTP_MAIL,
            pass: process.env.SMTP_PASSWORD,
        }
    })

    const MailOpion = {
        from: process.env.SMTP_MAIL,
        to: options.email,
        subject: options.subject,
        text: `${options.message}/n/n Email from user ${options.userEmail}`
    }
    await transpoter.sendMail(MailOpion );
}