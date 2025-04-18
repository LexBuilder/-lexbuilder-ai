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
    <div style={container}>
      <div style={card}>
        <img src="/logo.png" alt="Peticiona.ai" style={logoStyle} />
        <h1 style={title}>Peticiona.ai</h1>
        <p style={subtitle}>Geração Inteligente de Peças Jurídicas</p>

        <label style={label}>Nome da Parte</label>
        <input value={part} onChange={e => setPart(e.target.value)} style={input} />

        <label style={label}>Parte Contrária</label>
        <input value={opposingPart} onChange={e => setOpposingPart(e.target.value)} style={input} />

        <label style={label}>Tipo de Peça</label>
        <input value={type} onChange={e => setType(e.target.value)} placeholder="Ex: Petição Inicial" style={input} />

        <label style={label}>Área do Direito</label>
        <input value={area} onChange={e => setArea(e.target.value)} placeholder="Ex: Cível" style={input} />

        <label style={label}>Fatos do Caso</label>
        <textarea value={facts} onChange={e => setFacts(e.target.value)} rows={5} style={textarea} />

        <button onClick={handleSubmit} disabled={loading} style={button}>
          {loading ? 'Gerando Peça...' : 'Gerar Peça'}
        </button>

        {error && <div style={errorBox}>❌ {error}</div>}
        {output && (
          <div style={outputBox}>
            <h3>📝 Petição Gerada:</h3>
            <pre style={{ whiteSpace: 'pre-wrap' }}>{output}</pre>
          </div>
        )}
      </div>

      <footer style={footer}>
        © {new Date().getFullYear()} Peticiona.ai — Tecnologia Jurídica Inteligente
      </footer>
    </div>
  );
}

const container = {
  backgroundColor: '#f0f4f8',
  minHeight: '100vh',
  padding: '2rem',
  fontFamily: 'Segoe UI, sans-serif'
};

const card = {
  backgroundColor: '#fff',
  maxWidth: '700px',
  margin: '0 auto',
  padding: '2rem',
  borderRadius: '12px',
  boxShadow: '0 0 12px rgba(0,0,0,0.1)'
};

const logoStyle = {
  width: '180px',
  display: 'block',
  margin: '0 auto 1rem auto'
};

const title = {
  textAlign: 'center',
  fontSize: '2rem',
  color: '#003366',
  marginBottom: '0.3rem'
};

const subtitle = {
  textAlign: 'center',
  fontSize: '1rem',
  color: '#666',
  marginBottom: '2rem'
};

const label = {
  fontWeight: 'bold',
  display: 'block',
  marginBottom: '0.3rem',
  marginTop: '1rem'
};

const input = {
  width: '100%',
  padding: '0.6rem',
  borderRadius: '6px',
  border: '1px solid #ccc'
};

const textarea = {
  width: '100%',
  padding: '0.8rem',
  borderRadius: '6px',
  border: '1px solid #ccc',
  resize: 'vertical'
};

const button = {
  marginTop: '1.5rem',
  width: '100%',
  padding: '0.8rem',
  backgroundColor: '#0066cc',
  color: '#fff',
  border: 'none',
  borderRadius: '6px',
  fontSize: '1rem',
  cursor: 'pointer'
};

const errorBox = {
  backgroundColor: '#ffecec',
  color: '#cc0000',
  padding: '1rem',
  marginTop: '1rem',
  borderRadius: '6px'
};

const outputBox = {
  backgroundColor: '#f8f8f8',
  color: '#333',
  padding: '1.5rem',
  marginTop: '2rem',
  borderRadius: '6px',
  maxHeight: '400px',
  overflowY: 'auto'
};

const footer = {
  textAlign: 'center',
  marginTop: '3rem',
  color: '#888',
  fontSize: '0.9rem'
};
