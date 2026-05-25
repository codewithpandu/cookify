import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <div className="w-full max-w-7xl mx-auto">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </div>
    </main>
  );
}
