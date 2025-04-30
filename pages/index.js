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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-6 flex flex-col items-center">
      <div className="w-full max-w-3xl bg-white p-8 rounded-2xl shadow-md space-y-6 mt-10">
        <h1 className="text-4xl font-bold text-blue-700 text-center">Peticiona.ai</h1>

        <div>
          <label className="block text-lg font-medium mb-2">Tipo de Petição:</label>
          <select
            value={tipoPeticao}
            onChange={(e) => setTipoPeticao(e.target.value)}
            className="w-full p-3 rounded-lg border border-gray-300"
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
        </div>

        <div>
          <label className="block text-lg font-medium mb-2">Fatos do Caso:</label>
          <textarea
            value={fatos}
            onChange={(e) => setFatos(e.target.value)}
            placeholder="Descreva aqui os fatos principais do caso..."
            className="w-full h-48 p-4 border border-gray-300 rounded-lg resize-none"
          />
        </div>

        <div className="text-center">
          <button
            onClick={gerarPeticao}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-lg font-semibold rounded-xl shadow transition-all"
          >
            {carregando ? "Gerando..." : "Gerar Petição"}
          </button>
        </div>

        {resposta && (
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mt-6 text-gray-900 whitespace-pre-wrap">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Petição Gerada:</h2>
            <pre className="text-base leading-relaxed">{resposta}</pre>
          </div>
        )}
      </div>
    </div>
  );
}
