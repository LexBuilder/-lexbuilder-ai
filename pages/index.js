import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { saveAs } from "file-saver";

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

  const exportToPDF = async () => {
    const element = document.getElementById("pdf-content");

    if (!element) return alert("Nada para exportar!");

    const html2pdf = (await import("html2pdf.js")).default;

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

const container = {
  backgroundColor: "#f8f9fa",
  minHeight: "100vh",
  padding: "0",
  fontFamily: "Segoe UI, sans-serif",
};

const header = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  backgroundColor: "#fff",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem 2rem",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  zIndex: 999,
};

const nav = {
  display: "flex",
  gap: "1.2rem",
  alignItems: "center",
};

const link = {
  textDecoration: "none",
  color: "#003366",
  fontWeight: "bold",
  fontSize: "1rem",
};

const userStyle = {
  fontSize: "0.9rem",
  color: "#444",
};

const logoutButton = {
  background: "#dc3545",
  color: "#fff",
  border: "none",
  padding: "0.5rem 1rem",
  borderRadius: "4px",
  cursor: "pointer",
};

const card = {
  backgroundColor: "#fff",
  maxWidth: "720px",
  margin: "0 auto",
  padding: "2rem",
  borderRadius: "12px",
  boxShadow: "0 0 12px rgba(0,0,0,0.1)",
};

const title = {
  textAlign: "center",
  fontSize: "2rem",
  color: "#003366",
  marginBottom: "0.2rem",
};

const subtitle = {
  textAlign: "center",
  color: "#555",
  marginBottom: "1.5rem",
};

const label = {
  fontWeight: "bold",
  display: "block",
  marginTop: "1rem",
  marginBottom: "0.3rem",
};

const input = {
  width: "100%",
  padding: "0.6rem",
  borderRadius: "5px",
  border: "1px solid #ccc",
};

const textarea = {
  width: "100%",
  padding: "0.8rem",
  borderRadius: "5px",
  border: "1px solid #ccc",
  resize: "vertical",
};

const button = {
  marginTop: "1.5rem",
  width: "100%",
  padding: "0.9rem",
  backgroundColor: "#0066cc",
  color: "#fff",
  fontWeight: "bold",
  fontSize: "1rem",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

const exportButton = {
  marginTop: "1rem",
  padding: "0.6rem 1.2rem",
  backgroundColor: "#28a745",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

const errorBox = {
  marginTop: "1rem",
  color: "#c00",
  backgroundColor: "#ffecec",
  padding: "1rem",
  borderRadius: "6px",
};

const outputBox = {
  marginTop: "2rem",
  backgroundColor: "#f1f1f1",
  padding: "1.2rem",
  borderRadius: "6px",
};
