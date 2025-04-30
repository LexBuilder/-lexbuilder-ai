'use client';
import { useState } from 'react';
import { FileText, Download, Sparkles } from 'lucide-react';

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

  function exportarPDF() {
    const element = document.getElementById('peticao-gerada');
    const opt = {
      margin: 0.5,
      filename: 'peticao-peticiona.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    import('html2pdf.js').then((html2pdf) => {
      html2pdf.default().set(opt).from(element).save();
    });
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-green-100 py-10 px-6 flex flex-col items-center justify-start">
      <div className="w-full max-w-7xl bg-white rounded-3xl shadow-2xl p-10 space-y-10 border border-gray-200">
        <h1 className="text-5xl font-extrabold text-center text-blue-800">Peticiona.ai</h1>
        <p className="text-center text-xl text-gray-600">
          Gere petições jurídicas com layout moderno, IA integrada e exportação profissional.
        </p>

        {/* Coluna da esquerda: editor e seleção */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="col-span-1 space-y-6">
            <label className="text-lg font-semibold text-gray-700">Tipo de Petição</label>
            <select
              className="w-full p-4 rounded-xl border-2 border-blue-300 shadow-sm text-lg bg-white text-gray-800 focus:ring-2 focus:ring-blue-500"
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

            <label className="text-lg font-semibold text-gray-700">Fatos do Caso</label>
            <textarea
              className="w-full h-[10000px] p-6 rounded-xl border border-yellow-400 bg-yellow-50 text-gray-800 text-lg resize-none shadow-sm leading-relaxed focus:outline-none focus:ring-4 focus:ring-yellow-500"
              placeholder="Descreva os fatos detalhadamente..."
              value={fatos}
              onChange={(e) => setFatos(e.target.value)}
            />
            <button
              onClick={gerarPeticao}
              className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-blue-700 to-black text-white text-xl font-bold py-4 px-6 rounded-xl shadow-lg hover:scale-105 transition-transform"
            >
              <Sparkles className="w-6 h-6" /> {carregando ? "Gerando..." : "Gerar Petição"}
            </button>
          </div>

          {/* Espaço vazio (coluna 2, centralizador visual) */}
          <div className="hidden lg:block col-span-1"></div>

          {/* Coluna direita (apenas alinhamento estético via grade) */}
          <div className="hidden lg:block col-span-1"></div>
        </div>

        {/* Resultado da petição (abaixo) */}
        <div
          id="peticao-gerada"
          className="mt-10 bg-gray-50 border border-gray-300 rounded-2xl p-8 shadow-inner w-full"
        >
          <h2 className="text-3xl font-bold text-green-800 mb-6 flex items-center gap-2">
            <FileText className="w-6 h-6" /> Petição Gerada:
          </h2>
          {resposta ? (
            <pre className="whitespace-pre-wrap text-gray-900 text-lg leading-relaxed">
              {resposta}
            </pre>
          ) : (
            <p className="text-gray-500 text-base">A petição será exibida aqui após a geração.</p>
          )}

          {resposta && (
            <div className="text-right mt-6">
              <button
                onClick={exportarPDF}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-black hover:from-green-600 hover:to-black text-white px-6 py-3 rounded-xl shadow-md text-lg font-semibold transition-transform hover:scale-105"
              >
                <Download className="w-5 h-5" /> Exportar para PDF
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
