import {productData} from "../assets/productsData";
import {categories} from "../assets/CategoryListId";
import{useEffect, useState} from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Products = () => {
  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get("category");

  const [selectedCategory, setSelectedCategory] = useState(null);

  const navigate = useNavigate();
  

  useEffect(() => {
    if(categoryFromUrl){
      setSelectedCategory(categoryFromUrl);
    }
  }, [categoryFromUrl]);


  // category click handle
  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  // filter products based on selected category
  const filteredProducts = selectedCategory ? productData.filter((product) => product.category === selectedCategory) : productData;

  // add to cart function


  const handleAddToCart = (product) => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));

    if(!user){
      alert("Please login to purchase this product");
      navigate("/login");
      return;
    }
    
    // Unique cart key for each user
    const cartKey = `cart_${user.email}`;

    // If logged in -> add to cart
    const cart = JSON.parse(localStorage.getItem(cartKey)) || [];

    const existingProduct = cart.find(item => item.id === product.id);

    if(existingProduct){
      existingProduct.qty += 1;
    }else{
      cart.push({...product, qty: 1});
    }

    localStorage.setItem(cartKey, JSON.stringify(cart));
    window.dispatchEvent(new Event("cartUpdated"));
    
    alert("Product added to cart");
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen gap-8 p-8">
      <ul className="w-full h-fit md:w-1/4 bg-gray-100 p-4 text-gray-700 text-center md:text-left md:sticky md:top-28 ">
        <li onClick={() => setSelectedCategory(null)}
          className="py-2 border-b border-gray-300 cursor-pointer hover:text-pink-500">
            All Products
        </li>

        {/* more list */}
        {categories.map((category) => (
          <li key={category.id}
            onClick={() => handleCategoryClick(category.id)}
            className="py-2 border-b border-gray-300 cursor-pointer hover:text-pink-500"
          >
            {category.name}
          </li>
        ))}
      </ul>

      <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition duration-300 flex flex-col">
            <h2 className="text-xl font-bold mb-2">{product.name}</h2>
            <img src={product.imageURL} alt={product.name} 
              className="w-full h-48 object-contain rounded mb-2 max-auto"
            />
            <p className="text-gray-600 mb-2 flex-grow">{product.description}</p>
            <div className="flex items-center justify-between mt-4">
              <p className="font-semibold">MRP Rs.{product.price}</p>
              <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded cursor-pointer"
                onClick = {() => handleAddToCart(product)}

              >
                Buy Now
              </button> 
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
