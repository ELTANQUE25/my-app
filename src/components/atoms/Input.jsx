export default function Input({ value, onChange, placeholder, type="text", className="" }) {
  return (
    <input
      type={type}
      value={value}
      onChange={e => onChange?.(e.target.value)}
      placeholder={placeholder}
      className={`input ${className}`}
    />
  );
}
