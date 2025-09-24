import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/organisms/Navbar";
import Home from "./pages/Home";
import NewRecipe from "./pages/NewRecipe";
import RecipeDetail from "./pages/RecipeDetail";


export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/recipes/new" element={<NewRecipe />} />
        <Route path="/recipes/:id" element={<RecipeDetail />} />
        <Route path="*" element={<div className="p-4">Pagina non trovata</div>} />
      </Routes>
    </BrowserRouter>
  );
}
