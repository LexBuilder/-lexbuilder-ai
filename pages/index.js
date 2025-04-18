import { useState } from 'react';

export default function Home() {
  const [texto, setTexto] = useState('');
  const [resposta, setResposta] = useState('');
  const [carregando, setCarregando] = useState(false);

  async function gerarPeticao() {
    setCarregando(true);
    setResposta('');

    const res = await fetch('/api/gerar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: texto })
    });

    const data = await res.json();
    setResposta(data.resultado);
    setCarregando(false);
  }

  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-4">LexBuilder AI - Geração de Peça Jurídica</h1>
      <textarea
        className="w-full p-3 border rounded mb-4"
        rows={6}
        placeholder="Descreva aqui os fatos, nomes das partes e o tipo de peça jurídica..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <button
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        onClick={gerarPeticao}
        disabled={carregando || !texto.trim()}
      >
        {carregando ? 'Gerando...' : 'Gerar Peça'}
      </button>
      {resposta && (
        <div className="mt-6 p-4 border rounded bg-gray-50 whitespace-pre-wrap">
          {resposta}
        </div>
      )}
    </div>
  );
}
