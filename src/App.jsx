import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProductListPage from "./pages/ProductListPage/ProductListPage";
import Navbar from "./components/Navbar/Navbar";
import ProductsByCategory from "./components/ProductsByCategory/ProductsByCategory";
import Electronics from "./components/Electronics/Electronics";
import Jewelery from "./components/Jewelery/Jewelery";
import MenClothing from "./components/Menclothing/Menclothing";
import WomenClothing from "./components/Womenclothing/Womenclothing";
import ProductDetailPage from "./pages/ProductDetailPage/ProductDetailPage";
import EditProductPage from "./pages/EditProductPage/EditProductPage";
import CreateProductPage from "./pages/CreateProductPage/CreateProductPage";
import AboutPage from "./pages/AboutPage/AboutPage";

function App() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const createProduct = (productDetails) => {
    const newProduct = {
      ...productDetails,
    };
    setProducts((prevProducts) => [newProduct, ...prevProducts]);
  };

  // Update search query based on user input
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <>
      <Navbar onSearch={handleSearch} />

      <Routes>
        <Route
          path="/"
          element={<ProductListPage searchQuery={searchQuery} />}
        />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/jewelery" element={<Jewelery />} />
        <Route path="/menclothing" element={<MenClothing />} />
        <Route path="/womenclothing" element={<WomenClothing />} />
        <Route path="/product/:productId" element={<ProductDetailPage />} />
        <Route
          path="/products/create"
          element={<CreateProductPage callbackToCreate={createProduct} />}
        />
        <Route path="/products/:productId" element={<EditProductPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;
