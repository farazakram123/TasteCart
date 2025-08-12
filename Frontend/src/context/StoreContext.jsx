import { createContext, useState } from "react";
import { food_list } from '../assets/assets';

export const StoreContext = createContext(null);
const StoreContextProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
        } else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }
    }
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    }
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const id in cartItems) {
            if (cartItems[id] > 0) {
                let itemInfo = food_list.find((product) => product._id === id)
                totalAmount += itemInfo.price * cartItems[id];
            }
        }
        return totalAmount;
    }

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;