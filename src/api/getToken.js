export async function get(req, res) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Malfunction! Wrong input method!' });
  }

  try {
    return res.json({
      endpoint: process.env.OPENAI_ENDPOINT,
      apiKey: process.env.OPENAI_KEY,
      expires: Date.now() + 600000 // 10 min expiry
    });
  } catch (error) {
    return res.status(500).json({ 
      error: "Jonny 5 brain crash! Need reboot! 💥" 
    });
  }
}
