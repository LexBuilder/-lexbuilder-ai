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
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl p-10 space-y-10">
        <h1 className="text-5xl font-bold text-center text-blue-800">
          Peticiona.ai
        </h1>
        <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto">
          Gere automaticamente petições jurídicas com inteligência artificial. Selecione o tipo, descreva os fatos e receba a peça pronta.
        </p>

        <div className="space-y-6">
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">Tipo de Petição</label>
            <select
              className="w-full p-4 border border-gray-300 rounded-xl text-base shadow-sm"
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
              className="w-full h-[600px] p-6 border border-gray-300 rounded-xl resize-none shadow-sm text-gray-800 text-base"
              placeholder="Descreva aqui os fatos principais do caso com clareza..."
              value={fatos}
              onChange={(e) => setFatos(e.target.value)}
            />
          </div>

          <div className="text-center">
            <button
              onClick={gerarPeticao}
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 text-lg font-semibold rounded-xl shadow-md transition-all"
            >
              {carregando ? "Gerando Petição..." : "Gerar Petição"}
            </button>
          </div>

          {resposta && (
            <div className="bg-gray-50 border border-gray-300 rounded-xl p-6 shadow-inner">
              <h2 className="text-2xl font-bold text-blue-700 mb-4">Petição Gerada:</h2>
              <pre className="whitespace-pre-wrap text-gray-900 text-base leading-relaxed">
                {resposta}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
