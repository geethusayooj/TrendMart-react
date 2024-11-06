import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./EditProductPage.css";
import { API_URL } from "../../config/api";

function EditProductPage() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  const { productId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API_URL}/products/${productId}.json`)
      .then((response) => {
        setTitle(response.data.title);
        setPrice(response.data.price);
        setDescription(response.data.description);
        setCategory(response.data.category);
        setImage(response.data.image);
      })
      .catch((error) =>
        console.log("Error getting edit details from the API...", error)
      );
  }, [productId]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newDetails = {
      title: title,
      price: price,
      description: description,
      category: category,
      image: image,
    };

    axios
      .put(`${API_URL}/products/${productId}.json`, newDetails)
      .then((response) => {
        navigate(`/product/${productId}`);
      })
      .catch((e) => console.log("Error editing project...", e));
  };

  return (
    <div className="EditProductPage">
      <h3>Edit the product</h3>

      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label>Title of Product:</label>
          <input
            type="text"
            name="title"
            placeholder="Enter the title of product"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Price:</label>
          <input
            type="number"
            name="price"
            placeholder="Enter the price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Description:</label>
          <textarea
            name="description"
            placeholder="Enter the description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Category:</label>
          <select
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select a category</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
            <option value="men's clothing">Men's clothing</option>
            <option value="women's clothing">Women's clothing</option>
          </select>
        </div>

        <div className="form-group">
          <label>Image URL:</label>
          <input
            type="url"
            name="image"
            placeholder="https://i.imgur.com/eTmWoAN.png"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>

        <button type="submit">Edit</button>
      </form>
    </div>
  );
}

export default EditProductPage;
