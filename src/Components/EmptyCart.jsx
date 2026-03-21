import { FiShoppingCart } from "react-icons/fi"

export default function EmptyCart(){
    return (
        <div className="bg-gray-100 min-h-[calc(100vh-120px)] flex flex-col items-center justify-center px-4">

            <FiShoppingCart className="text-gray-400 w-56 h-56 sm:w-72 sm:h-72 mb-8 mr-8" />


            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 text-center">
                No item in your cart
            </h2>
            <p className="text-gray-600 mb-8 text-center max-w-sm sm:max-w-md">
                Your favorite items are just a click away
            </p>

            <a href="/products"
            className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded text-lg sm:text-xl font-semibold transition-transform transform hover:scale-105">
                Go Shopping
            </a>
        </div>
    )
}