import { useQuery } from "@tanstack/react-query";
import { getRecipes } from "../services/recipes";
import { Link } from "react-router-dom";

console.log(await getRecipes());

export default function Recipes() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["recipes"],
    queryFn: getRecipes,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
      {data?.recipes.map((recipe) => (
        <div
          key={recipe.id}
          className="p-4 border rounded-2xl border-orange-500 mt-4 group cursor-pointer "
        >
          <Link to={`/recipe/${recipe.id}`} className="block">
            <div className="h-80 overflow-hidden rounded-2xl">
              <img
                src={recipe.image}
                className="w-full h-full group-hover:scale-110 transition-all"
                alt="Pizza"
              />
            </div>
          </Link>
          <div className="pt-4">
            <small className="text-orange-500">{recipe.cuisine}</small>
            <Link to={`/recipe/${recipe.id}`}>
              <h3 className="text-2xl font-serif hover:text-orange-500">
                {recipe.name}
              </h3>
            </Link>
          </div>
          <div className="space-x-2">
            <small>{recipe.cookTimeMinutes} minutes</small>
            <small>{recipe.difficulty}</small>
            <small>⭐{recipe.rating}</small>
            <div className="space-x-2">
              {recipe.tags.map((tag) => (
                <Link
                  to="#"
                  key={tag}
                  className="text-sm hover:underline inline-block"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
