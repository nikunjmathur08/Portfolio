const express = require('express');
const dotenv = require('dotenv').config();
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express()

const allowedOrigins = process.env.CORS_ORIGIN
  ? process.env.CORS_ORIGIN.split(',').map((origin) => origin.trim())
  : '*';

app.use(cors({ origin: allowedOrigins }));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/test', (req, res) => {
  res.status(200).json({ message: "Test route working fine!" });
  console.log("Resend API key configured: ", Boolean(process.env.RESEND_API_KEY));
  console.log("Contact recipient: ", process.env.CONTACT_TO_EMAIL);
})

app.post('/send', async (req, res) => {
  if (!req.body) {
    return res.status(400).json({ error: 'Body is missing. Ensure you are sending JSON or URL-encoded data.' });
  }
  const { name, email, message } = req.body;
  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL || 'Portfolio Contact <onboarding@resend.dev>';

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  if (!resendApiKey || !toEmail) {
    return res.status(500).json({
      error: 'Server mail configuration missing. Set RESEND_API_KEY and CONTACT_TO_EMAIL.',
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Please provide a valid email address.' });
  }

  const timeoutController = new AbortController();
  const timeout = setTimeout(() => timeoutController.abort(), 12000);

  try {
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      signal: timeoutController.signal,
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject: `New Submission from ${name}`,
        text: `You have a new message from your portfolio contact form.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: `
          <h2>New portfolio contact submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${String(message).replace(/\n/g, '<br/>')}</p>
        `,
      }),
    });

    clearTimeout(timeout);

    if (!resendResponse.ok) {
      const errorBody = await resendResponse.text();
      console.error('Resend API error:', errorBody);
      return res.status(502).json({ error: 'Mail provider rejected the request.' });
    }

    res.status(200).json({ success: true, message: 'Message sent' });
  } catch (err) {
    clearTimeout(timeout);
    console.error("Error sending mail: ",err);
    if (err.name === 'AbortError') {
      return res.status(504).json({ error: 'Mail request timed out. Please try again.' });
    }
    res.status(500).json({ error: 'Failed to send message. Please try again.' });
  }
});

app.listen(4000, () =>{
  console.log(`Server is running on port 4000`);
});
