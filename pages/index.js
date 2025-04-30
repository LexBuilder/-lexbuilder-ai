'use client';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

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
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white py-10 px-6">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl p-10">
        <h1 className="text-5xl font-bold text-blue-800 text-center mb-10">
          Peticiona.ai
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Editor da petição */}
          <div className="space-y-6">
            <label className="block text-lg font-semibold text-gray-700">
              Tipo de Petição
            </label>
            <select
              className="w-full p-4 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-400"
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

            <label className="block text-lg font-semibold text-gray-700">
              Fatos do Caso
            </label>
            <textarea
              className="w-full h-[700px] p-6 rounded-xl border border-gray-300 resize-none shadow-sm text-gray-800 text-base leading-relaxed"
              placeholder="Descreva com clareza os fatos jurídicos do caso..."
              value={fatos}
              onChange={(e) => setFatos(e.target.value)}
            />

            <button
              onClick={gerarPeticao}
              className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white text-lg font-bold py-4 px-8 rounded-xl shadow-md transition-transform hover:scale-105"
            >
              <ArrowRight className="w-5 h-5" /> {carregando ? "Gerando..." : "Gerar Petição"}
            </button>
          </div>

          {/* Resultado da petição */}
          <div className="bg-gray-50 border border-gray-300 rounded-xl p-6 h-[850px] overflow-auto shadow-inner">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Pré-visualização:</h2>
            {resposta ? (
              <pre className="whitespace-pre-wrap text-gray-900 text-base leading-relaxed">
                {resposta}
              </pre>
            ) : (
              <p className="text-gray-500">A petição gerada aparecerá aqui.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
