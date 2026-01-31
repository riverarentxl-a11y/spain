export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  res.setHeader('Content-Type', 'application/json')

  res.status(200).json({
    ok: true,
    body: req.body
  })
}
