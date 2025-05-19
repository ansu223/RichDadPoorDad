export default async function handler(req, res) {
  const { id, payout, ip, user_id } = req.query;

  console.log(`✅ OGAds Postback received:
  - Offer ID: ${id}
  - Payout: ${payout}
  - IP: ${ip}
  - User ID: ${user_id}`);

  // Example: you could reward the user here via GitHub JSON, DB, or Telegram Bot

  res.status(200).json({ success: true, message: 'Postback received' });
}
