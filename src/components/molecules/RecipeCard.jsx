import Title from "../atoms/Title";
import Button from "../atoms/Button";
import { Link } from "react-router-dom";

export default function RecipeCard({ recipe, onToggleFav, onDelete }) {
  const totMin = (recipe.prepMinutes || 0) + (recipe.cookMinutes || 0);
  return (
    <div className="card">
      <Title level={3}>{recipe.title}</Title>
      <div className="muted mt-2">{recipe.course || "—"} · {totMin} min</div>

      <div className="row mt-3">
        <Link to={`/recipes/${recipe.slug}`} className="link">Apri</Link>
        <button onClick={() => onToggleFav?.(recipe.id)} className="link" title="Preferito">
          {recipe.favorite ? "★ Preferito" : "☆ Preferito"}
        </button>
        <Button variant="ghost" onClick={() => onDelete?.(recipe.id)}>Elimina</Button>
      </div>
    </div>
  );
}
