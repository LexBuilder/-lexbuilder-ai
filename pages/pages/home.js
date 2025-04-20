import Menu from "../components/Menu";
import { useRouter } from "next/router";

export default function HomePage() {
  const router = useRouter();

  const handleTestClick = () => {
    router.push("/login");
  };

  const handlePlansClick = () => {
    router.push("/planos");
  };

  return (
    <div style={{ fontFamily: "Segoe UI, sans-serif", background: "#f8f9fa", minHeight: "100vh" }}>
      <Menu />

      <section style={{ padding: "4rem 2rem", textAlign: "center", backgroundColor: "#fff" }}>
        <h1 style={{ fontSize: "2.5rem", color: "#003366" }}>Petição pronta em minutos</h1>
        <p style={{ fontSize: "1.2rem", color: "#333", maxWidth: "800px", margin: "1rem auto" }}>
          Crie peças processuais de alta qualidade em segundos, informando apenas os dados básicos. 
          Fuja dos modelos prontos e otimize sua rotina.
        </p>
        <button onClick={handleTestClick} style={botaoRoxo}>Testar gratuitamente</button>
      </section>

      <section style={sessaoCinza}>
        <h2 style={tituloSecao}>Funcionalidades exclusivas do Peticiona.ai</h2>
        <ul style={lista}>
          <li>📄 Geração de peças processuais com IA</li>
          <li>📊 Jurimetria com dados reais (análise preditiva)</li>
          <li>📌 Resumo automático de processos</li>
          <li>📚 Petições com argumentação clara e atualizada</li>
        </ul>
      </section>

      <section style={sessaoPlanos}>
        <h2 style={tituloSecao}>Escolha o plano ideal para sua advocacia</h2>

        <div style={gradePlanos}>
          <div style={plano}>
            <h3>Peticiona Flex</h3>
            <p>💰 Sem mensalidade</p>
            <ul>
              <li>Peça: R$ 16</li>
              <li>Análise preditiva: R$ 6</li>
              <li>Resumo de processo: R$ 6</li>
            </ul>
            <button onClick={handleTestClick} style={botaoCinza}>Comece agora</button>
          </div>

          <div style={plano}>
            <h3>Peticiona Start</h3>
            <p>📦 R$ 49,90/mês</p>
            <ul>
              <li>5 peças incluídas (extra: R$ 13,50)</li>
              <li>1 análise preditiva (extra: R$ 4,50)</li>
              <li>1 resumo de processo (extra: R$ 4,50)</li>
            </ul>
            <button onClick={handlePlansClick} style={botaoRoxo}>Ver planos</button>
          </div>

          <div style={planoDestaque}>
            <h3>Peticiona Pro</h3>
            <p>🔥 R$ 89,90/mês</p>
            <ul>
              <li>10 peças incluídas (extra: R$ 9)</li>
              <li>3 análises preditivas (extra: R$ 3)</li>
              <li>3 resumos de processo (extra: R$ 3)</li>
            </ul>
            <button onClick={handlePlansClick} style={botaoRoxo}>Plano mais escolhido</button>
          </div>

          <div style={plano}>
            <h3>Peticiona Premium</h3>
            <p>🏆 R$ 149,90/mês</p>
            <ul>
              <li>20 peças incluídas (extra: R$ 6)</li>
              <li>5 análises preditivas (extra: R$ 2,50)</li>
              <li>5 resumos de processo (extra: R$ 2,50)</li>
            </ul>
            <button onClick={handlePlansClick} style={botaoCinza}>Comece agora</button>
          </div>
        </div>
      </section>

      <section style={sessaoCinza}>
        <h2 style={tituloSecao}>Perguntas Frequentes</h2>
        <div style={faq}>
          <p><strong>Como faço para me cadastrar?</strong> Basta clicar em “Testar gratuitamente” e preencher os dados.</p>
          <p><strong>Como funciona o pagamento?</strong> Após testar, você escolhe um plano e paga por cartão ou Pix.</p>
          <p><strong>Esqueci minha senha, o que fazer?</strong> Na tela de login, clique em “Esqueceu a senha?”.</p>
          <p><strong>O Peticiona.ai usa ChatGPT?</strong> Utiliza tecnologia própria com integração segura ao GPT-4.</p>
        </div>
      </section>
    </div>
  );
}

const botaoRoxo = {
  background: "#6f42c1",
  color: "#fff",
  padding: "0.8rem 1.6rem",
  border: "none",
  borderRadius: "8px",
  fontSize: "1rem",
  cursor: "pointer",
  marginTop: "1rem",
};

const botaoCinza = {
  ...botaoRoxo,
  background: "#343a40",
};

const sessaoCinza = {
  backgroundColor: "#f1f1f1",
  padding: "3rem 2rem",
  textAlign: "center",
};

const sessaoPlanos = {
  backgroundColor: "#fff",
  padding: "3rem 2rem",
  textAlign: "center",
};

const tituloSecao = {
  fontSize: "1.8rem",
  color: "#003366",
  marginBottom: "1rem",
};

const lista = {
  listStyle: "none",
  padding: 0,
  fontSize: "1.1rem",
  lineHeight: "2",
};

const gradePlanos = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "2rem",
  marginTop: "2rem",
};

const plano = {
  background: "#f9f9f9",
  padding: "1.5rem",
  borderRadius: "10px",
  boxShadow: "0 0 10px rgba(0,0,0,0.1)",
};

const planoDestaque = {
  ...plano,
  border: "2px solid #6f42c1",
  background: "#fffdf7",
};

const faq = {
  textAlign: "left",
  maxWidth: "800px",
  margin: "0 auto",
  fontSize: "1rem",
  lineHeight: "1.8",
};
