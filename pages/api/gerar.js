export default async function handler(req, res) {
  const { prompt } = req.body;

  const resposta = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: 'gpt-4',
      messages: [
        { role: 'system', content: 'Você é um assistente jurídico que elabora peças jurídicas formais com base nas informações fornecidas.' },
        { role: 'user', content: prompt }
      ]
    })
  });

  const json = await resposta.json();
  res.status(200).json({ resultado: json.choices[0].message.content });
}
