import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductDetailPage from "../ProductDetailPage/ProductDetailPage";
import { API_URL } from "../../config/api";
import "./CreateProductPage.css"

function CreateProductPage(props) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      title: title,
      price: price,
      description: description,
      category: category,
      image: image,
    };
  
  axios
    .post(`${API_URL}/products/.json`, newProduct)
    .then((response) => {
      props.callbackToCreate(ProductDetailPage);

      navigate("/");

      setTitle("");
      setPrice("");
      setDescription("");
      setCategory("");
      setImage("");
    })
    .catch((e) => console.log("Error creating a new products...", e));
};
  return (
    <div className="container">
      <h3>Add Product here..</h3> <br></br>
      <form className="product-form" onSubmit={handleSubmit}>
        
        <div class="form-group">
        <label>
          Title of Product:
        </label>
        <input
            type="text"
            name="title"
            placeholder="Enter the title of product"
            required
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div class="form-group">
        <label>
          Price:
          
        </label>
        <input
            type="number"
            name="price"
            placeholder="Enter the price "
            required
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>
        <div class="form-group">
        <label>
          Description:
          
        </label>
        <textarea
            name="description"
            placeholder="Enter the description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <div class="form-group">
        <label>
          Category:
          
        </label>
        <select
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select a category</option>
            <option value={"electronics"}>Electronics</option>
            <option value={"jewelery"}>Jewelery</option>
            <option value={"men's clothing"}>men's clothing</option>
            <option value={"women's clothing"}>women's clothing</option>
          </select>
        </div>
        <div class="form-group">
        <label>
          Image URL:
         
        </label>
        <input
            type="url"
            name="image"
            placeholder="https://i.imgur.com/eTmWoAN.png"
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
        
        </div>
     
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateProductPage;
