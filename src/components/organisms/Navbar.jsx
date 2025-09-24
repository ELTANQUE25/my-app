import NavItem from "../molecules/NavItem";
import logo from "../../assets/Logo-Desk.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="brand">
        <img src={logo} alt="GustoLab" className="logo" />
        GustoLab
      </div>

      <div className="spacer" />
      <NavItem to="/">Home</NavItem>
      <NavItem to="/recipes/new">Nuova Ricetta</NavItem>
    </nav>
  );
}
