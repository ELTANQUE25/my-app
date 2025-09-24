import NavItem from "../molecules/NavItem";

export default function Navbar() {
  return (
    <nav className="flex items-center gap-3 border-b px-4 py-3">
      <div className="font-bold">GustoLab</div>
      <div className="flex gap-2">
        <NavItem to="/">Home</NavItem>
        <NavItem to="/recipes/new">Nuova Ricetta</NavItem>
      </div>
    </nav>
  );
}
