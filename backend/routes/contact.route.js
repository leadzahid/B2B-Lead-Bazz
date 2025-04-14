// routes/contactRoute.js

const dotenv = require("dotenv");
const express = require("express");
const nodemailer = require("nodemailer");

dotenv.config();

const router = express.Router();

router.post("/contact", async (req, res) => {
  try {
    const { First_Name, Last_Name, Email, Phone_Number, Message } = req.body;

    if (!First_Name || !Email || !Phone_Number) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: `New Contact Form Submission ${new Date().toDateString()}`,
      text: `First_Name: ${First_Name}\nLast_Name: ${Last_Name}\nEmail: ${Email}\Phone_Number: ${Phone_Number}\nMessage: ${Message}`,
      html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 10px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);">
   <div style="background: #007BFF; padding: 15px; text-align: center; border-radius: 10px 10px 0 0;">
     <h2 style="color: #fff; margin: 0;">New Contact Form Submission</h2>
   </div>
   <div style="padding: 20px; background: #f9f9f9;">
     <p style="color: #555;"><strong>Submission Date:</strong> ${new Date().toLocaleString()}</p>
     <table style="width: 100%; border-collapse: collapse;">
       <tr>
         <td style="padding: 10px; font-weight: bold; width: 30%;">First Name:</td>
         <td style="padding: 10px; background: #fff;">${First_Name}</td>
       </tr>
       <tr>
         <td style="padding: 10px; font-weight: bold;">Last Name:</td>
         <td style="padding: 10px; background: #fff;">${Last_Name}</td>
       </tr>
       <tr>
         <td style="padding: 10px; font-weight: bold;">Email:</td>
         <td style="padding: 10px; background: #fff;">
           <a href="mailto:${Email}" style="color: #007BFF; text-decoration: none;">${Email}</a>
         </td>
       </tr>
       <tr>
         <td style="padding: 10px; font-weight: bold;">Phone Number:</td>
         <td style="padding: 10px; background: #fff;">${Phone_Number}</td>
       </tr>
     </table>
     <div style="margin-top: 20px;">
       <p style="font-weight: bold;">Message:</p>
       <p style="background: #fff; padding: 15px; border-left: 4px solid #007BFF; font-style: italic;">${Message}</p>
     </div>
   </div>
   <div style="background: #007BFF; padding: 10px; text-align: center; border-radius: 0 0 10px 10px;">
     <p style="color: #fff; margin: 0; font-size: 14px;">This is an automated email from your website.</p>
   </div>
 </div> 
   `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Error sending email." });
  }
});

module.exports = router;
