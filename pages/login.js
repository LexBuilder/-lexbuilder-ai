import { useState } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useRouter } from "next/router";
import Menu from "../components/Menu";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const registrar = async () => {
    if (senha.length < 6) {
      setErro("⚠️ A senha precisa ter no mínimo 6 caracteres.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, senha);
      router.push("/");
    } catch (err) {
      setErro("Erro ao registrar: " + err.message);
    }
  };

  const entrar = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      router.push("/");
    } catch (err) {
      setErro("Erro ao entrar: " + err.message);
    }
  };

  const sair = async () => {
    await signOut(auth);
    router.push("/login");
  };

  return (
    <div style={page}>
      <Menu />
      <div style={container}>
        <img src="/logo.png" alt="Logo Peticiona" style={logo} />
        <h2 style={titulo}>Bem-vindo de volta 👋</h2>
        <p style={subtitulo}>Acesse sua conta ou crie uma nova para começar</p>

        <input
          type="email"
          placeholder="Seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={input}
        />

        <input
          type="password"
          placeholder="Sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          style={input}
        />

        <button onClick={entrar} style={botao}>Entrar</button>
        <button onClick={registrar} style={{ ...botao, backgroundColor: "#28a745" }}>Registrar</button>
        <button onClick={sair} style={{ ...botao, backgroundColor: "#dc3545" }}>Sair</button>

        {erro && <p style={erroStyle}>{erro}</p>}
      </div>
    </div>
  );
}

const page = {
  background: "#f4f4f4",
  minHeight: "100vh",
  paddingTop: "5rem",
};

const container = {
  maxWidth: "420px",
  margin: "2rem auto",
  padding: "2rem",
  background: "#fff",
  borderRadius: "10px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  fontFamily: "Segoe UI, sans-serif",
  textAlign: "center",
};

const logo = {
  height: "60px",
  marginBottom: "1rem",
};

const titulo = {
  fontSize: "1.8rem",
  color: "#003366",
  marginBottom: "0.2rem",
};

const subtitulo = {
  color: "#666",
  marginBottom: "1.5rem",
};

const input = {
  width: "100%",
  padding: "0.8rem",
  marginBottom: "1rem",
  borderRadius: "6px",
  border: "1px solid #ccc",
};

const botao = {
  width: "100%",
  padding: "0.8rem",
  marginBottom: "0.8rem",
  borderRadius: "6px",
  border: "none",
  fontWeight: "bold",
  color: "#fff",
  backgroundColor: "#0066cc",
  cursor: "pointer",
  transition: "background-color 0.3s",
};

const erroStyle = {
  color: "#c00",
  marginTop: "1rem",
  backgroundColor: "#ffecec",
  padding: "0.8rem",
  borderRadius: "5px",
};
