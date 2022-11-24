import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: localStorage.getItem("favlist") ? JSON.parse(localStorage.getItem("favlist")) : [],
    favid: localStorage.getItem("favid") ? JSON.parse(localStorage.getItem("favid")) : [],
    yellow: false
}


const CartSlice = createSlice({
    initialState,
    name: 'cart',
    reducers: {
        setAddItemToCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );
            if (itemIndex >= 0) {
            }
            else {
                const temp = {
                    ...action.payload,
                }
                state.cartItems.push(temp);
                state.favid.push(action.payload.id)
            }
            localStorage.setItem('favlist', JSON.stringify(state.cartItems))
            localStorage.setItem('favid', JSON.stringify(state.favid))
        },
        setRemoveItemFromCart: (state, action) => {
            const removeItem = state.cartItems.filter((item) => item.id !== action.payload.id);
            const removeId = state.favid.filter((item) => item !== action.payload.id);
            console.log(action.payload.id)
            state.cartItems = removeItem;
            state.favid = removeId;
            localStorage.setItem('favlist', JSON.stringify(state.cartItems));
            localStorage.setItem('favid', JSON.stringify(state.favid))
        },
        setClearCartItems: (state, action) => {
            state.cartItems = [];
            localStorage.setItem("favlist", JSON.stringify(state.cartItems));
            state.favid = [];
            localStorage.setItem("favid", JSON.stringify(state.favid));
        },
    }
});

export const { setAddItemToCart, setRemoveItemFromCart, setClearCartItems, } = CartSlice.actions;
export const selectCartItems = (state) => state.cart.cartItems;
export default CartSlice.reducer;