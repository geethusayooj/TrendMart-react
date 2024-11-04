import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../../config/api";
import axios from "axios";
import "./ProductDetailPage.css";

function ProductDetailPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  const getProduct = () => {
    axios
      .get(`${API_URL}/products/${productId}.json`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log("Error getting product details from the API...", error);
        setProduct({});
      });
  };
  useEffect(() => {
    getProduct();
  }, [productId]);
  return (
    <div className="productDetailsPage">
      <img className="imageofProduct" src={product.image} alt={product.title} />
      <div className="productdetails">
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p>Price:{product.price}</p>
        <p>Category:{product.category}</p>
        <p>Rating: {product?.rating?.rate}</p>
        <p>Reviews: {product?.rating?.count}</p>
      </div>
    </div>
  );
}
export default ProductDetailPage;
