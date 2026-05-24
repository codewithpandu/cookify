import Layout from "../components/layouts";
import Navbar from "../components/Navbar";
import Recipes from "../components/recipes";

export default function Home() {
  return (
    <Layout>
      <Navbar />

      <section className="py-24">
        <div className="container p-4">
          <div className="py-4">
            <small className="text-orange-400">Edisi · Masakan Rumahan</small>
            <h2 className="text-3xl w-80 font-serif py-4 md:text-5xl md:w-lg">
              Masakan Rumahan,
              <span className="text-orange-400"> Rasa Tak Tergantikan</span>
            </h2>
            <p>
              Kumpulan resep favorit dari dapur kami — sederhana, jujur, dan
              dibuat untuk dimasak ulang berkali-kali.
            </p>
          </div>

          <h3 className="text-2xl font-semibold">Semua Resep</h3>
          <Recipes />
        </div>
      </section>
    </Layout>
  );
}
