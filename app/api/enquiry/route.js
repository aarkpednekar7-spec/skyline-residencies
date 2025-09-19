import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

// GET method - for testing if API is working
export async function GET() {
  return NextResponse.json({ message: "API is working! Use POST to send enquiries." });
}

// POST method - for handling form submissions
export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    // Setup transporter with Gmail + App Password
    let transporter = nodemailer.createTransporter({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // Send email
    await transporter.sendMail({
      from: `"Skyline Website" <${process.env.GMAIL_USER}>`,
      to: process.env.TO_EMAIL, // your email
      subject: "New Enquiry from Skyline Website",
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `,
      html: `
        <h2>New Enquiry</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    return NextResponse.json({ ok: true, message: "Enquiry sent!" });
  } catch (err) {
    console.error("ENQUIRY_API_ERROR:", err);
    return NextResponse.json(
      { ok: false, error: "Failed to send" },
      { status: 500 }
    );
  }
}
