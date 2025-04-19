export default function HomePage() {
  return (
    <div style={{ fontFamily: 'Segoe UI', padding: '2rem', backgroundColor: '#f5f8fa', minHeight: '100vh' }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        background: '#fff',
        padding: '3rem',
        borderRadius: '12px',
        boxShadow: '0 0 20px rgba(0,0,0,0.05)'
      }}>
        <img src="/logo.png" alt="Peticiona Logo" style={{ display: 'block', margin: '0 auto 2rem', width: '200px' }} />
        <h1 style={{ fontSize: '2.5rem', color: '#003366', textAlign: 'center' }}>Bem-vindo ao Peticiona.ai</h1>
        <p style={{ fontSize: '1.1rem', color: '#444', textAlign: 'center', marginTop: '1rem' }}>
          Sua plataforma inteligente para geração automatizada de petições jurídicas com inteligência artificial.
        </p>

        <ul style={{ marginTop: '2rem', fontSize: '1.1rem', lineHeight: '1.8rem' }}>
          <li>⚖️ Gera petições personalizadas com base em dados reais</li>
          <li>📄 Exporta automaticamente para Word</li>
          <li>🧠 Usa tecnologia GPT para construir peças coerentes</li>
          <li>⏱️ Economia de tempo com ganho de produtividade</li>
        </ul>

        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <a href="/" style={{
            padding: '1rem 2rem',
            backgroundColor: '#0066cc',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '8px',
            fontSize: '1.2rem'
          }}>
            Começar agora gratuitamente
          </a>
        </div>
      </div>
    </div>
  );
}
