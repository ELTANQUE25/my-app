import NavItem from "../molecules/NavItem";
import logo from "../../assets/Logo-Desk.png";   // import del logo

export default function Navbar() {
  return (
    <nav className="flex items-center gap-3 border-b px-4 py-3">
      <img src={logo} alt="Logo" className="h-8" />   {/* uso del logo */}
      <div className="font-bold">GustoLab</div>
      <div className="flex gap-2 ml-auto">
        <NavItem to="/">Home</NavItem>
        <NavItem to="/recipes/new">Nuova Ricetta</NavItem>
      </div>
    </nav>
  );
}
