import Link from "next/link";

export default function Checkout() {
  const planos = [
    {
      nome: "Peticiona BASIC",
      preco: "R$ 49,90/mês",
      beneficios: [
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
      beneficios: [
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
      beneficios: [
        "20 Criações de peças",
        "5 Análises preditivas",
        "5 Resumos de processo",
        "Peça extra: R$ 6,00",
        "Análise extra: R$ 2,50",
        "Resumo extra: R$ 2,50"
      ]
    }
  ];

  return (
    <div style={{ fontFamily: "Segoe UI", padding: "2rem" }}>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>Escolha seu plano Peticiona.ai</h1>

      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "2rem",
        justifyContent: "center"
      }}>
        {planos.map((plano, index) => (
          <div key={index} style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            width: "300px",
            padding: "1.5rem",
            backgroundColor: "#fff",
            boxShadow: "0 0 8px rgba(0,0,0,0.05)"
          }}>
            <h3 style={{ textAlign: "center" }}>{plano.nome}</h3>
            <p style={{ textAlign: "center", fontWeight: "bold" }}>{plano.preco}</p>
            <ul style={{ paddingLeft: "1.5rem", marginBottom: "1rem" }}>
              {plano.beneficios.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <div style={{ textAlign: "center" }}>
              <button style={{
                background: "#6f42c1",
                color: "#fff",
                border: "none",
                padding: "0.6rem 1.5rem",
                fontSize: "1rem",
                borderRadius: "6px",
                cursor: "pointer"
              }}
              onClick={() => alert("Integração com o Stripe virá aqui")}>
                Assinar plano
              </button>
            </div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: "3rem" }}>
        <Link href="/home">
          <a style={{ color: "#6f42c1", textDecoration: "underline" }}>
            Voltar à página inicial
          </a>
        </Link>
      </div>
    </div>
  );
}
