import { Link, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { recipeDetail, type Recipe } from "../services/recipes";
import { useQuery } from "@tanstack/react-query";
import { CiClock2 } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { FaStar } from "react-icons/fa";

export default function DetailRecipe() {
  const { slug } = useParams();

  const { data, isLoading, error } = useQuery<Recipe>({
    queryKey: ["recipe", slug],
    queryFn: () => recipeDetail(slug!),
    enabled: !!slug,
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
  if (!data) return <p>Recipe not found</p>;

  return (
    <Layout>
      <section className="pt-24 pb-12">
        <div className="container p-4 max-w-3xl mx-auto">
          <Link to="/">
            <small className="text-orange-500">
              <span className="inline-flex items-center gap-2">
                <FaLongArrowAltLeft />
                Semua Resep
              </span>
            </small>
          </Link>

          <div className="mt-8">
            <h2 className="text-3xl text-center font-serif">{data.name}</h2>
            <div className="text-center space-x-2">
              <small className="text-orange-500 font-semibold">
                {data.cuisine}
              </small>
              <Link to={`/recipe/meal/${data.mealType}`}>
                <small className="font-semibold">{data.mealType}</small>
              </Link>
            </div>
            <div className="mx-auto rounded-2xl w-full md:w-md overflow-hidden mt-4">
              <img src={data.image} alt={data.name} className="w-full" />
            </div>
          </div>

          <div className="mt-8 flex justify-center items-center space-x-12">
            <div>
              <span className="flex flex-col items-center">
                <CiClock2 />
                <small>{data.cookTimeMinutes} minutes</small>
              </span>
            </div>
            <div>
              <span className="flex flex-col items-center">
                <GoPeople />
                <small>{data.servings} servings</small>
              </span>
            </div>
            <div>
              <div className="flex flex-col items-center">
                <span>{data.difficulty === "Easy" && <FaStar />}</span>
                <span>
                  {data.difficulty === "Medium" && (
                    <div className="flex gap-1">
                      <FaStar />
                      <FaStar />
                    </div>
                  )}
                </span>
                <small>{data.difficulty}</small>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 h-full justify-around items-center md:flex-row md:gap-8 md:items-stretch">
            <div className="w-2/3 md:w-1/2">
              <h3>Ingredients</h3>
              <hr className="mt-2" />
              <ul className="list-disc mt-2">
                {data.ingredients.map((ingredient: string) => (
                  <li key={ingredient}>{ingredient}</li>
                ))}
              </ul>
            </div>
            <div className="w-2/3 md:w-1/2">
              <h3>Instructions</h3>
              <hr className="mt-2" />
              <ul className="list-decimal mt-2">
                {data.instructions.map((instruction: string) => (
                  <li key={instruction}>{instruction}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
