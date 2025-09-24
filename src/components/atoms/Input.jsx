export default function Input({ value, onChange, placeholder, type="text", className="" }) {
  return (
    <input
      type={type}
      value={value}
      onChange={e => onChange?.(e.target.value)}
      placeholder={placeholder}
      className={`border rounded px-3 py-2 outline-none focus:ring w-full ${className}`}
    />
  );
}
