import { Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import Products from "./Pages/Products";

import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          
        </Routes>
      </main>
    </>
  )
}
