import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { searchApi } from "../../services/nasaApi";

export const search = createAsyncThunk("data/search", async (searchValue) => {
  const res = await searchApi(searchValue);
  return res.data;
});

const initialState = {
  nasaData: {},
  nasaDataStatus: "idle",
};

export const dataSlice = createSlice({
  name: "nasaData",
  initialState,
  reducers: {},
  extraReducers: {
    [search.pending]: (state) => ({
      ...state,
      nasaDataStatus: "loading",
    }),
    [search.fulfilled]: (state, action) => ({
      ...state,
      nasaData: action.payload,
      nasaDataStatus: "success",
    }),
    [search.rejected]: (state) => ({
      ...state,
      nasaDataStatus: "failed",
    }),
  },
});

export const selectNasaData = (state) => state.dataSlice.nasaData;
export default dataSlice.reducer;
