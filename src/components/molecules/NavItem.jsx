import { NavLink } from "react-router-dom";

export default function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-2 py-1 rounded ${isActive ? "bg-black text-white" : "hover:bg-gray-100"}`
      }
    >
      {children}
    </NavLink>
  );
}
