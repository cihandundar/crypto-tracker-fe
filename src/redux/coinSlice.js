import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  itemsContainer: [],
  details: {},
  isLoading: false,
  error: "",
};

export const fetchCoin = createAsyncThunk("coin/fetchCoin", async () => {
  const response = await axios.get(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false`
  );
  return response.data;
});

export const fetchCoinDetails = createAsyncThunk(
  "coin/fetchCoinDetails",
  async (id) => {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${id}`
    );
    return response.data;
  }
);

export const coinSlice = createSlice({
  name: "coin",
  initialState,
  reducers: {
    filteredCoin: (state, action) => {
      state.items = state.itemsContainer.filter((item) =>
        item.name.toLowerCase().includes(action.payload)
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCoin.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCoin.fulfilled, (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
      state.itemsContainer = action.payload;
    });
    builder.addCase(fetchCoin.rejected, (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    });
    builder.addCase(fetchCoinDetails.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCoinDetails.fulfilled, (state, action) => {
      state.details = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchCoinDetails.rejected, (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    });
  },
});

export const { filteredCoin } = coinSlice.actions;
export default coinSlice.reducer;
