const nodemailer = require('nodemailer');
module.exports= sendMail=(mail,link)=>{
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: `${process.env.GMAIL_USERNAME}`,
          pass: `${process.env.GMAIL_PASSWORD}`,
        },
      });
    const mailOptions = {
    from: `${process.env.GMAIL_USERNAME}`,
    to: mail,
    subject: 'Activite Your Acount On AIEC',
    text: `Hello There!\nThis link you can use to activate your account on AIEC platform:\n${process.env.APP_URL}/activation/${link}\n\nThanks for registration!`,
    };
    transporter.sendMail(mailOptions);
}

