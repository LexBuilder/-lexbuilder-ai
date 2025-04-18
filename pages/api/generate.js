export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { prompt } = req.body;

  if (!process.env.OPENAI_API_KEY) {
    return res.status(500).json({ message: 'OpenAI API key not configured.' });
  }

  if (!prompt || prompt.trim().length === 0) {
    return res.status(400).json({ message: 'Prompt is required.' });
  }

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.7
      })
    });

    const data = await response.json();

    if (data.choices && data.choices.length > 0) {
      return res.status(200).json({ result: data.choices[0].message.content });
    } else {
      return res.status(500).json({ message: 'No response from OpenAI' });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
}
