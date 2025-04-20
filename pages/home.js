import Link from "next/link";

export default function Home() {
  return (
    <div style={{ fontFamily: "Segoe UI", padding: "2rem" }}>
      <h1 style={{ textAlign: "center" }}>Peticiona.ai – Petições prontas em minutos</h1>

      <p style={{ maxWidth: "800px", margin: "1rem auto", fontSize: "1.1rem", textAlign: "center" }}>
        Otimize sua advocacia com uma inteligência artificial treinada para criar peças processuais de alta qualidade.
        Basta informar os dados essenciais e deixe o resto com a Peticiona.ai.
      </p>

      <h2 style={{ textAlign: "center", marginTop: "3rem" }}>Escolha o plano ideal para você</h2>

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "2rem", marginTop: "2rem" }}>
        {/* Plano 1 */}
        <div style={{ border: "1px solid #ccc", borderRadius: "10px", padding: "1.5rem", width: "300px" }}>
          <h3>Peticiona BASIC</h3>
          <p><strong>R$ 49,90/mês</strong></p>
          <ul>
            <li>5 Criações de peças</li>
            <li>1 Análise preditiva</li>
            <li>1 Resumo de processo</li>
            <li>Peça extra: R$ 13,50</li>
            <li>Análise extra: R$ 4,50</li>
            <li>Resumo extra: R$ 4,50</li>
          </ul>
        </div>

        {/* Plano 2 */}
        <div style={{ border: "1px solid #ccc", borderRadius: "10px", padding: "1.5rem", width: "300px" }}>
          <h3>INTERMEDIÁRIO</h3>
          <p><strong>R$ 89,90/mês</strong></p>
          <ul>
            <li>10 Criações de peças</li>
            <li>3 Análises preditivas</li>
            <li>3 Resumos de processo</li>
            <li>Peça extra: R$ 9,00</li>
            <li>Análise extra: R$ 3,00</li>
            <li>Resumo extra: R$ 3,00</li>
          </ul>
        </div>

        {/* Plano 3 */}
        <div style={{ border: "1px solid #ccc", borderRadius: "10px", padding: "1.5rem", width: "300px" }}>
          <h3>PARA PESSOA FÍSICA</h3>
          <p><strong>R$ 149,90/mês</strong></p>
          <ul>
            <li>20 Criações de peças</li>
            <li>5 Análises preditivas</li>
            <li>5 Resumos de processo</li>
            <li>Peça extra: R$ 6,00</li>
            <li>Análise extra: R$ 2,50</li>
            <li>Resumo extra: R$ 2,50</li>
          </ul>
        </div>
      </div>

      {/* Comparativo */}
      <section style={{ marginTop: "3rem" }}>
        <h2 style={{ textAlign: "center" }}>Compare funcionalidades</h2>
        <ul style={{ maxWidth: "800px", margin: "1rem auto", fontSize: "1rem" }}>
          <li>✔️ Jurisprudências, leis e artigos aplicados</li>
          <li>✔️ Petições conforme a legislação vigente</li>
          <li>✔️ Argumentação clara e consistente</li>
          <li>✔️ Previsão de decisões com base em dados</li>
          <li>✔️ Resumo jurídico automático</li>
          <li>✔️ Treinada com base em casos reais e linguagem jurídica</li>
          <li>✔️ Não requer prompt – IA te guia com perguntas</li>
        </ul>
      </section>

      {/* FAQ */}
      <section style={{ marginTop: "3rem" }}>
        <h2 style={{ textAlign: "center" }}>Perguntas Frequentes</h2>
        <div style={{ maxWidth: "800px", margin: "0 auto", fontSize: "1rem" }}>
          <p><strong>🔹 Como faço para me cadastrar?</strong><br />Clique em qualquer botão “Comece agora”, preencha seu nome, e-mail e senha.</p>
          <p><strong>🔹 Como funciona o pagamento?</strong><br />Você pode testar gratuitamente. Depois, escolha um plano e pague por cartão de crédito de forma segura.</p>
          <p><strong>🔹 Esqueci minha senha. O que faço?</strong><br />Clique em “Esqueceu sua senha?” na tela de login e siga os passos para redefinir.</p>
          <p><strong>🔹 Peticiona.ai usa ChatGPT?</strong><br />A Peticiona.ai é uma solução própria, treinada para o Direito Brasileiro com bases específicas e atualizadas.</p>
        </div>
      </section>

      {/* Aviso ético */}
      <section style={{ maxWidth: "800px", margin: "2rem auto", textAlign: "center", fontSize: "0.95rem", color: "#555" }}>
        <p>
          ⚖️ <strong>Atenção:</strong> A Peticiona.ai é uma ferramenta de apoio baseada em dados e linguagem jurídica.
          Ela não substitui a atuação técnica do advogado, que continua sendo o responsável legal pela peça produzida.
          Sempre revise e valide os documentos gerados antes de protocolar.
        </p>
      </section>

      {/* Termos de uso */}
      <footer style={{ textAlign: "center", marginTop: "2rem", fontSize: "0.9rem" }}>
        <p>
          Ao continuar, você concorda com nossos{" "}
          <Link href="/termos">
            <a style={{ color: "#6f42c1", textDecoration: "underline" }}>Termos de Uso e Política de Privacidade</a>
          </Link>.
        </p>
      </footer>
    </div>
  );
}
