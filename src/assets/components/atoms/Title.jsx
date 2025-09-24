export default function Title({ children, level = 1 }) {
  const Tag = `h${level}`;
  const sizes = {1:"text-2xl",2:"text-xl",3:"text-lg"};
  return <Tag className={`font-semibold ${sizes[level]||"text-lg"}`}>{children}</Tag>;
}
