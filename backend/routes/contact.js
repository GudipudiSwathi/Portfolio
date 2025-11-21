const express = require('express');
const router = express.Router();
const Message = require('../models/Message');
const nodemailer = require('nodemailer');

router.post('/', async (req, res) => {
  try{
    const { name, email, message } = req.body;
    const doc = new Message({ name, email, message });
    await doc.save();

    // optional: send email notification
    if(process.env.EMAIL_USER && process.env.EMAIL_PASS){
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
      });
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: `Portfolio Contact from ${name}`,
        text: `${message}\n\nReply to: ${email}`
      });
    }

    res.status(200).json({ok:true});
  }catch(err){
    console.error(err);
    res.status(500).json({error: 'Server error'});
  }
});

module.exports = router;
