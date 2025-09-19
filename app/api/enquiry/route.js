import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    // Change these variable names to match Vercel
    let transporter = nodemailer.createTransporter({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,  // Changed from EMAIL_USER
        pass: process.env.GMAIL_PASS,  // Changed from EMAIL_PASS
      },
    });

    await transporter.sendMail({
      from: `"Skyline Website" <${process.env.GMAIL_USER}>`, // Changed
      to: process.env.TO_EMAIL, // This one was already correct
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
