import { useQuery } from "@tanstack/react-query";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Recipes from "../components/RecipeCard";
import { FaLongArrowAltRight } from "react-icons/fa";
import { getRecipes, type RecipesResponse } from "../services/recipes";
import { Link } from "react-router-dom";

console.log(await getRecipes(6));

export default function HomePage() {
  const { data, isLoading, error } = useQuery<RecipesResponse>({
    queryKey: ["recipes", 6],
    queryFn: () => getRecipes(6),
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
      <section className="pt-24 pb-12">
        <div className="container p-4">
          <div className="py-4">
            <small className="text-orange-400">
              Home Edition · Everyday Recipes
            </small>
            <h2 className="text-3xl w-80 font-serif py-4 md:text-5xl md:w-lg">
              Simple Meals,
              <span className="text-orange-400"> Made with Heart</span>
            </h2>
            <p>
              A collection of comforting recipes crafted for real kitchens —
              easy to cook, satisfying to share, and worth making again and
              again.
            </p>
          </div>

          <div className="mt-8">
            <div className="w-fit ms-auto">
              <Link to="/recipes">
                <span className="inline-flex items-center gap-2 text-right text-xl font-semibold  hover:text-orange-500">
                  More Recipes <FaLongArrowAltRight />
                </span>
              </Link>
            </div>
          </div>
          <Recipes data={data} />
          <div className="mt-8">
            <div className="flex flex-col gap-8 bg-amber-500 p-8 rounded-2xl w-full max-w-3xl mx-auto md:flex-row md:py-12">
              <h3 className="font-serif text-3xl text-white md:w-2/3">
                Cook simply, eat better.
              </h3>
              <p>
                Discover everyday recipes designed for real kitchens — easy
                steps, familiar ingredients, and meals worth making again.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
