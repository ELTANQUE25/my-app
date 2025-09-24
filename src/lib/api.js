const API_KEY = "679e76db82a640af9157939ee8dccdc2";
const BASE_URL = "https://api.spoonacular.com/recipes/complexSearch";

// Funzione per recuperare le ricette
export async function fetchRecipes(query = "") {
  try {
    const response = await fetch(
      `${BASE_URL}?apiKey=${API_KEY}&query=${query}&number=10`
    );
    const data = await response.json();
    return data.results;  // ritorna le ricette
  } catch (error) {
    console.error("Errore durante il recupero delle ricette:", error);
    throw error;
  }
}
