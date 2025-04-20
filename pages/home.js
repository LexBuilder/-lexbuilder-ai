import Link from "next/link";

export default function Home() {
  return (
    <div style={{ fontFamily: "Segoe UI", padding: "2rem" }}>
      {/* Logo centralizada */}
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <img src="/logo.png" alt="Peticiona.ai" style={{ maxWidth: "240px" }} />
      </div>

      {/* Apresentação */}
      <section style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h1 style={{ fontSize: "2rem" }}>Peticiona.ai – Petições prontas em minutos</h1>
        <p style={{ fontSize: "1.2rem", maxWidth: "800px", margin: "1rem auto" }}>
          Otimize sua advocacia com uma inteligência artificial treinada para criar peças processuais de alta qualidade.
          Basta informar os dados essenciais e deixe o resto com a Peticiona.ai.
        </p>
        <Link href="/login">
          <button style={{
            background: "#6f42c1",
            color: "#fff",
            border: "none",
            padding: "0.8rem 2rem",
            fontSize: "1rem",
            borderRadius: "6px",
            cursor: "pointer"
          }}>
            Comece agora gratuitamente
          </button>
        </Link>
      </section>

      {/* Planos */}
      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>Escolha o plano ideal para você</h2>
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1.5rem"
        }}>
          {[
            {
              nome: "Peticiona BASIC",
              preco: "R$ 49,90/mês",
              descricao: [
                "5 Criações de peças",
                "1 Análise preditiva",
                "1 Resumo de processo",
                "Peça extra: R$ 13,50",
                "Análise extra: R$ 4,50",
                "Resumo extra: R$ 4,50"
              ]
            },
            {
              nome: "INTERMEDIÁRIO",
              preco: "R$ 89,90/mês",
              destaque: true,
              descricao: [
                "10 Criações de peças",
                "3 Análises preditivas",
                "3 Resumos de processo",
                "Peça extra: R$ 9,00",
                "Análise extra: R$ 3,00",
                "Resumo extra: R$ 3,00"
              ]
            },
            {
              nome: "PARA PESSOA FÍSICA",
              preco: "R$ 149,90/mês",
              descricao: [
                "20 Criações de peças",
                "5 Análises preditivas",
                "5 Resumos de processo",
                "Peça extra: R$ 6,00",
                "Análise extra: R$ 2,50",
                "Resumo extra: R$ 2,50"
              ]
            }
          ].map((plano, i) => (
            <div key={i} style={{
              border: plano.destaque ? "2px solid #6f42c1" : "1px solid #ccc",
              borderRadius: "10px",
              padding: "1.5rem",
              width: "280px",
              backgroundColor: plano.destaque ? "#f8f1ff" : "#fff"
            }}>
              <h3 style={{ textAlign: "center", marginBottom: "0.5rem" }}>{plano.nome}</h3>
              <p style={{ textAlign: "center", fontWeight: "bold" }}>{plano.preco}</p>
              <ul style={{ paddingLeft: "1.2rem", marginTop: "1rem" }}>
                {plano.descricao.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
              <div style={{ textAlign: "center", marginTop: "1rem" }}>
                <Link href="/login">
                  <button style={{
                    background: "#6f42c1",
                    color: "#fff",
                    border: "none",
                    padding: "0.6rem 1.5rem",
                    fontSize: "1rem",
                    borderRadius: "6px",
                    cursor: "pointer"
                  }}>
                    Comece agora
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparativo */}
      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ textAlign: "center" }}>Compare funcionalidades</h2>
        <ul style={{ maxWidth: "800px", margin: "1rem auto", fontSize: "1rem" }}>
          <li>✔️ Jurisprudências, leis e artigos aplicados</li>
          <li>✔️ Petições conforme a legislação vigente</li>
          <li>✔️ Argumentação clara e consistente</li>
          <li>✔️ Previsão de decisões com base em dados</li>
          <li>✔️ Resumo jurídico automático</li>
          <li>✔️ Treinada com mais de 500 milhões de processos</li>
          <li>✔️ Não requer prompt – IA te guia com perguntas</li>
        </ul>
      </section>

      {/* FAQ */}
      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ textAlign: "center" }}>Perguntas Frequentes</h2>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p><strong>🔹 Como faço para me cadastrar?</strong><br />Clique em qualquer botão “Comece agora”, preencha seu nome, e-mail e senha.</p>
          <p><strong>🔹 Como funciona o pagamento?</strong><br />Você pode testar gratuitamente. Depois, escolha um plano e pague por cartão de crédito de forma segura.</p>
          <p><strong>🔹 Esqueci minha senha. O que faço?</strong><br />Clique em “Esqueceu sua senha?” na tela de login e siga os passos para redefinir.</p>
          <p><strong>🔹 Peticiona.ai usa ChatGPT?</strong><br />A Peticiona.ai é uma solução própria, treinada para o Direito Brasileiro com bases específicas e atualizadas.</p>
        </div>
      </section>

      {/* Termos de uso */}
      <footer style={{ textAlign: "center", marginTop: "4rem" }}>
        <p style={{ fontSize: "0.9rem" }}>
          Ao continuar, você concorda com nossos{" "}
          <Link href="/termos">
            <a style={{ color: "#6f42c1", textDecoration: "underline" }}>Termos de Uso e Política de Privacidade</a>
          </Link>.
        </p>
      </footer>
    </div>
  );
}
