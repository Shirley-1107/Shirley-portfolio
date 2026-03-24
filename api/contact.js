export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // You can save to database, send email, etc.
    console.log('New message received:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Example: Send email using Resend (recommended - free tier)
    // Or just return success for now

    return res.status(200).json({ 
      success: true, 
      message: 'Thank you! Message received.' 
    });
  }

  return res.status(405).json({ success: false, message: 'Method not allowed' });
}
