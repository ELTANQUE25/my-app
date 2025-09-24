import RecipeCard from "../molecules/RecipeCard";

export default function RecipeList({ recipes, onToggleFav, onDelete }) {
  if (!recipes || recipes.length === 0) {
    return <p className="text-gray-600">Nessuna ricetta trovata.</p>;
  }
  return (
    <ul className="grid gap-3">
      {recipes.map(r => (
        <li key={r.id}>
          <RecipeCard recipe={r} onToggleFav={onToggleFav} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
