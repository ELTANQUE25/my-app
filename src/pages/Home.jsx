import { useMemo, useState } from "react";
import SearchBar from "../components/molecules/SearchBar";
import FiltersBar from "../components/organisms/FiltersBar";
import RecipeList from "../components/organisms/RecipeList";
import { useRecipes } from "../context/RecipesContext";

export default function Home() {
  const { recipes, toggleFav, remove } = useRecipes();
  const [query, setQuery] = useState("");
  const [course, setCourse] = useState("");
  const [showOnlyFav, setShowOnlyFav] = useState(false);

  const filtered = useMemo(() => {
    return recipes.filter(r => {
      const q = query.toLowerCase();
      const matchesQ =
        r.title.toLowerCase().includes(q) ||
        r.ingredients.some(i => i.name.toLowerCase().includes(q));
      const matchesCourse = course ? r.course === course : true;
      const matchesFav = showOnlyFav ? r.favorite : true;
      return matchesQ && matchesCourse && matchesFav;
    });
  }, [recipes, query, course, showOnlyFav]);

  return (
    <main className="p-4 max-w-3xl mx-auto">
      <div className="flex flex-col gap-3 mb-4">
        <SearchBar onSearch={setQuery} />
        <FiltersBar
          course={course} setCourse={setCourse}
          showOnlyFav={showOnlyFav} setShowOnlyFav={setShowOnlyFav}
          onReset={() => { setQuery(""); setCourse(""); setShowOnlyFav(false); }}
        />
      </div>
      <RecipeList recipes={filtered} onToggleFav={toggleFav} onDelete={remove} />
    </main>
  );
}
