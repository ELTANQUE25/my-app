import { useState } from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

export default function SearchBar({ onSearch }) {
  const [q, setQ] = useState("");
  return (
    <div className="row">
      <Input value={q} onChange={setQ} placeholder="Cerca per titolo o ingrediente…" />
      <Button onClick={() => onSearch?.(q)}>Cerca</Button>
    </div>
  );
}
