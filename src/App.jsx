import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import ProductListPage from "./pages/ProductListPage/ProductListPage";
import Navbar from "./components/Navbar";
import ProductsByCategory from "./components/ProductsByCategory/ProductsByCategory";
import Electronics from "./components/Electronics/Electronics";
import Jewelery from "./components/Jewelery/Jewelery";
import MenClothing from "./components/Menclothing/Menclothing";
import WomenClothing from "./components/womenclothing/Womenclothing.JSX";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/jewelery" element={<Jewelery />} />
        <Route path="/menclothing" element={<MenClothing  />} />
        <Route path="/womenclothing" element={<WomenClothing/>} />
        
      </Routes>
    </>
  );
}

export default App;
