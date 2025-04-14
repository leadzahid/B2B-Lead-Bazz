import { NextResponse } from "next/server";
// const nodemailer = require("nodemailer");
import nodemailer from "nodemailer";
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { First_Name, Last_Name, Email, Phone_Number, Message } = body;
    // Validate the required fields
    if (!First_Name || !Email || !Phone_Number) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }
    // Nodemailer transporter setup
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL, // Your Gmail address
        pass: process.env.APP_PASSWORD, // Your Gmail app password
      },
    });
    // Email content
    const mailOptions = {
      from: process.env.EMAIL,
      to: process.env.EMAIL, // Your email to receive the message
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
    // Send email via Nodemailer
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Error sending email." },
      { status: 500 }
    );
  }
}
