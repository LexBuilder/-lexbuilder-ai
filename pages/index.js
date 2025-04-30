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
    <div className="min-h-screen bg-gradient-to-b from-blue-200 to-white flex items-center justify-center py-10 px-4">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl p-10 space-y-10">
        <h1 className="text-5xl font-bold text-center text-blue-800">Peticiona.ai</h1>
        <p className="text-center text-lg text-gray-600">
          Gere petições completas com inteligência artificial. Basta selecionar o tipo e descrever o caso.
        </p>

        <div className="space-y-8">
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">Tipo de Petição</label>
            <select
              className="w-full p-4 border border-gray-300 rounded-xl text-lg shadow-sm bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
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
            <label className="block text-lg font-semibold text-gray-700 mb-2">Fatos do Caso</label>
            <textarea
              className="w-full h-[1000px] p-6 border border-gray-300 rounded-xl resize-none shadow-sm text-gray-800 text-lg leading-relaxed focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Descreva aqui os fatos principais do caso com clareza..."
              value={fatos}
              onChange={(e) => setFatos(e.target.value)}
            />
          </div>

          <div className="text-center">
            <button
              onClick={gerarPeticao}
              className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 transition-all duration-300 text-white px-12 py-4 text-xl font-bold rounded-full shadow-lg hover:scale-105"
            >
              {carregando ? "Gerando Petição..." : "Gerar Petição"}
            </button>
          </div>

          {resposta && (
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 shadow-inner mt-8">
              <h2 className="text-2xl font-bold text-blue-700 mb-4">Petição Gerada:</h2>
              <pre className="whitespace-pre-wrap text-gray-900 text-lg leading-relaxed">
                {resposta}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
