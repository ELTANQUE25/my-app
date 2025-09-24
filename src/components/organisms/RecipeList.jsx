import { useEffect, useState } from 'react';
import { fetchRecipes } from '../../lib/api'; // importa la funzione fetchRecipes
import Button from "../atoms/Button"; // se vuoi un pulsante per la ricerca

export default function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");  // Stato per la query di ricerca
  const [error, setError] = useState(null);

  // Effettua la chiamata ogni volta che cambia la query
  useEffect(() => {
    const loadRecipes = async () => {
      setLoading(true);
      try {
        const data = await fetchRecipes(query);
        setRecipes(data);
      } catch (error) {
        setError("Errore nel recupero delle ricette");
      } finally {
        setLoading(false);
      }
    };

    loadRecipes();
  }, [query]);  // La chiamata si aggiorna quando la query cambia

  if (loading) return <div>Caricamento...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container">
      <div className="grid">
        {/* Form di ricerca */}
        <div className="card">
          <input
            type="text"
            placeholder="Cerca ricette"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="input"
          />
          <Button onClick={() => setQuery(query)}>Cerca</Button>
        </div>

        {/* Lista delle ricette */}
        <div className="grid cols-2">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="card">
              <img src={recipe.image} alt={recipe.title} className="rounded" />
              <h3 className="font-semibold">{recipe.title}</h3>
              <Button variant="ghost">Dettagli</Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
