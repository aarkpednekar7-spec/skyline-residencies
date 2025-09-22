import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: "API is working! Use POST to send enquiries." });
}

export async function POST(req) {
  try {
    console.log('POST request received');
    
    const body = await req.json();
    const { name, email, phone, message } = body;
    
    console.log('Form data:', { name, email, phone });

    if (!name || !email || !phone) {
      return NextResponse.json(
        { ok: false, error: "Name, email, and phone are required" }, 
        { status: 400 }
      );
    }

    // Create Gmail transporter
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.TO_EMAIL,
      subject: 'New Enquiry from Skyline Website',
      html: `
        <h2>New Enquiry</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Message:</b> ${message || 'No message provided'}</p>
      `,
    };

    console.log('Sending email...');
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    
    return NextResponse.json({ ok: true, message: "Enquiry sent successfully!" });
    
  } catch (err) {
    console.error('EMAIL_ERROR:', err);
    return NextResponse.json(
      { ok: false, error: "Failed to send enquiry" }, 
      { status: 500 }
    );
  }
}
