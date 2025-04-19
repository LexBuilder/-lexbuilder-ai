import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { saveAs } from "file-saver";
import html2pdf from "html2pdf.js";

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [facts, setFacts] = useState("");
  const [part, setPart] = useState("");
  const [opposingPart, setOpposingPart] = useState("");
  const [type, setType] = useState("");
  const [area, setArea] = useState("");
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) setUser(user);
      else router.push("/login");
    });
    return () => unsubscribe();
  }, []);

  const logout = async () => {
    await signOut(auth);
    router.push("/login");
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    setOutput("");

    const prompt = `Peça: ${type}\nÁrea: ${area}\nParte: ${part}\nParte Contrária: ${opposingPart}\nFatos: ${facts}`;

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Erro desconhecido no servidor");
      } else {
        setOutput(data.result);
      }
    } catch (err) {
      setError("Erro de conexão com o servidor: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const exportToWord = () => {
    const blob = new Blob([output], {
      type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    });
    saveAs(blob, "peticao-gerada.docx");
  };

  const exportToPDF = () => {
    const element = document.getElementById("pdf-content");
    html2pdf().from(element).save("peticao-gerada.pdf");
  };

  return (
    <div style={container}>
      <header style={header}>
        <img src="/logo.png" alt="Logo" style={{ height: "40px" }} />
        <nav style={nav}>
          <a href="/home" style={link}>Início</a>
          <a href="/" style={link}>Gerar Petição</a>
          {user && (
            <>
              <span style={userStyle}>👤 {user.email}</span>
              <button onClick={logout} style={logoutButton}>Sair</button>
            </>
          )}
        </nav>
      </header>

      <div style={{ ...card, marginTop: "6rem" }}>
        <h1 style={title}>Peticiona.ai</h1>
        <p style={subtitle}>Geração Inteligente de Peças Jurídicas</p>

        <label style={label}>Nome da Parte</label>
        <input style={input} value={part} onChange={(e) => setPart(e.target.value)} />

        <label style={label}>Parte Contrária</label>
        <input style={input} value={opposingPart} onChange={(e) => setOpposingPart(e.target.value)} />

        <label style={label}>Tipo de Peça</label>
        <input style={input} value={type} onChange={(e) => setType(e.target.value)} />

        <label style={label}>Área do Direito</label>
        <input style={input} value={area} onChange={(e) => setArea(e.target.value)} />

        <label style={label}>Fatos do Caso</label>
        <textarea style={textarea} rows={5} value={facts} onChange={(e) => setFacts(e.target.value)} />

        <button style={button} onClick={handleSubmit} disabled={loading}>
          {loading ? "Gerando Petição..." : "Gerar Petição"}
        </button>

        {error && <div style={errorBox}>{error}</div>}

        {output && (
          <div id="pdf-content" style={outputBox}>
            <h3>📄 Petição Gerada:</h3>
            <pre style={{ whiteSpace: "pre-wrap" }}>{output}</pre>
            <button onClick={exportToWord} style={exportButton}>Exportar como Word</button>
            <button onClick={exportToPDF} style={exportButton}>Exportar como PDF</button>
          </div>
        )}
      </div>
    </div>
  );
}

// Estilos (mesmos do anterior)...
// [Mantém os mesmos estilos que você já tem definidos abaixo]
