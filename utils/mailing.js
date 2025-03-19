import nodemailer from "nodemailer";
import "dotenv/config";

const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: process.env.APP_EMAIL,
    pass: process.env.APP_PASSWORD,
  },
});

export const sendEmail = async (to, subject, text) => {
  const send = await transporter.sendMail({
    from: process.env.APP_EMAIL,
    to: to,
    subject: subject,
    text: text,
  });

  console.log("email sent", send);
};

// async function main() {
//   // send mail with defined transport object
//   const info = await transporter.sendMail({
// 	from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
// 	to: "bar@example.com, baz@example.com", // list of receivers
// 	subject: "Hello ✔", // Subject line
// 	text: "Hello world?", // plain text body
// 	html: "<b>Hello world?</b>", // html body
//   });

//   console.log("Message sent: %s", info.messageId);
// }
