import { useState } from 'react';

export default function Home() {
  const [facts, setFacts] = useState('');
  const [part, setPart] = useState('');
  const [opposingPart, setOpposingPart] = useState('');
  const [type, setType] = useState('');
  const [area, setArea] = useState('');
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    setLoading(true);
    setError('');
    setOutput('');

    const prompt = `Peça: ${type}\nÁrea: ${area}\nParte: ${part}\nParte Contrária: ${opposingPart}\nFatos: ${facts}`;

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt })
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || 'Erro desconhecido no servidor');
      } else {
        setOutput(data.result);
      }
    } catch (err) {
      setError('Erro na conexão com o servidor: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Peticiona.ai - Geração de Peças Jurídicas</h1>

      <input placeholder="Nome da Parte" value={part} onChange={e => setPart(e.target.value)} style={{ width: '100%', padding: '0.5rem', marginBottom: '0.5rem' }} />
      <input placeholder="Parte Contrária" value={opposingPart} onChange={e => setOpposingPart(e.target.value)} style={{ width: '100%', padding: '0.5rem', marginBottom: '0.5rem' }} />
      <input placeholder="Tipo de Peça (Ex: Petição Inicial)" value={type} onChange={e => setType(e.target.value)} style={{ width: '100%', padding: '0.5rem', marginBottom: '0.5rem' }} />
      <input placeholder="Área do Direito (Ex: Cível)" value={area} onChange={e => setArea(e.target.value)} style={{ width: '100%', padding: '0.5rem', marginBottom: '0.5rem' }} />
      <textarea placeholder="Descreva os fatos do caso..." value={facts} onChange={e => setFacts(e.target.value)} rows={6} style={{ width: '100%', padding: '1rem', marginBottom: '1rem' }} />
      
      <button onClick={handleSubmit} disabled={loading} style={{ padding: '1rem 2rem', fontSize: '1rem', backgroundColor: '#0066ff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        {loading ? 'Gerando...' : 'Gerar Peça'}
      </button>

      {error && (
        <div style={{ marginTop: '2rem', color: 'red', backgroundColor: '#ffecec', padding: '1rem', borderRadius: '8px' }}>
          <strong>Erro:</strong> {error}
        </div>
      )}

      {output && (
        <div style={{ marginTop: '2rem', whiteSpace: 'pre-wrap', backgroundColor: '#f9f9f9', padding: '1rem', borderRadius: '8px' }}>
          <h2>Resultado:</h2>
          <p>{output}</p>
        </div>
      )}
    </div>
  );
}
