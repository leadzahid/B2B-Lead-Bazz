import { NextResponse } from "next/server";
// const nodemailer = require("nodemailer");
import nodemailer from "nodemailer";
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      fullName,
      phoneNumber,
      email,
      serviceType,
      leadQuantity,
      totalPrice,
      workDetails,
    } = body;
    // Validate the required fields
    if (!fullName || !phoneNumber || !email) {
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
    const clientMailOptions = {
      from: process.env.EMAIL,
      to: email, // Your email to receive the message
      subject: `New Order ${new Date().toDateString()}`,
      text: `Full Name: ${fullName}\n Phone Number: ${phoneNumber}\n Email: ${email}\n Service Type: ${serviceType}\n Lead Quantity: ${leadQuantity} \n Total Price: ${totalPrice} \n Work Details: ${workDetails}`,
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0;">
    <div style="max-width: 600px; background-color: #ffffff; margin: 20px auto; padding: 20px; border-radius: 8px; box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1); text-align: center;">
        
        <!-- Header -->
        <div style="background-color: #3D306D; color: #ffffff; padding: 15px; font-size: 22px; font-weight: bold; border-top-left-radius: 8px; border-top-right-radius: 8px;">
            Lead Generation Order Confirmation
        </div>

        <!-- Content -->
        <div style="padding: 20px; text-align: left;">
            <p style="font-size: 18px; color: #333; margin-bottom: 10px;">Hello <span style="font-weight: bold; color: #3D306D;">${fullName}</span>,</p>
            <p style="font-size: 16px; color: #555; margin-bottom: 15px;">
                Thank you for your order! We have received your lead generation request and will begin processing it shortly. Below are the details of your order:
            </p>

            <!-- Order Details -->
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 6px;">
                <p style="margin: 8px 0; font-size: 16px; color: #333;"><strong>Full Name:</strong> ${fullName}</p>
                <p style="margin: 8px 0; font-size: 16px; color: #333;"><strong>Phone Number:</strong> ${phoneNumber}</p>
                <p style="margin: 8px 0; font-size: 16px; color: #333;"><strong>Email:</strong> ${email}</p>
                <p style="margin: 8px 0; font-size: 16px; color: #333;"><strong>Service Type:</strong> ${serviceType}</p>
                <p style="margin: 8px 0; font-size: 16px; color: #333;"><strong>Lead Quantity:</strong> ${leadQuantity}</p>
                <p style="margin: 8px 0; font-size: 16px; color: #333;"><strong>Total Price:</strong> ${totalPrice}$</p>
                <p style="margin: 8px 0; font-size: 16px; color: #333;"><strong>Work Details:</strong> ${workDetails}</p>
            </div>

            <!-- Additional Info -->
            <p style="font-size: 16px; color: #555; margin-top: 15px;">
                If you have any questions or need further assistance, feel free to contact us. We look forward to delivering high-quality leads for your business.
            </p>

            <!-- Contact Button -->
            <div style="text-align: center; margin-top: 20px;">
                <a href="mailto:info@b2bleadbazz.com" style="background-color: #3D306D; color: #ffffff; padding: 12px 20px; font-size: 16px; font-weight: bold; text-decoration: none; border-radius: 5px; display: inline-block;">
                    Contact Support
                </a>
            </div>
        </div>

        <!-- Footer -->
        <div style="margin-top: 20px; font-size: 14px; color: #888; text-align: center; border-top: 1px solid #ddd; padding-top: 15px;">
            &copy; ${new Date().getFullYear()} B2BLeadBazz. All rights reserved.
        </div>
    </div>
</div>
      `,
    };
    const adminMailOptions = {
      from: process.env.EMAIL,
      to: process.env.EMAIL, // Your email to receive the message
      subject: `New Order ${new Date().toDateString()}`,
      text: `Full Name: ${fullName}\n Phone Number: ${phoneNumber}\n Email: ${email}\n Service Type: ${serviceType}\n Lead Quantity: ${leadQuantity} \n Total Price: ${totalPrice} \n Work Details: ${workDetails}`,
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0;">
    <div style="max-width: 600px; background-color: #ffffff; margin: 20px auto; padding: 20px; border-radius: 8px; box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1); text-align: center;">
        
        <!-- Header -->
        <div style="background-color: #2C3E50; color: #ffffff; padding: 15px; font-size: 22px; font-weight: bold; border-top-left-radius: 8px; border-top-right-radius: 8px;">
            New Lead Generation Order Received
        </div>

        <!-- Content -->
        <div style="padding: 20px; text-align: left;">
            <p style="font-size: 18px; color: #333; margin-bottom: 10px;">Hello Admin,</p>
            <p style="font-size: 16px; color: #555; margin-bottom: 15px;">
                A new lead generation order has been placed. Below are the details of the order:
            </p>

            <!-- Order Details -->
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 6px;">
                <p style="margin: 8px 0; font-size: 16px; color: #333;"><strong>Full Name:</strong> ${fullName}</p>
                <p style="margin: 8px 0; font-size: 16px; color: #333;"><strong>Phone Number:</strong> ${phoneNumber}</p>
                <p style="margin: 8px 0; font-size: 16px; color: #333;"><strong>Email:</strong> ${email}</p>
                <p style="margin: 8px 0; font-size: 16px; color: #333;"><strong>Service Type:</strong> ${serviceType}</p>
                <p style="margin: 8px 0; font-size: 16px; color: #333;"><strong>Lead Quantity:</strong> ${leadQuantity}</p>
                <p style="margin: 8px 0; font-size: 16px; color: #333;"><strong>Total Price:</strong> ${totalPrice}$</p>
                <p style="margin: 8px 0; font-size: 16px; color: #333;"><strong>Work Details:</strong> ${workDetails}</p>
            </div>

            <!-- Admin Action -->
            <p style="font-size: 16px; color: #555; margin-top: 15px;">
                Please process this order as soon as possible. If any verification is needed, contact the client using the provided details.
            </p>

            <!-- Manage Order Button -->
            <div style="text-align: center; margin-top: 20px;">
                <a href="https://www.b2bleadbazz.com/" style="background-color: #27AE60; color: #ffffff; padding: 12px 20px; font-size: 16px; font-weight: bold; text-decoration: none; border-radius: 5px; display: inline-block;">
                    Manage Order
                </a>
            </div>
        </div>

        <!-- Footer -->
        <div style="margin-top: 20px; font-size: 14px; color: #888; text-align: center; border-top: 1px solid #ddd; padding-top: 15px;">
            &copy; ${new Date().getFullYear()} B2BLeadBazz. All rights reserved.
        </div>
    </div>
</div>

      `,
    };
    // Send email via Nodemailer

    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(clientMailOptions);
    return NextResponse.json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Error sending email." },
      { status: 500 }
    );
  }
}
