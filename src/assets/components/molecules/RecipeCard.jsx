import Title from "../atoms/Title";
import Button from "../atoms/Button";
import { Link } from "react-router-dom";

export default function RecipeCard({ recipe, onToggleFav, onDelete }) {
  const totMin = (recipe.prepMinutes || 0) + (recipe.cookMinutes || 0);
  return (
    <div className="border rounded p-4 flex flex-col gap-2">
      <Title level={3}>{recipe.title}</Title>
      <div className="text-sm text-gray-600">
        {recipe.course || "—"} · {totMin} min
      </div>
      <div className="flex gap-2 mt-2">
        <Link to={`/recipes/${recipe.slug}`} className="underline">Apri</Link>
        <button onClick={() => onToggleFav?.(recipe.id)} className="text-yellow-600">
          {recipe.favorite ? "★ Preferito" : "☆ Preferito"}
        </button>
        <Button variant="ghost" onClick={() => onDelete?.(recipe.id)}>Elimina</Button>
      </div>
    </div>
  );
}
