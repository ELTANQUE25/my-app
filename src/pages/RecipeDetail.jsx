import Title from "../components/atoms/Title";
import Button from "../components/atoms/Button";
import { useParams, useNavigate } from "react-router-dom";
import { useRecipes } from "../context/RecipesContext";

export default function RecipeDetail() {
  const { id } = useParams();  // slug
  const { getBySlug, toggleFav, remove } = useRecipes();
  const nav = useNavigate();
  const r = getBySlug(id);

  if (!r) return <main className="container"><div className="card">Ricetta non trovata.</div></main>;

  const tot = (r.prepMinutes||0)+(r.cookMinutes||0);

  return (
    <main className="container">
      <div className="card" style={{maxWidth: 800, margin: "0 auto"}}>
        <div className="row space-between">
          <Title level={1}>{r.title}</Title>
          <button onClick={() => toggleFav(r.id)} className="link" title="Preferito">
            {r.favorite ? "★" : "☆"}
          </button>
        </div>
        <p className="muted mt-2">{r.course ?? "—"} · {tot} min</p>

        <h3 className="mt-4">Ingredienti</h3>
        <ul>
          {r.ingredients.map(i => <li key={i.id}>{i.name}</li>)}
        </ul>

        <h3 className="mt-4">Preparazione</h3>
        <ol>
          {r.steps.map((s, i) => <li key={i}>{s}</li>)}
        </ol>

        <div className="row mt-3">
          <Button variant="ghost" onClick={() => { remove(r.id); nav("/"); }}>Elimina</Button>
          <Button variant="ghost" onClick={() => nav("/")}>Torna</Button>
        </div>
      </div>
    </main>
  );
}
