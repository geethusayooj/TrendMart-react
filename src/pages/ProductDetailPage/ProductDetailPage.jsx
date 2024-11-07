import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API_URL } from "../../config/api";
import axios from "axios";
import "./ProductDetailPage.css";
import EditProductPage from "../EditProductPage/EditProductPage";
import { Link } from "react-router-dom";
function ProductDetailPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const navigate = useNavigate();

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
  // delete a product
  const deleteProduct = () => {
    axios
      .delete(`${API_URL}/products/${productId}.json`)
      .then((response) => {
        navigate(-1);
      })
      .catch((error) => console.log("Error deleting product...", error));
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

        <div className="buttonDetailpage">
          <Link to="/">
            <button className="detailpageButton">Back </button>
          </Link>
          <Link className="detailpageButton" to={`/products/${productId}`}>
            <button>Edit</button>
          </Link>

          <button className="detailpageButton" onClick={deleteProduct}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default ProductDetailPage;
