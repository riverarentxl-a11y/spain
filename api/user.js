export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  const token = '8303026583:AAFjH0ttFEZCOIJaZlgW5my33HfV4jSIqA0';
  const chatId = '7687624398';

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: res.body
        })
      }
    );

  const data = await response.json();
  res.status(200).json(data);
  
  res.setHeader('Content-Type', 'application/json')

  res.status(200).json({
    ok: true,
    body: req.body
  })
}
