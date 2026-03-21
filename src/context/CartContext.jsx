import { createContext, useState, useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const { user } = useContext(AuthContext);

    const [cartItems, setCartItems] = useState([]);

    const getCartKey = () => {
        const user = JSON.parse(localStorage.getItem("loggedInUser"));
        return user ? `cart_${user.email}` : null;
    };

    // load cart
    useEffect(() => {
        const key = getCartKey();
        if(key){
            const storedCart = JSON.parse(localStorage.getItem(key)) || [];
            setCartItems(storedCart);
        }else{
            setCartItems([]);
        }

    }, [user]);

    const updateCart = (updated) => {
        setCartItems(updated);

        const key = getCartKey();
        if(key) {
            localStorage.setItem(key, JSON.stringify(updated));
        }
    };

    // add to cart
    const addToCart = (product) => {
        const existiongIndex = cartItems.findIndex(
            (item) => item.id === product.id
        );

        let updated;

        if(existiongIndex !== -1){
            updated = [...cartItems]; //product already in cart -> inc qty
            updated[existiongIndex].qty = (updated[existiongIndex].qty || 1) + 1;
        }else{
            updated = [...cartItems, { ...product, qty: 1}];
        }

        updateCart(updated);
    };

    const increaseQty = (index) => {
        const updated = [...cartItems];
        updated[index].qty = (updated[index].qty || 1) + 1;
        updateCart(updated);
    };

    const decreaseQty = (index) => {
        const updated = [...cartItems];

        if((updated[index].qty || 1) > 1){
            updated[index].qty -= 1;
        }else{
            updated.splice(index, 1);
        }

        updateCart(updated);
    };



    const removeItem = (index) => {
        const updated = [...cartItems];
        updated.splice(index, 1);
        updateCart(updated);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, increaseQty, decreaseQty, removeItem }}>
            {children}
        </CartContext.Provider>
    )
}