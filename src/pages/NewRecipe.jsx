import { useState } from "react";
import Input from "../components/atoms/Input";
import Button from "../components/atoms/Button";
import Title from "../components/atoms/Title";
import { useRecipes } from "../context/RecipesContext";
import { useNavigate } from "react-router-dom";

function slugify(s) {
  return s.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^a-z0-9\-]/g,"");
}

export default function NewRecipe() {
  const { add } = useRecipes();
  const nav = useNavigate();
  const [title, setTitle] = useState("");
  const [course, setCourse] = useState("altro");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [prep, setPrep] = useState(10);
  const [cook, setCook] = useState(10);

  const canSave = title.trim().length > 0 && ingredients.trim().length > 0 && steps.trim().length > 0;

  const handleSave = () => {
    const rec = {
      title,
      slug: slugify(title),
      course,
      ingredients: ingredients.split("\n").filter(Boolean).map(n => ({ id: crypto.randomUUID(), name: n })),
      steps: steps.split("\n").filter(Boolean),
      prepMinutes: Number(prep)||0, cookMinutes: Number(cook)||0,
      favorite: false
    };
    add(rec);
    nav(`/recipes/${rec.slug}`);
  };

  return (
    <main className="p-4 max-w-xl mx-auto">
      <Title level={2}>Nuova ricetta</Title>
      <div className="mt-4 flex flex-col gap-3">
        <Input value={title} onChange={setTitle} placeholder="Titolo" />
        <select className="border rounded px-3 py-2" value={course} onChange={e => setCourse(e.target.value)}>
          <option value="primo">Primo</option>
          <option value="secondo">Secondo</option>
          <option value="dolce">Dolce</option>
          <option value="altro">Altro</option>
        </select>
        <textarea className="border rounded p-2" rows={5} placeholder="Ingredienti (uno per riga)" value={ingredients} onChange={e=>setIngredients(e.target.value)} />
        <textarea className="border rounded p-2" rows={6} placeholder="Passi (uno per riga)" value={steps} onChange={e=>setSteps(e.target.value)} />
        <div className="flex gap-2">
          <Input type="number" value={prep} onChange={setPrep} placeholder="Prep min" />
          <Input type="number" value={cook} onChange={setCook} placeholder="Cottura min" />
        </div>
        <div className="flex gap-2">
          <Button onClick={handleSave} disabled={!canSave}>Salva</Button>
          <Button variant="ghost" onClick={() => history.back()}>Annulla</Button>
        </div>
      </div>
    </main>
  );
}
