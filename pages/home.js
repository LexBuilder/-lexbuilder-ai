export default function Home() {
  return (
    <div style={{
      fontFamily: 'Segoe UI, Arial, sans-serif',
      background: 'linear-gradient(to bottom, #f0f4ff, #ffffff)',
      padding: '40px'
    }}>
      <header style={{
        textAlign: 'center',
        marginBottom: '60px'
      }}>
        <h1 style={{ fontSize: '38px', color: '#4B0082', marginBottom: '12px' }}>
          Bem-vindo ao <span style={{ fontWeight: 'bold' }}>Peticiona.ai</span>
        </h1>
        <p style={{ fontSize: '20px', color: '#444' }}>
          Gere petições profissionais com Inteligência Artificial em segundos.
        </p>
        <a href="/login">
          <button style={{
            marginTop: '24px',
            padding: '12px 28px',
            backgroundColor: '#6a0dad',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            cursor: 'pointer',
            transition: '0.3s'
          }} onMouseOver={(e) => e.target.style.backgroundColor = '#5500aa'}
             onMouseOut={(e) => e.target.style.backgroundColor = '#6a0dad'}>
            Comece Grátis
          </button>
        </a>
      </header>

      <section style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h2 style={{ fontSize: '30px', color: '#4B0082', marginBottom: '20px' }}>
          Como Funciona
        </h2>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          {[
            { passo: "1. Escolha o tipo de petição" },
            { passo: "2. Preencha os dados do caso" },
            { passo: "3. Gere o PDF final" }
          ].map((item, index) => (
            <div key={index} style={{
              backgroundColor: '#fff',
              padding: '20px',
              borderRadius: '12px',
              width: '280px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}>
              <p style={{ fontSize: '18px', color: '#333' }}>{item.passo}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ textAlign: 'center', fontSize: '30px', color: '#4B0082', marginBottom: '40px' }}>
          Planos Disponíveis
        </h2>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '24px'
        }}>
          {[
            {
              nome: "Peticiona BASIC",
              preco: "Gratuito",
              descricao: "Ideal para testes e estudantes."
            },
            {
              nome: "INTERMEDIÁRIO",
              preco: "R$ 49/mês",
              descricao: "Para quem peticiona com frequência."
            },
            {
              nome: "PARA PESSOA FÍSICA",
              preco: "R$ 89/mês",
              descricao: "Agilidade, qualidade e suporte."
            }
          ].map((plano, index) => (
            <div key={index} style={{
              backgroundColor: '#fff',
              padding: '24px',
              width: '300px',
              borderRadius: '16px',
              boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <h3 style={{ color: '#4B0082', fontSize: '22px' }}>{plano.nome}</h3>
              <p style={{ fontWeight: 'bold', fontSize: '18px', margin: '10px 0' }}>{plano.preco}</p>
              <p>{plano.descricao}</p>
              <a href="/checkout">
                <button style={{
                  marginTop: '16px',
                  padding: '10px 20px',
                  backgroundColor: '#4B0082',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: '0.3s'
                }} onMouseOver={(e) => e.target.style.backgroundColor = '#3a0066'}
                   onMouseOut={(e) => e.target.style.backgroundColor = '#4B0082'}>
                  Assinar
                </button>
              </a>
            </div>
          ))}
        </div>
      </section>

      <footer style={{ textAlign: 'center', fontSize: '14px', color: '#555' }}>
        © {new Date().getFullYear()} Peticiona.ai — Todos os direitos reservados.
        <br />
        <a href="/termos" style={{ color: '#4B0082', textDecoration: 'underline' }}>Termos de Uso</a>
      </footer>
    </div>
  );
}
