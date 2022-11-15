import nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';
dotenv.config({path:'./.env'});

//qqzhfxseamrpwxin

const sendmail=async(email,subject,text)=>{
    try {
      const transporter =  nodemailer.createTransport({
        service: process.env.SERVICE,
        auth: {
          user: process.env.USER,
          pass: process.env.PASS,
        },
      });
      await transporter.sendMail({
        from: process.env.USER, // sender address
        to: email, // list of receivers
        subject: subject, // Subject line
        text: text // plain text body
       // html body
      }).then(info => {
        console.log({info});
      }).catch(console.error);
        
    } catch (error) {
        console.log("some thing want to wrong")
    }
}

export default sendmail