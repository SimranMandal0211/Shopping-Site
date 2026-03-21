import { Routes, Route } from "react-router-dom";
import {useState, useEffect} from "react";

import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import Products from "./Pages/Products";

import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Cart from "./Pages/Cart";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  
  useEffect(() => {
    const user = localStorage.getItem('loggedInUser');

    if(user){
      setLoggedIn(true);
    }else{
      setLoggedIn(false);
    }
  }, []);


  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          <Route path="/cart" element={loggedIn ? <Cart /> : <Login />} />
        </Routes>
      </main>
    </>
  )
}
