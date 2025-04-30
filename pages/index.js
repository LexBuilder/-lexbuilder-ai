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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-10 px-4 flex justify-center items-start">
      <div className="w-[90%] max-w-screen-xl bg-white rounded-3xl shadow-2xl p-12 space-y-10 mx-auto">
        <h1 className="text-5xl font-bold text-center text-blue-800">
          Peticiona.ai
        </h1>
        <p className="text-center text-xl text-gray-600 max-w-3xl mx-auto">
          Gere petições jurídicas automaticamente com inteligência artificial. Escolha o tipo de peça, descreva os fatos e receba sua petição formatada.
        </p>

        <div className="space-y-8">
          <div>
            <label className="block text-xl font-semibold text-gray-700 mb-2">Tipo de Petição</label>
            <select
              className="w-full p-4 border border-gray-300 rounded-xl text-lg shadow-sm"
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
            <label className="block text-xl font-semibold text-gray-700 mb-2">Fatos do Caso</label>
            <textarea
              className="w-full h-[800px] p-6 border border-gray-300 rounded-xl resize-none shadow-sm text-gray-800 text-lg leading-relaxed"
              placeholder="Descreva aqui os fatos principais do caso com clareza..."
              value={fatos}
              onChange={(e) => setFatos(e.target.value)}
            />
          </div>

          <div className="text-center">
            <button
              onClick={gerarPeticao}
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 text-xl font-semibold rounded-xl shadow-lg transition-all"
            >
              {carregando ? "Gerando Petição..." : "Gerar Petição"}
            </button>
          </div>

          {resposta && (
            <div className="bg-gray-50 border border-gray-300 rounded-xl p-8 shadow-inner">
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
