'use client';
import { useState } from 'react';

export default function Home() {
  const [tipoPeticao, setTipoPeticao] = useState("Petição Inicial");
  const [fatos, setFatos] = useState("");
  const [resposta, setResposta] = useState("");
  const [carregando, setCarregando] = useState(false);

  async function gerarPeticao() {
    setCarregando(true);
    const prompt = `Elabore uma ${tipoPeticao.toLowerCase()} com base nos seguintes fatos: ${fatos}`;

    const respostaIA = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: prompt }),
    });

    const dados = await respostaIA.json();
    setResposta(dados.result);
    setCarregando(false);
  }

  return (
    <main className="flex flex-col items-center justify-start min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-6">Peticiona.ai</h1>

      <label className="mb-1 font-semibold">Tipo de Petição:</label>
      <select
        className="mb-4 p-2 border rounded w-72 text-gray-800"
        value={tipoPeticao}
        onChange={(e) => setTipoPeticao(e.target.value)}
      >
        <option>Petição Inicial</option>
        <option>Contestação</option>
        <option>Embargos de Declaração</option>
        <option>Apelação</option>
        <option>Agravo de Instrumento</option>
        <option>Agravo Interno</option>
        <option>Recurso Especial</option>
        <option>Agravo em Recurso Especial</option>
        <option>Recurso Extraordinário</option>
      </select>

      <textarea
        placeholder="Descreva aqui os fatos do caso..."
        className="w-full max-w-xl h-52 p-4 border rounded mb-4 text-gray-800"
        value={fatos}
        onChange={(e) => setFatos(e.target.value)}
      />

      <button
        onClick={gerarPeticao}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-2 rounded mb-4"
      >
        {carregando ? "Gerando..." : "Gerar Petição"}
      </button>

      {resposta && (
        <div className="w-full max-w-3xl bg-white p-4 border rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Resultado:</h2>
          <pre className="whitespace-pre-wrap text-gray-900">{resposta}</pre>
        </div>
      )}
    </main>
  );
}
