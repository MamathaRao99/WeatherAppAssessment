import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchItems: localStorage.getItem("searchlist") ? JSON.parse(localStorage.getItem("searchlist")) : [],
    value: false
}

const searchSlice = createSlice({
    initialState,
    name: 'search',
    reducers: {
        setAddItemToList: (state, action) => {
            const itemIndex = state.searchItems.findIndex(
                (item) => item.id === action.payload.id
            );

            if (itemIndex >= 0) {
            }
            else {
                state.searchItems.push(action.payload);
            }

            localStorage.setItem('searchlist', JSON.stringify(state.searchItems))
        },
        setClearsearchItems: (state, action) => {
            state.searchItems = [];
            localStorage.setItem("searchlist", JSON.stringify(state.searchItems));
        },
        setTrue: (state, action) => {
            state.value = true;
            console.log("tf", state.value)
        }


    }

});

export const { setAddItemToList, setClearsearchItems, setTrue } = searchSlice.actions;
export default searchSlice.reducer;
