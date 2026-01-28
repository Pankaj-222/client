import { useState } from "react";
import "./Navbar.css";
// import logo from "../assets/logo-black.png";
import toggle_light from "../assets/night.png";
import toggle_dark from "../assets/day.png";
import logo_light from "../assets/logo-white.png";
import logo_dark from "../assets/logo-black.png";

const Navbar = ({ theme, setTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo-wrapper">
        <img
            src={theme === "dark" ? logo_light : logo_dark}
            className="logo"
            alt="Eduford"
        />
        <span className="logo-tooltip">Logo</span>
      </div>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <a href="/">Home</a>
        <a href="/">Profile</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
      </div>

      <div className="nav-right">
        <div className="search-box">
          <input type="text" placeholder="Search" />
          <span>🔍</span>
        </div>

        <img
          src={theme === "light" ? toggle_light : toggle_dark}
          className="toggle-icon"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        />

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
