import { useState } from 'react';
import { saveAs } from 'file-saver';

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

  const exportToWord = () => {
    const blob = new Blob([output], {
      type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    });
    saveAs(blob, 'peticao-gerada.docx');
  };

  return (
    <div style={container}>
      <div style={card}>
        <img src="/logo.png" alt="Logo Peticiona.ai" style={logo} />
        <h1 style={title}>Peticiona.ai</h1>
        <p style={subtitle}>Geração Inteligente de Peças Jurídicas</p>

        <label style={label}>Nome da Parte</label>
        <input style={input} value={part} onChange={e => setPart(e.target.value)} />

        <label style={label}>Parte Contrária</label>
        <input style={input} value={opposingPart} onChange={e => setOpposingPart(e.target.value)} />

        <label style={label}>Tipo de Peça</label>
        <input style={input} value={type} onChange={e => setType(e.target.value)} />

        <label style={label}>Área do Direito</label>
        <input style={input} value={area} onChange={e => setArea(e.target.value)} />

        <label style={label}>Fatos do Caso</label>
        <textarea style={textarea} rows={5} value={facts} onChange={e => setFacts(e.target.value)} />

        <button style={button} onClick={handleSubmit} disabled={loading}>
          {loading ? 'Gerando Peça...' : 'Gerar Peça'}
        </button>

        {error && <div style={errorBox}>{error}</div>}

        {output && (
          <div style={outputBox}>
            <h3>📄 Petição Gerada:</h3>
            <pre style={{ whiteSpace: 'pre-wrap' }}>{output}</pre>
            <button onClick={exportToWord} style={exportButton}>Exportar como Word</button>
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
  backgroundColor: '#f8f9fa',
  minHeight: '100vh',
  padding: '2rem',
  fontFamily: 'Segoe UI, sans-serif'
};

const card = {
  backgroundColor: '#fff',
  maxWidth: '720px',
  margin: '0 auto',
  padding: '2rem',
  borderRadius: '12px',
  boxShadow: '0 0 12px rgba(0,0,0,0.1)'
};

const logo = {
  width: '180px',
  display: 'block',
  margin: '0 auto 1rem'
};

const title = {
  textAlign: 'center',
  fontSize: '2rem',
  color: '#003366',
  marginBottom: '0.2rem'
};

const subtitle = {
  textAlign: 'center',
  color: '#555',
  marginBottom: '1.5rem'
};

const label = {
  fontWeight: 'bold',
  display: 'block',
  marginTop: '1rem',
  marginBottom: '0.3rem'
};

const input = {
  width: '100%',
  padding: '0.6rem',
  borderRadius: '5px',
  border: '1px solid #ccc'
};

const textarea = {
  width: '100%',
  padding: '0.8rem',
  borderRadius: '5px',
  border: '1px solid #ccc',
  resize: 'vertical'
};

const button = {
  marginTop: '1.5rem',
  width: '100%',
  padding: '0.9rem',
  backgroundColor: '#0066cc',
  color: '#fff',
  fontWeight: 'bold',
  fontSize: '1rem',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer'
};

const exportButton = {
  marginTop: '1rem',
  padding: '0.6rem 1.2rem',
  backgroundColor: '#28a745',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer'
};

const errorBox = {
  marginTop: '1rem',
  color: '#c00',
  backgroundColor: '#ffecec',
  padding: '1rem',
  borderRadius: '6px'
};

const outputBox = {
  marginTop: '2rem',
  backgroundColor: '#f1f1f1',
  padding: '1.2rem',
  borderRadius: '6px'
};

const footer = {
  textAlign: 'center',
  marginTop: '3rem',
  fontSize: '0.9rem',
  color: '#777'
};
