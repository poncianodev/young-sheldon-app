import "./Navbar.css";
import logo from "../../assets/images/logo.png";

export function NavBar() {

  return (
    <header>
      <nav className="header-nav">
        <img src={logo} alt="Logo do Jovem Sheldon" />

        <ul className="nav-list">
          <li>
            <a href="#">Início</a>
          </li>
          <li>
            <a href="#about">História</a>
          </li>
          <li>
            <a href="#main-cast">Personagens</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
