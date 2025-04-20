import { useEffect, useState } from "react";
import Menu from "../components/Menu";

export default function Home() {
  const [fatos, setFatos] = useState("");
  const [resultado, setResultado] = useState("");
  const [carregando, setCarregando] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.2/html2pdf.bundle.min.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const gerarPeticao = async () => {
    if (!fatos.trim()) return alert("Por favor, preencha os fatos.");

    setCarregando(true);
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: fatos }),
      });

      const data = await response.json();
      setResultado(data.result || "Erro ao gerar.");
    } catch (err) {
      setResultado("Erro de conexão com o servidor.");
    }
    setCarregando(false);
  };

  const exportarPDF = () => {
    const elemento = document.getElementById("resultado-pdf");
    if (!elemento) return;
    const opt = {
      margin: 1,
      filename: "peticao-peticiona.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "cm", format: "a4", orientation: "portrait" },
    };
    window.html2pdf().set(opt).from(elemento).save();
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Segoe UI" }}>
      <Menu />
      <h1 style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>Peticiona.ai - Geração de Peça Jurídica</h1>

      <textarea
        rows={6}
        placeholder="Descreva aqui os fatos do caso..."
        value={fatos}
        onChange={(e) => setFatos(e.target.value)}
        style={{ width: "100%", padding: "1rem", borderRadius: "6px", fontSize: "1rem" }}
      />

      <button
        onClick={gerarPeticao}
        disabled={carregando}
        style={{
          marginTop: "1rem",
          padding: "0.8rem 1.6rem",
          background: "#6f42c1",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        {carregando ? "Gerando..." : "Gerar Peça"}
      </button>

      {resultado && (
        <div style={{ marginTop: "2rem" }}>
          <h2>Resultado:</h2>
          <div
            id="resultado-pdf"
            style={{
              whiteSpace: "pre-wrap",
              background: "#f8f9fa",
              padding: "1.5rem",
              borderRadius: "6px",
              marginBottom: "1rem",
            }}
          >
            {resultado}
          </div>
          <button
            onClick={exportarPDF}
            style={{
              padding: "0.6rem 1.4rem",
              background: "#343a40",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Exportar como PDF
          </button>
        </div>
      )}
    </div>
  );
}
