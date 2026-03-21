import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import src from '../assets/images/logo.png';
import {MdShoppingCart} from "react-icons/md";

export default function Nav() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if(loggedUser){
      setUser(loggedUser);
    }
  }, []);


  useEffect(() => {
    // const user = JSON.parse(localStorage.getItem("loggedInUser"));

    // if(user){
    //   const cartKey = `cart_${user.email}`;
    //   const cartItems = JSON.parse(localStorage.getItem(cartKey)) || [];

    //   const totalQty = cartItems.reduce(
    //     (acc, item) => acc + (item.qty || 1),0
    //   );

    //   setCartCount(totalQty);
    // }

    const updateCartCount = () => {

      const user = JSON.parse(localStorage.getItem("loggedInUser"));
      if(user){
        const cartKey = `cart_${user.email}`;
        const cartItems = JSON.parse(localStorage.getItem(cartKey)) || [];
        const totalQty = cartItems.reduce((acc, item) => acc + (item.qty || 1), 0);

        setCartCount(totalQty);
      }else{
        setCartCount(0);
      }
    };

    // run once when navbar loads
    updateCartCount();

    window.addEventListener("cartUpdated", updateCartCount);

    return () => {
      window.removeEventListener("cartUpdated", updateCartCount);
    }
  }, []);


  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
    navigate("/login");
  };

  return (
    <>
      {/* Header */}
      <div className="bg-gray-200 px-4 py-2 flex justify-end gap-6">
        {!user ? (
          <>
            <NavLink className="text-gray-700 hover:text-blue-500 font-medium text-sm transition" to="/login">
              Sign In
            </NavLink>
            <NavLink to="/signup"className="text-gray-700 hover:text-blue-500 font-medium text-sm transition">
              Register
            </NavLink>
          </>
        ) : (
          <>
            <span className='text-gray-700 font-medium text-sm'>
              Hello, {user.firstName}
            </span>

            <button onClick={handleLogout} className="text-red-500 hover:text-red-700 font-medium text-sm transition cursor-pointer">
              Logout
            </button>
          </>
          
        )}
        
      </div>

      {/* Main Navbar */}
      <nav className="flex justify-between items-center p-4 bg-gray-100 shadow-md sticky top-0 z-50">
        {/* Logo Section */}
        <img src={src} alt="logo" className="h-10 w-auto" />

        {/* Home and Products Section */}
        <div className="flex gap-8 flex-1 justify-center">
          <NavLink to="/" className={({isActive}) => `text-gray-700 hover:text-blue-500 font-medium transition ${ isActive ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : ''}`}>Home</NavLink>
          <NavLink to="/products" className={({isActive}) => `text-gray-700 hover:text-blue-500 font-medium transition ${isActive ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : ''}`}>Products</NavLink>
        </div>

        {/* Cart Button */}
        <Link to="/cart">
          <div className="relative cursor-pointer p-2">
            <MdShoppingCart className="text-2xl text-gray-700 hover:text-blue-600 transition" />

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">{cartCount}</span>
            )}
            
          </div>
        </Link>
        
      </nav>
    </>
  );
}