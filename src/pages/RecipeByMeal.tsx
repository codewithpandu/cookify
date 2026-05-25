import { useQuery } from "@tanstack/react-query";
import { getRecipeByMeal, type RecipesResponse } from "../services/recipes";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Recipes from "../components/RecipeCard";

export default function RecipeByMeal() {
  const { meal } = useParams();
  const { data, isLoading, error } = useQuery<RecipesResponse>({
    queryKey: ["recipes-meal", meal],
    queryFn: () => getRecipeByMeal(meal!),
    enabled: !!meal,
  });

  if (isLoading)
    return (
      <Layout>
        <Navbar />
        <section className="py-24">
          <div className="container p-4">
            <p>Loading...</p>
          </div>
        </section>
      </Layout>
    );
  if (error) return <p>Error</p>;
  if (!data) return null;

  return (
    <Layout>
      <Navbar />

      <section className="py-24">
        <div className="container p-4">
          <h3 className="text-2xl font-semibold">
            tags
            <span className="text-orange-500"> {data.recipes[0].mealType}</span>
          </h3>
          <Recipes data={data} />
        </div>
      </section>
    </Layout>
  );
}
