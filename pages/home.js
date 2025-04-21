import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      {/* HERO */}
      <section className="text-center py-20 bg-white shadow-sm">
        <h1 className="text-4xl font-bold mb-4">Sua Petição em Minutos com Inteligência Artificial</h1>
        <p className="text-lg mb-6">Rápido, seguro e com qualidade profissional. Comece gratuitamente agora!</p>
        <Link href="/login">
          <button className="px-6 py-3 bg-purple-700 text-white rounded-xl hover:bg-purple-800 transition">
            Testar Grátis
          </button>
        </Link>
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-16 px-4 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">Como Funciona</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-2">1. Escolha o Tipo de Petição</h3>
            <p>Selecione o modelo jurídico que deseja gerar.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-2">2. Preencha os Dados</h3>
            <p>Forneça as informações principais do caso.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-2">3. Receba em PDF</h3>
            <p>Baixe sua petição pronta em poucos segundos.</p>
          </div>
        </div>
      </section>

      {/* PLANOS */}
      <section className="bg-white py-20 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Escolha o seu Plano</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              nome: "Peticiona BASIC",
              preco: "Gratuito",
              descricao: "Ideal para testes e estudantes.",
              beneficios: ["Acesso limitado", "1 petição por dia", "Suporte via FAQ"]
            },
            {
              nome: "INTERMEDIÁRIO",
              preco: "R$ 49/mês",
              descricao: "Para quem peticiona com frequência.",
              beneficios: ["Até 10 petições/mês", "Download em PDF", "Acesso a modelos avançados"]
            },
            {
              nome: "PARA PESSOA FÍSICA",
              preco: "R$ 89/mês",
              descricao: "Para quem deseja agilidade com qualidade.",
              beneficios: ["Petições ilimitadas", "Modelos completos", "Suporte prioritário"]
            }
          ].map((plano) => (
            <div key={plano.nome} className="bg-gray-100 p-6 rounded-xl shadow-md text-center">
              <h3 className="text-2xl font-bold mb-2">{plano.nome}</h3>
              <p className="text-xl text-purple-700 font-semibold mb-4">{plano.preco}</p>
              <p className="mb-4">{plano.descricao}</p>
              <ul className="mb-6 space-y-2">
                {plano.beneficios.map((b, i) => (
                  <li key={i}>✅ {b}</li>
                ))}
              </ul>
              <Link href="/checkout">
                <button className="bg-purple-700 text-white px-5 py-2 rounded-lg hover:bg-purple-800 transition">
                  Assinar
                </button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Perguntas Frequentes</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg">A plataforma substitui o advogado?</h3>
            <p>Não. A Peticiona.ai é uma ferramenta de apoio que gera rascunhos com base nas informações fornecidas. A revisão e validação final devem ser feitas por um advogado.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Posso testar gratuitamente?</h3>
            <p>Sim! O plano Peticiona BASIC permite testar gratuitamente com petições limitadas.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Quais áreas do direito estão disponíveis?</h3>
            <p>Atualmente, temos petições para direito civil, família, sucessões e contratos. Em breve, novas áreas.</p>
          </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="bg-gray-100 py-6 text-center text-sm text-gray-600">
        <p>© {new Date().getFullYear()} Peticiona.ai — Todos os direitos reservados.</p>
        <Link href="/termos">
          <p className="underline mt-2 hover:text-purple-700">Termos de Uso</p>
        </Link>
      </footer>
    </div>
  );
}
