import { createContext, useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export const StoreContext = createContext(null);
const StoreContextProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState({});
    const url = 'https://tastecart-backend.onrender.com';
    const [token, setToken] = useState("");
    const [food_list, setFood_list] = useState([]);

    const addToCart = async (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
        } else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }
        if(token){
            await axios.put(`${url}/api/cart/add`, {itemId}, {headers : {token}});
        }
    }
    const removeFromCart = async (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
        if(token){
            await axios.put(`${url}/api/cart/remove`, {itemId}, {headers : {token}});
        }
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

    const fetchFoodList = async () => {
        const response = await axios.get(`${url}/api/food/list`);
        setFood_list(response.data.data);
    }

    const loadCartData = async (token) => {
        const response = await axios.get(`${url}/api/cart/get`, {headers : {token}});
        setCartItems(response.data.cartData);
    }

    useEffect(() => {
        const loadData = async () => {
            await fetchFoodList();
            if (localStorage.getItem('token')) {
                setToken(localStorage.getItem('token'));
                await loadCartData(localStorage.getItem('token'));
            }
        }
        loadData();
    }, [])

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;