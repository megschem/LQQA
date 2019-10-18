// https://blog.mailtrap.io/sending-emails-with-nodemailer/
import nodemailer from 'nodemailer';

//transporter is going to be an object that is able to send mail
//transport is the transport configuration object, connection url or a transport plugin instance
//defaults is an object that defines default values for mail options


// Generate test SMTP service account from mailtrap.io
// Only needed if you don't have a real mail account for testing
// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  secure: false, // true for 465, false for other ports
  port: 2525,
  auth: {
    user: "2813f9a1d6c0b5",
    pass: "5cce1497f9d5cd"
  },
  debug: true, //show debug output
  logger: true //log information in console
});

// verify that SMTP connection is correct
transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take our messages');
  }
});

// Specify the sender, message recipients, and the content of our message.
var mailOptions = {
  from: '"Example Team" <from@example.com>',
  to: 'user1@example.com, user2@example.com',
  subject: 'Nice Nodemailer test',
  text: 'Hey there, it’s our first message sent with Nodemailer ;) ',
  html: '<b>Hey there! </b><br> This is our first message sent with Nodemailer'
};

// Deliver a message with sendMail()
transport.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Message sent: %s', info.messageId);
});



//NODEMAILER DUMMY EMAIL CONFIGURATION
// "use strict";
// const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
// async function main() {

  // Generate test SMTP service account from mailtrap.io
  // Only needed if you don't have a real mail account for testing
  // let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  // let transporter = nodemailer.createTransport({
  //   host: "smtp.mailtrap.io",
  //   port: 2525,
  //   secure: false, // true for 465, false for other ports
  //   port: 2525,
  //   auth: {
  //     user: "2813f9a1d6c0b5",
  //     pass: "5cce1497f9d5cd"
  //   }
  // });

  // send mail with defined transport object
//   let info = await transporter.sendMail({
//     from: '"Fred Foo 👻" <foo@example.com>', // sender address
//     to: "bar@example.com, baz@example.com", // list of receivers
//     subject: "Hello ✔", // Subject line
//     text: "Hello world?", // plain text body
//     html: "<b>Hello world?</b>" // html body
//   });

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

//   // Preview only available when sending through an Ethereal account
//   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
//   // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
// }

// main().catch(console.error);

// MESSAGE CONFIGURATION
// var message = {
//   from: 'sender@server.com',
//   to: 'receiver@sender.com',
//   subject: 'Message title',
//   text: 'Plaintext version of the message',
//   html: '<p>HTML version of the message</p>'
// };

// SUBMIT EMAIL FORM ON-CLICK EVENT HANDLER
// window.addEventListener("DOMContentLoaded", function () {
//   var form = document.getElementById("form-id");

//   document.getElementById("email-id").addEventListener("click", function () {
//     form.submit();
//   });
// });
