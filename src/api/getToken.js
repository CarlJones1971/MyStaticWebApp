export async function get(req, res) {
  try {
    res.json({ 
      status: "Jonny 5 online!",
      timestamp: new Date().toISOString() 
    });
  } catch (error) {
    res.status(500).json({ error: "No disassemble! Malfunction!" });
  }
}
