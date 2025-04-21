import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      background: 'linear-gradient(135deg, #ede7f6, #f3e5f5)',
      fontFamily: 'Segoe UI, sans-serif',
      padding: '20px'
    }}>
      <div style={{
        background: 'white',
        padding: '40px',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        width: '100%',
        maxWidth: '400px',
        textAlign: 'center'
      }}>
        <h1 style={{ marginBottom: '12px', color: '#4B0082' }}>Bem-vindo ao Peticiona</h1>
        <p style={{ marginBottom: '32px', color: '#666' }}>Acesse sua conta para gerar petições inteligentes</p>

        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: '100%',
            padding: '12px',
            marginBottom: '20px',
            borderRadius: '8px',
            border: '1px solid #ccc'
          }}
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          style={{
            width: '100%',
            padding: '12px',
            marginBottom: '24px',
            borderRadius: '8px',
            border: '1px solid #ccc'
          }}
        />

        <button style={{
          width: '100%',
          padding: '12px',
          backgroundColor: '#6a0dad',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontSize: '16px',
          cursor: 'pointer',
          transition: '0.3s'
        }} onMouseOver={(e) => e.target.style.backgroundColor = '#4b0082'}
           onMouseOut={(e) => e.target.style.backgroundColor = '#6a0dad'}>
          Entrar
        </button>
      </div>
    </div>
  );
}
