export default function Button({ children, onClick, type="button", variant="primary", disabled }) {
  const base = "px-3 py-2 rounded cursor-pointer transition";
  const styles = variant === "ghost"
    ? "border border-gray-300 hover:bg-gray-100"
    : "bg-black text-white hover:opacity-90";
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`${base} ${styles} ${disabled ? "opacity-50 cursor-not-allowed":""}`}>
      {children}
    </button>
  );
}
