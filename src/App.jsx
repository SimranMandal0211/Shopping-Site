import { Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import Products from "./Pages/Products";

import Login from "./Pages/Login";
import SignIn from "./Pages/SignIn";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<SignIn />} />
          
        </Routes>
      </main>
    </>
  )
}
