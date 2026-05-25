import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailRecipe from "./pages/DetailRecipe";
import HomePage from "./pages/Home";
import RecipesPage from "./pages/Recipes";
import RecipeByTag from "./pages/RecipeByTag";
import RecipeByMeal from "./pages/RecipeByMeal";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipes" element={<RecipesPage />} />
        <Route path="/recipe/:slug" element={<DetailRecipe />} />
        <Route path="/recipe/tag/:tag" element={<RecipeByTag />} />
        <Route path="/recipe/meal/:meal" element={<RecipeByMeal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
