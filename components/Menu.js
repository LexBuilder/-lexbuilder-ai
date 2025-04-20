import { useRouter } from "next/router";

const Menu = () => {
  const router = useRouter();
  const path = router.pathname;

  const linkStyle = (href) => ({
    textDecoration: "none",
    color: path === href ? "#0066cc" : "#333",
    fontWeight: path === href ? "bold" : "normal",
    marginRight: "1rem",
  });

  return (
    <nav style={nav}>
      <a href="/home" style={linkStyle("/home")}>🏠 Início</a>
      <a href="/" style={linkStyle("/")}>📄 Gerar Petição</a>
      <a href="/login" style={linkStyle("/login")}>🔐 Login</a>
    </nav>
  );
};

const nav = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "1rem",
  backgroundColor: "#f5f5f5",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 999,
};

export default Menu;
