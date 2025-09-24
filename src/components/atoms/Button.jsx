export default function Button({ children, onClick, type="button", variant="primary", disabled }) {
  const cls = variant === "ghost" ? "btn btn-ghost" : "btn";
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls}>
      {children}
    </button>
  );
}
