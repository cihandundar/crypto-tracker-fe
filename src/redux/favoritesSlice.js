import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  coinItems: [],
  coinTotalQuantity: 0,
};

const favoritesSlice = createSlice({
  name: `favorites`,
  initialState,
  reducers: {
    addToFavorites(state, action) {
      const itemIndex = state.coinItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.coinItems[itemIndex].cartQuantity += 1;
      } else {
        const tempCoin = {
          ...action.payload,
          cartQuantity: 1,
        };
        state.coinItems.push(tempCoin);
      }
      localStorage.setItem("coinItems", JSON.stringify(state.coinItems));
    },
    remove(state, action) {
      const nextcoinItems = state.coinItems.filter(
        (coinItem) => coinItem.id !== action.payload.id
      );
      state.coinItems = nextcoinItems;
    },
  },
});

export const { addToFavorites, remove } = favoritesSlice.actions;

export default favoritesSlice.reducer;
