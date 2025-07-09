const express = require('express');
const dotenv = require('dotenv').config();
const cookieParser = require('cookie-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express()

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.get('/test', (req, res) => {
  res.status(200).json({ message: "Test route working fine!" });
})

app.post('/send', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.MAIL_USER,
      subject: `New Submission from ${name}`,
      text: `You have a new message from your Portfolio contact form:\n\n
        Name: ${name}\n
        Email: ${email}\n\n
        Message: ${message}
      `
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Message sent' });
  } catch (err) {
    console.error("Error sending mail: ",err);
    res.status(500).json({ error: 'Failed to send message. Please try again.' });
  }
});

app.listen(4000, () =>{
  console.log(`Server is running on port 4000`);
});