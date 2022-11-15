import nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';
dotenv.config({path:'../.env'});

//qqzhfxseamrpwxin
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
});

transporter.sendMail({
  from: process.env.USER, // sender address
  to: "javiyaharshad@gmail.com", // list of receivers
  subject: "verify email", // Subject line
  text: "There is a new article. It's about sending emails, check it out!", // plain text body
 // html body
}).then(info => {
  console.log({info});
}).catch(console.error);