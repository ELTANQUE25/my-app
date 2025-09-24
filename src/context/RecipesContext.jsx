import { createContext, useContext, useEffect, useMemo, useState } from "react";

const KEY = "gustolab:recipes:v1";
const RecipesContext = createContext(null);

function loadAll() {
  const raw = localStorage.getItem(KEY);
  return raw ? JSON.parse(raw) : [];
}
function saveAll(list) {
  localStorage.setItem(KEY, JSON.stringify(list));
}

export function RecipesProvider({ children }) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // bootstrap con 1 ricetta se vuoto
    const current = loadAll();
    if (current.length === 0) {
      const demo = [{
        id: crypto.randomUUID(),
        slug: "pasta-al-pomodoro",
        title: "Pasta al Pomodoro",
        course: "primo",
        ingredients: [{ id: crypto.randomUUID(), name: "Spaghetti 80g" }, { id: crypto.randomUUID(), name: "Passata 150g" }],
        steps: ["Cuoci la pasta", "Scalda sugo", "Manteca e servi"],
        prepMinutes: 5, cookMinutes: 10, favorite: false,
        createdAt: Date.now(), updatedAt: Date.now()
      }];
      saveAll(demo);
    }
    setRecipes(loadAll());
  }, []);

  const refresh = () => setRecipes(loadAll());

  const actions = useMemo(() => ({
    add: (r) => {
      const now = Date.now();
      const rec = { ...r, id: crypto.randomUUID(), createdAt: now, updatedAt: now };
      const list = loadAll(); list.push(rec); saveAll(list); refresh();
    },
    update: (id, patch) => {
      const list = loadAll();
      const i = list.findIndex(x => x.id === id);
      if (i < 0) return;
      list[i] = { ...list[i], ...patch, updatedAt: Date.now() };
      saveAll(list); refresh();
    },
    remove: (id) => {
      const list = loadAll().filter(x => x.id !== id);
      saveAll(list); refresh();
    },
    toggleFav: (id) => {
      const list = loadAll();
      const i = list.findIndex(x => x.id === id);
      if (i < 0) return;
      list[i].favorite = !list[i].favorite;
      list[i].updatedAt = Date.now();
      saveAll(list); refresh();
    },
    getBySlug: (slug) => loadAll().find(x => x.slug === slug) || null
  }), []);

  return (
    <RecipesContext.Provider value={{ recipes, ...actions }}>
      {children}
    </RecipesContext.Provider>
  );
}

export const useRecipes = () => {
  const ctx = useContext(RecipesContext);
  if (!ctx) throw new Error("useRecipes must be used within RecipesProvider");
  return ctx;
};
