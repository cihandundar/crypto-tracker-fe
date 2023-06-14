import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  coinItems: [],
  coinTotalQuantity: 0,
  selectedItems: [],
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
        toast.success(`${action.payload.name} added`);
      }
      localStorage.setItem("coinItems", JSON.stringify(state.coinItems));
    },
    remove(state, action) {
      const nextcoinItems = state.coinItems.filter(
        (coinItem) => coinItem.id !== action.payload.id
      );
      state.coinItems = nextcoinItems;
      state.selectedItems = state.selectedItems.filter(
        (itemId) => itemId !== action.payload.id
      ); // Eklenen satır
      toast.info(`${action.payload.name} deleted`);
    },
  },
});

export const { addToFavorites, remove } = favoritesSlice.actions;

export default favoritesSlice.reducer;
