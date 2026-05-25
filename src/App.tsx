import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DetailRecipe from "./pages/DetailRecipe";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<DetailRecipe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
