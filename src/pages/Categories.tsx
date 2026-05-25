import { useQuery } from "@tanstack/react-query";
import Layout from "../components/Layout";
import { getAllMeals, getAllTags } from "../services/recipes";
import { Link } from "react-router-dom";

export default function CategoriesPage() {
  const { data: tags } = useQuery({
    queryKey: ["tags"],
    queryFn: getAllTags,
  });

  const { data: meals } = useQuery({
    queryKey: ["meals"],
    queryFn: getAllMeals,
  });

  return (
    <Layout>
      <section className="py-24">
        <div className="container p-4 space-y-8">
          <div>
            <h3 className="text-2xl font-semibold">Browse by Tags</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {tags?.map((tag) => (
                <Link
                  to={`/recipe/tag/${tag}`}
                  className="px-4 py-2  bg-amber-500 rounded font-semibold text-white hover:bg-amber-600"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Browse by Meals</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {meals?.map((meal) => (
                <Link
                  to={`/recipe/meal/${meal}`}
                  className="px-4 py-2  bg-amber-600 rounded font-semibold text-white hover:bg-amber-700"
                >
                  {meal}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
