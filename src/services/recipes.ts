type Recipe = {
  id: number;
  image: string;
  name: string;
  cuisine: string;
  difficulty: string;
  cookTimeMinutes: number;
  rating: number;
  tags: string[];
};

type RecipesResponse = {
  recipes: Recipe[];
};
export const getRecipes = async (): Promise<RecipesResponse> => {
  const res = await fetch("https://dummyjson.com/recipes?limit=6");

  if (!res.ok) {
    throw new Error("Failed to fetch recipes");
  }

  return res.json();
};

export const recipeDetail = async (id: string) => {
  const res = await fetch(`https://dummyjson.com/recipes/${id}`);
  return res.json();
};
