const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#ecosistemas", label: "Ecosistemas" },
  { href: "#biodiversidad", label: "Biodiversidad" },
  { href: "#acciones", label: "Acciones" },
  { href: "#galeria", label: "Galería" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  return (
    <header>
      <div className="navbar">
        <div className="logo">
          Eco <span>Voces</span> Uramba
        </div>

        <nav className="nav-links" aria-label="Navegación principal">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}