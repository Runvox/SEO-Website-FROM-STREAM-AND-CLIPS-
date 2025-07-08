const express = require('express');
const router = express.Router();

router.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "All fields are required." });
  }

  console.log("Message received:", { name, email, message });

  res.json({ success: true, message: "Thank you for your message!" });
});

module.exports = router;