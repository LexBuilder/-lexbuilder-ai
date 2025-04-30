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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-6">
      <div className="w-full max-w-5xl bg-white shadow-2xl rounded-3xl p-10 space-y-8">
        <h1 className="text-5xl font-bold text-center text-blue-800 tracking-tight">
          Gerador de Petições Inteligentes
        </h1>
        <p className="text-center text-lg text-gray-600">
          Escolha o tipo de peça, descreva os fatos e gere uma petição profissional em segundos.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <label className="block font-semibold text-lg text-gray-800">
              Tipo de Petição
            </label>
            <select
              className="w-full p-4 border border-gray-300 rounded-xl text-gray-800 text-base shadow-sm"
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

            <label className="block font-semibold text-lg text-gray-800">
              Fatos do Caso
            </label>
            <textarea
              className="w-full h-64 p-4 border border-gray-300 rounded-xl resize-none shadow-sm text-gray-700"
              placeholder="Descreva com clareza os fatos principais do caso..."
              value={fatos}
              onChange={(e) => setFatos(e.target.value)}
            />
            <button
              onClick={gerarPeticao}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg py-3 rounded-xl shadow-md transition-all"
            >
              {carregando ? "Gerando Petição..." : "Gerar Petição"}
            </button>
          </div>

          {resposta && (
            <div className="col-span-1 md:col-span-1 bg-gray-50 border border-gray-300 rounded-xl p-6 overflow-auto shadow-inner">
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                Resultado da Petição:
              </h2>
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
