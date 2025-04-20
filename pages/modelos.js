import { useRouter } from "next/router";
import Menu from "../components/Menu";

export default function Modelos() {
  const router = useRouter();

  const acessarModelo = (tipo) => {
    const fatosPadrao = {
      alimentos: "O autor é pai da criança menor e vem pagando pensão de forma informal. Solicita fixação judicial dos alimentos para garantir o sustento do menor.",
      guarda: "O requerente deseja regularizar a guarda do menor, que vive sob seus cuidados desde o nascimento. A mãe/pai concorda com a guarda definitiva.",
      execucao: "A parte contrária descumpriu obrigação pactuada judicialmente. Requer o cumprimento da sentença com penhora de bens.",
      embargos: "O autor apresenta embargos de declaração contra sentença que contém omissão relevante quanto à análise do pedido subsidiário.",
    };

    const prompt = fatosPadrao[tipo];
    router.push(`/?modelo=${encodeURIComponent(prompt)}`);
  };

  return (
    <div style={pagina}>
      <Menu />
      <div style={container}>
        <h1 style={titulo}>📂 Modelos de Petições</h1>
        <p style={subtitulo}>Selecione um modelo e personalize com sua situação.</p>

        <div style={botoes}>
          <button onClick={() => acessarModelo("alimentos")} style={botao}>🍼 Alimentos</button>
          <button onClick={() => acessarModelo("guarda")} style={botao}>👶 Guarda</button>
          <button onClick={() => acessarModelo("execucao")} style={botao}>⚖️ Execução</button>
          <button onClick={() => acessarModelo("embargos")} style={botao}>📝 Embargos Decl.</button>
        </div>
      </div>
    </div>
  );
}

const pagina = {
  background: "#f8f9fa",
  minHeight: "100vh",
  paddingTop: "5rem",
};

const container = {
  maxWidth: "720px",
  margin: "0 auto",
  padding: "2rem",
  textAlign: "center",
  fontFamily: "Segoe UI, sans-serif",
};

const titulo = {
  fontSize: "2rem",
  color: "#003366",
  marginBottom: "0.5rem",
};

const subtitulo = {
  color: "#555",
  marginBottom: "2rem",
};

const botoes = {
  display: "flex",
  flexWrap: "wrap",
  gap: "1rem",
  justifyContent: "center",
};

const botao = {
  padding: "1rem 2rem",
  backgroundColor: "#0066cc",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "1rem",
  fontWeight: "bold",
};
