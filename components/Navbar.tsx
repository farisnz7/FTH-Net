export function Navbar() {
  return (
    <header className="topbar">
      <div className="container nav-inner">
        <div className="logo">FTH Net</div>
        <nav>
          <a href="#services">Layanan</a>
          <a href="#packages">Paket</a>
          <a href="#testimonials">Testimoni</a>
          <a href="#contact">Kontak</a>
        </nav>
        <a className="btn-primary" href="#contact">
          Get A Quote
        </a>
      </div>
    </header>
  );
}
