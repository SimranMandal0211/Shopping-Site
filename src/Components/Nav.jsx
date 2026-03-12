import { NavLink } from 'react-router-dom';
import src from '../assets/images/logo.png';

export default function Nav() {
  return (
    <>
      {/* Header */}
      <div className="bg-gray-200 px-4 py-2 flex justify-end gap-6">
        <NavLink className="text-gray-700 hover:text-blue-500 font-medium text-sm transition"
        to="/login">Sign In</NavLink>
        <NavLink to="/signup"className="text-gray-700 hover:text-blue-500 font-medium text-sm transition" >Register</NavLink>
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
        <button className="bg-blue-500 text-white px-6 py-2 rounded font-medium hover:bg-blue-600 transition duration-200 shadow-sm ml-auto">Cart</button>
      </nav>
    </>
  );
}