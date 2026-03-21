import lowestPrice from "../assets/images/lowest-price.png";
import { useContext } from "react";
import { toast } from "react-toastify";

import { CartContext } from "../context/CartContext";
import EmptyCart from "../Components/EmptyCart";

export default function Cart(){
    const {cartItems, increaseQty, decreaseQty, removeItem } = useContext(CartContext);

    // Total price
    const total = cartItems.reduce(
        (acc, item) => acc + item.price * (item.qty || 1), 0
    );

    // render emptyCart component if cart is empty
    if(cartItems.length === 0){
        return <EmptyCart />
    }

    return (
        <div className="bg-gray-100 min-h-[calc(100vh-120px)] pb-32 px-4 pt-4 space-y-4">
            <div className="bg-white rounded shadow-sm">
    {/* section 1 */}
                <div className="flex items-center border-b-10 border-gray-100 p-4">
                    <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2 ">
                        My Cart
                    </h2>
                    <span className="ml-4 text-gray-800">({cartItems.length} item{cartItems.length !== 1 ? 's' : ''})</span>
                </div>

    {/* section 2 - Cart Product List */}
                {cartItems.map((item, index) => (
                    <div className="flex justify-between items-center p-4"
                    key={item.id}>
                        <div className="flex items-center gap-4 flex-nowrap">
                            <img src={item.imageURL} alt={item.name} 
                                className="w-16 h-16 md:w-20 md:h-20 rounded  object-cover"    
                            />

                            <div className="flex-1 min-w-0">
                                <p className="font-bold text-gray-800 tetx-sm md:text-base truncate">{item.name}</p>

                                <div className="flex items-center gap-2 md:gap-4 mt-2">
                                    <button className="bg-pink-500 hover:bg-pink-600 text-white px-2 md:px-3 py-1 rounded cursor-pointer text-lg md:text-xl"
                                    onClick = {() => {
                                        decreaseQty(index);
                                        toast.info("Quantity decrease");
                                    }}
                                    >
                                        -
                                    </button>
                                    <span className="text-base md:text-lg font-bold">{item.qty || 1}</span>


                                    <button className="bg-pink-500 hover:bg-pink-600 text-white px-2 md:px-3 py-1 rounded cursor-pointer text-lg md:text-xl"
                                    onClick = {() => {
                                        increaseQty(index);
                                        toast.info("Quantity increased");
                                    }}
                                    >
                                        +
                                    </button>
                                    <span className="text-gray-500 cursor-pointer"
                                    onClick={() => {
                                        removeItem(index);
                                        toast.error(`${item.name} removed from cart`);
                                    }}>
                                        X
                                    </span>
                                    <span className="text-gray-800 font-semibold text-sm md:text-base">
                                        Rs. {item.price}
                                    </span>
                                </div>    
                            </div>
                        </div>
                        <p className="font-bold text-sm md:text-lg ml-2">
                            Rs. {(item.qty || 1) * item.price}
                        </p>
                    </div>
                ))}

    {/* section 3  */}
                <div className="p-4 flex items-center justify-center border-t-10 border-gray-100 ">
                    <img src={lowestPrice} alt="lowest price" />
                    <span className="pl-4 pr-4 text-gray-800 font-semibold">You won't find it cheaper anywhere</span>
                </div>
            </div>

            <div className="fixed bottom-0 left-0 w-full bg-white flex flex-col justify-center items-center px-4 py-4">
                <p className="text-gray-500 font-bold text-sm mb-2 text-center">Promo code can be applied on payment page</p>


                <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold px-4 py-3 w-full rounded flex items-center justify-between cursor-pointer">
                    <p>Proceed to Checkout</p>
                    <p>Rs. {total}  &gt;</p>
                </button>
            </div>
        </div>
    );
}