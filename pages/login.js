import { useState } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const registrar = async () => {
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
    <div style={container}>
      <h1 style={titulo}>Login – Peticiona.ai</h1>

      <input
        style={input}
        type="email"
        placeholder="Seu e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        style={input}
        type="password"
        placeholder="Sua senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />

      <button style={button} onClick={entrar}>Entrar</button>
      <button style={{ ...button, backgroundColor: "#28a745" }} onClick={registrar}>Registrar</button>
      <button style={{ ...button, backgroundColor: "#dc3545" }} onClick={sair}>Sair</button>

      {erro && <p style={{ color: "red", marginTop: "1rem" }}>{erro}</p>}
    </div>
  );
}

const container = {
  maxWidth: "400px",
  margin: "5rem auto",
  padding: "2rem",
  background: "#fff",
  borderRadius: "8px",
  boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  fontFamily: "Segoe UI, sans-serif"
};

const titulo = {
  textAlign: "center",
  fontSize: "1.8rem",
  marginBottom: "2rem",
  color: "#003366"
};

const input = {
  width: "100%",
  padding: "0.8rem",
  marginBottom: "1rem",
  borderRadius: "5px",
  border: "1px solid #ccc"
};

const button = {
  width: "100%",
  padding: "0.9rem",
  marginBottom: "0.5rem",
  backgroundColor: "#0066cc",
  color: "#fff",
  fontWeight: "bold",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer"
};
