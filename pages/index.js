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
    <main className="min-h-screen bg-gray-100 text-gray-900 flex flex-col items-center justify-start px-4 py-10">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-md p-8 space-y-6">
        <h1 className="text-4xl font-bold text-center text-blue-700">Peticiona.ai</h1>

        <div>
          <label className="block mb-2 font-medium text-lg">Tipo de Petição:</label>
          <select
            className="w-full p-3 border border-gray-300 rounded-lg text-base"
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
        </div>

        <div>
          <label className="block mb-2 font-medium text-lg">Fatos do Caso:</label>
          <textarea
            className="w-full h-48 p-4 border border-gray-300 rounded-lg resize-none"
            placeholder="Descreva aqui os fatos principais do caso jurídico..."
            value={fatos}
            onChange={(e) => setFatos(e.target.value)}
          />
        </div>

        <div className="text-center">
          <button
            onClick={gerarPeticao}
            className="bg-blue-600 hover:bg-blue-700 transition-colors text-white text-lg font-semibold px-6 py-3 rounded-xl shadow"
          >
            {carregando ? "Gerando Petição..." : "Gerar Petição"}
          </button>
        </div>

        {resposta && (
          <div className="bg-gray-50 border border-gray-300 rounded-xl p-6 mt-6 whitespace-pre-wrap">
            <h2 className="text-2xl font-semibold mb-4 text-blue-700">Petição Gerada:</h2>
            <pre className="text-gray-800 text-base leading-relaxed">{resposta}</pre>
          </div>
        )}
      </div>
    </main>
  );
}
