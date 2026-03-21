import { Routes, Route } from "react-router-dom";
import {useContext, UseContext} from "react";
import { ToastContainer } from "react-toastify";  
import "react-toastify/dist/ReactToastify.css";


import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import Products from "./Pages/Products";

import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Cart from "./Pages/Cart";

import { AuthContext } from "./context/AuthContext";

export default function App() {

const { user } = useContext(AuthContext);

  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          <Route path="/cart" element={user ? <Cart /> : <Login />} />
        </Routes>
      </main>

      <ToastContainer 
        position="top-right"
        autoClose= {3000}
      />
    </>
  )
}
