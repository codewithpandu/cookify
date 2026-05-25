import { useQuery } from "@tanstack/react-query";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Recipes from "../components/RecipeCard";
import { getAllRecipes } from "../services/recipes";
import type { RecipesResponse } from "../services/recipes";

export default function RecipesPage() {
  const { data, isLoading, error } = useQuery<RecipesResponse>({
    queryKey: ["recipes"],
    queryFn: getAllRecipes,
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
      <section className="py-24">
        <div className="container p-4">
          <h3 className="text-2xl font-semibold">All recipes</h3>
          <Recipes data={data} />
        </div>
      </section>
    </Layout>
  );
}
