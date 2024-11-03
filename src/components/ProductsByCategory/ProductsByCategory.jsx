import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./ProductsByCategory.css";
import axios from "axios";
import { API_URL } from "../../config/api";
import { Link } from "react-router-dom";
function ProductsByCategory({ category }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/products.json`)
      .then((response) => {
        console.log("API response:", response.data);
        const datas = Object.values(response.data);
        
        const filteredData= datas.filter((data) => data.category === category)
        setProducts(filteredData);
      })
      .catch((e) => console.log("Error getting products from the API...", e));
    return () => {
        setProducts([])
    }
  }, []);
  return (
    <div className="ProductByCategory card-list">
      {products &&
        products.map((productDetails) => {
          return (
            
            <Card key={productDetails.id} sx={{ maxWidth: 345 ,minWidth:345,borderRadius:5}}>
              <CardMedia
                sx={{ height: 250, backgroundSize: 'contain' }}
                image={productDetails.image}
                title={productDetails.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {productDetails.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {productDetails.price}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
    </div>
  );
}

export default ProductsByCategory;
