// import { API_URL } from "../config/api";
// import { useState } from "react";
// import axios from "axios";
// function AddProduct(){
//  const [name,setName] = useState([]);
//  const [price,setPrice] = useState([]);
//  const [description,setDescription] = useState([]);
//  const [category,setCategory] = useState([]);
//  const [image,setImage] = useState([]);
//  const handleSubmit = (e) => {
//     e.preventDefault();

//     const newProduct = {
//         name: name,
//         price: price,
//         description:description,
//         category:category,
//         image:image,
//         productId: productId
//     }
//     axios.post(`${API_URL}/products`, newProduct)
//     .then( response => {

//         setName("")
//         setPrice("")
//         setDescription("")
//         setCategory("")
//         setImage("")

//         // invoke the function in the parent component
//         props.callbackToRefresh();
//     })
//     .catch(e => console.log("Error creating a new project...", e));

// };

//     }
// return(

// )
// }
// export default AddProduct;