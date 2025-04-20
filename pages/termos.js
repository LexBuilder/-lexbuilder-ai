import Link from "next/link";

export default function Termos() {
  return (
    <div style={{ maxWidth: "800px", margin: "2rem auto", fontFamily: "Segoe UI", padding: "1rem" }}>
      <h1>Termos de Uso e Política de Privacidade</h1>

      <p><strong>Última atualização:</strong> Abril de 2025</p>

      <p>
        Ao acessar e utilizar a plataforma <strong>Peticiona.ai</strong>, você concorda com os termos e condições
        abaixo, bem como com o uso de suas informações conforme descrito nesta Política de Privacidade.
      </p>

      <h2>1. Sobre o Peticiona.ai</h2>
      <p>
        O Peticiona.ai é uma plataforma que utiliza tecnologia de inteligência artificial para auxiliar advogados na
        criação de peças processuais, resumos jurídicos e análises preditivas com base em dados públicos.
      </p>

      <h2>2. Responsabilidade e Limites de Uso</h2>
      <p>
        A plataforma não substitui o julgamento técnico e jurídico do profissional do Direito. O conteúdo gerado deve
        sempre ser revisado pelo advogado responsável antes de ser utilizado em qualquer processo judicial.
      </p>

      <h2>3. Coleta e Tratamento de Dados</h2>
      <p>
        Coletamos apenas dados fornecidos voluntariamente pelo usuário no momento do cadastro e uso da plataforma.
        Utilizamos cookies para melhorar a experiência de navegação. Nenhuma informação é vendida ou compartilhada com
        terceiros.
      </p>

      <h2>4. Consentimento e LGPD</h2>
      <p>
        O Peticiona.ai está em conformidade com a <strong>Lei Geral de Proteção de Dados (Lei nº 13.709/2018)</strong>.
        O usuário pode, a qualquer momento, solicitar a exclusão dos seus dados por meio de contato direto.
      </p>

      <h2>5. Segurança</h2>
      <p>
        Aplicamos medidas técnicas e administrativas para proteger os dados armazenados contra acesso não autorizado,
        vazamentos e outras ameaças.
      </p>

      <h2>6. Cancelamento e Exclusão</h2>
      <p>
        O usuário poderá cancelar sua conta a qualquer momento. Todos os dados serão excluídos permanentemente, conforme
        previsto na LGPD.
      </p>

      <h2>7. Alterações nos Termos</h2>
      <p>
        Estes termos podem ser alterados a qualquer momento, com aviso prévio por e-mail ou dentro da própria plataforma.
      </p>

      <h2>8. Contato</h2>
      <p>
        Em caso de dúvidas, entre em contato pelo e-mail: <a href="mailto:suporte@peticiona.ai">suporte@peticiona.ai</a>
      </p>

      <p style={{ marginTop: "2rem" }}>
        <Link href="/home">
          <a style={{
            background: "#6f42c1",
            color: "#fff",
            padding: "0.6rem 1.5rem",
            borderRadius: "6px",
            textDecoration: "none"
          }}>Voltar à página inicial</a>
        </Link>
      </p>
    </div>
  );
}
