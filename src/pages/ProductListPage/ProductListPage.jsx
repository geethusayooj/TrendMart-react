import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./ProductListPage.css";
import axios from "axios";
import { API_URL } from "../../config/api";
import { Link } from "react-router-dom";
import coverimage from "../../assets/images/cover-2.jpg";

function ProductListPage({ searchQuery }) {  
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/products.json`)
      .then((response) => {
        const datas = Object.keys(response.data).map((productId) => {
          return {
            id: productId,
            ...response.data[productId],
          };
        });
        
        const productsArr = Object.values(datas);
        setProducts(productsArr.toReversed());
      })
      .catch((e) => console.log("Error getting products from the API...", e));
  }, []);
  return (
    <>
      <div className="cover-image-container">
        <img className="coverImage" src={coverimage} />
        <div className="cover-text">
          <h1>Welcome to Trend Mart</h1>
          <p>Trendy Picks, Every Day!</p>
        </div>
      </div>
      <div className="ProductListPage card-list">
        {products &&
          products
          .filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase()))
          .map((productDetails) => {
            return (
              <Link className="link" to={`/product/${productDetails.id}`}>
                <Card
                  key={productDetails.id}
                  sx={{ maxWidth: 300, minWidth: 300, borderRadius: 5 }}
                >
                  <CardMedia
                    sx={{ height: 250, backgroundSize: "contain" }}
                    image={productDetails.image}
                    title={productDetails.title}
                  />
                  <CardContent>
                    <Typography
                      className="cardsize"
                      gutterBottom
                      variant="h5"
                      component="div"
                    >
                      {productDetails.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      {productDetails.price}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
      </div>
    </>
  );
}

export default ProductListPage;
