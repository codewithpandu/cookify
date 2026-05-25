import { slugify } from "../lib/slug";

export type Recipe = {
  id: number;
  image: string;
  name: string;
  cuisine: string;
  difficulty: string;
  cookTimeMinutes: number;
  rating: number;
  tags: string[];
  ingredients: string[];
  mealType: string;
  servings: number;
  instructions: string[];
};

export type RecipesResponse = {
  recipes: Recipe[];
};
export const getRecipes = async (limit: number): Promise<RecipesResponse> => {
  const res = await fetch(`https://dummyjson.com/recipes?limit=${limit}`);

  if (!res.ok) {
    throw new Error("Failed to fetch recipes");
  }

  return res.json();
};

export const getAllRecipes = async (): Promise<RecipesResponse> => {
  const res = await fetch("https://dummyjson.com/recipes");

  if (!res.ok) {
    throw new Error("Failed to fetch recipes");
  }

  return res.json();
};
export const getRecipeByTag = async (tag: string): Promise<RecipesResponse> => {
  const res = await fetch(`https://dummyjson.com/recipes/tag/${tag}`);

  if (!res.ok) {
    throw new Error("Failed to fetch recipes");
  }

  return res.json();
};
export const getRecipeByMeal = async (
  meal: string,
): Promise<RecipesResponse> => {
  const res = await fetch(`https://dummyjson.com/recipes/meal-type/${meal}`);

  if (!res.ok) {
    throw new Error("Failed to fetch recipes");
  }

  return res.json();
};

export const recipeDetail = async (slug: string): Promise<Recipe> => {
  const res = await fetch(`https://dummyjson.com/recipes`);
  if (!res.ok) {
    throw new Error("Failed to fetch recipes");
  }
  const data = await res.json();

  const recipe = data.recipes.find(
    (item: Recipe) => slugify(item.name) === slug,
  );
  if (!recipe) throw new Error("Recipe not found");
  return recipe;
};
