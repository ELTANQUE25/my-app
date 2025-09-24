import Title from "../components/atoms/Title";
import Button from "../components/atoms/Button";
import { useParams, useNavigate } from "react-router-dom";
import { useRecipes } from "../context/RecipesContext";

export default function RecipeDetail() {
  const { id } = useParams();      // id == slug
  const { getBySlug, toggleFav, remove } = useRecipes();
  const nav = useNavigate();
  const r = getBySlug(id);

  if (!r) return <main className="p-4 max-w-2xl mx-auto"><p>Ricetta non trovata.</p></main>;

  const tot = (r.prepMinutes||0)+(r.cookMinutes||0);

  return (
    <main className="p-4 max-w-2xl mx-auto">
      <div className="flex items-start justify-between">
        <Title level={1}>{r.title}</Title>
        <button onClick={() => toggleFav(r.id)} className="text-yellow-600 ml-4">
          {r.favorite ? "★" : "☆"}
        </button>
      </div>
      <p className="text-sm text-gray-600 mb-3">{r.course ?? "—"} · {tot} min</p>

      <h3 className="font-semibold mt-4">Ingredienti</h3>
      <ul className="list-disc ml-6">
        {r.ingredients.map(i => <li key={i.id}>{i.name}</li>)}
      </ul>

      <h3 className="font-semibold mt-4">Preparazione</h3>
      <ol className="list-decimal ml-6">
        {r.steps.map((s, i) => <li key={i}>{s}</li>)}
      </ol>

      <div className="mt-4 flex gap-2">
        <Button variant="ghost" onClick={() => { remove(r.id); nav("/"); }}>Elimina</Button>
        <Button variant="ghost" onClick={() => nav("/")}>Torna</Button>
      </div>
    </main>
  );
}
