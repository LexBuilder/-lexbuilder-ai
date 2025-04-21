export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '32px', color: '#4B0082' }}>Bem-vindo ao Peticiona.ai</h1>
        <p style={{ fontSize: '18px', color: '#333' }}>Crie petições com Inteligência Artificial de forma rápida e profissional</p>
        <a href="/login">
          <button style={{
            marginTop: '20px',
            padding: '10px 20px',
            backgroundColor: '#4B0082',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            cursor: 'pointer'
          }}>
            Testar Grátis
          </button>
        </a>
      </header>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '24px', color: '#4B0082' }}>Como Funciona</h2>
        <ul>
          <li>1. Escolha o tipo de petição</li>
          <li>2. Preencha as informações</li>
          <li>3. Gere sua petição em PDF</li>
        </ul>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '24px', color: '#4B0082' }}>Planos Disponíveis</h2>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {[
            {
              nome: "Peticiona BASIC",
              preco: "Gratuito",
              descricao: "Ideal para testes.",
            },
            {
              nome: "INTERMEDIÁRIO",
              preco: "R$ 49/mês",
              descricao: "Para quem usa com frequência.",
            },
            {
              nome: "PARA PESSOA FÍSICA",
              preco: "R$ 89/mês",
              descricao: "Acesso total e suporte especial.",
            }
          ].map((plano, index) => (
            <div key={index} style={{
              flex: '1',
              minWidth: '250px',
              border: '1px solid #ccc',
              padding: '20px',
              borderRadius: '12px',
              backgroundColor: '#f9f9f9'
            }}>
              <h3 style={{ color: '#4B0082' }}>{plano.nome}</h3>
              <p><strong>{plano.preco}</strong></p>
              <p>{plano.descricao}</p>
              <a href="/checkout">
                <button style={{
                  marginTop: '10px',
                  padding: '8px 16px',
                  backgroundColor: '#4B0082',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer'
                }}>
                  Assinar
                </button>
              </a>
            </div>
          ))}
        </div>
      </section>

      <footer style={{ textAlign: 'center', fontSize: '12px', color: '#555' }}>
        © {new Date().getFullYear()} Peticiona.ai - Todos os direitos reservados.
        <br />
        <a href="/termos" style={{ color: '#4B0082', textDecoration: 'underline' }}>Termos de Uso</a>
      </footer>
    </div>
  );
}
