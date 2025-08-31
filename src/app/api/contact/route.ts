import nodemailer from 'nodemailer';
import { NextResponse , NextRequest } from 'next/server';       

const sendContactEmail = async (
  name: string,
  email: string,
  message: string
) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: process.env.TO_EMAIL,
    subject: `New message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
  };

  return transporter.sendMail(mailOptions);
};


export async function POST(request : NextRequest){

  const res = NextResponse;
  const { name, email, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing fields' });
  }

  try {
    // Validate email format
    console.log('Email:', process.env.EMAIL_USER);
    console.log('Password:', process.env.EMAIL_PASS);
  
    await sendContactEmail(name, email, message);
    return  res.json({ success : true, message: 'Email sent successfully!' });
  } catch (err) {
    console.error('Email send error:', err);
    return res.json({ success : false, error: 'Failed to send email' });
  }
}
