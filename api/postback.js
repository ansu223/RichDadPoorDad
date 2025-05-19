const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Parse URL and JSON data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Handle OGAds postback
app.get('/api/postback', (req, res) => {
  const { id, payout, ip, user_id } = req.query;

  // Validate required fields
  if (!id || !payout || !user_id) {
    return res.status(400).json({ error: "Missing required parameters" });
  }

  // Log the conversion (replace with your logic)
  console.log("📢 OGAds Postback Received:", {
    offerId: id,
    payout: payout,
    ip: ip,
    userId: user_id,
  });

  // TODO: Save to DB, send to another API, etc.
  
  // Send success response
  res.status(200).json({ success: true });
});

// Export for Vercel
module.exports = app;
