import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
  return NextResponse.json({ message: "API is working! Use POST to send enquiries." });
}

export async function POST(req) {
  try {
    console.log('POST request received');
    console.log('RESEND_API_KEY exists:', !!process.env.RESEND_API_KEY);
    
    const body = await req.json();
    const { name, email, phone, message } = body;
    
    console.log('Form data:', { name, email, phone });

    if (!name || !email || !phone) {
      return NextResponse.json(
        { ok: false, error: "Name, email, and phone are required" }, 
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'aarkpednekar7@gmail.com',
      subject: 'New Enquiry from Skyline Website',
      html: `
        <h2>New Enquiry</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Message:</b> ${message || 'No message provided'}</p>
      `,
      reply_to: email,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { ok: false, error: error.message }, 
        { status: 500 }
      );
    }

    console.log('Email sent successfully:', data);
    return NextResponse.json({ ok: true, message: "Enquiry sent successfully!" });
    
  } catch (err) {
    console.error('ENQUIRY_ERROR:', err);
    return NextResponse.json(
      { ok: false, error: "Failed to send enquiry" }, 
      { status: 500 }
    );
  }
}
