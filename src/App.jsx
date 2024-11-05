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
import WomenClothing from "./components/Womenclothing/Womenclothing"
import ProductDetailPage from "./pages/ProductDetailPage/ProductDetailPage";
import CreateProductPage from "./pages/CreateProductPage/CreateProductPage";



function App() {
  const [products, setProducts] = useState([]);
  const createProduct  = (productDetails) => {
    const newProduct = {
      ...productDetails,
    };
    setProducts((prevProducts) => [newProduct, ...prevProducts]);
  };
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/jewelery" element={<Jewelery />} />
        <Route path="/menclothing" element={<MenClothing />} />
        <Route path="/womenclothing" element={<WomenClothing />} />
        <Route path="/product/:productId" element={<ProductDetailPage />} />
        <Route path="/products/create" element={<CreateProductPage callbackToCreate={ createProduct }/>} />

       
       

      </Routes>
    </>
  );
}

export default App;
