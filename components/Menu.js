import Link from "next/link";

export default function Menu() {
  return (
    <header style={{ textAlign: "center", marginBottom: "2rem" }}>
      <div style={{ marginBottom: "1rem" }}>
        <Link href="/home">
          <img
            src="/logo.png"
            alt="Peticiona.ai"
            style={{ maxWidth: "220px", height: "auto", margin: "0 auto" }}
          />
        </Link>
      </div>
      <nav>
        <ul style={{ display: "flex", justifyContent: "center", gap: "2rem", listStyle: "none", padding: 0 }}>
          <li><Link href="/home">🏠 Início</Link></li>
          <li><Link href="/login">🔐 Login</Link></li>
          <li><Link href="/">📄 Gerar Petição</Link></li>
        </ul>
      </nav>
    </header>
  );
}
