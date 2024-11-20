import { createSlice } from "@reduxjs/toolkit";
import data from "../data/provinces";

const initialState = {
  last_update: data.last_update,
  total_province: data.total_province,
  provinces: data.provinces,
};

const provinsiSlice = createSlice({
  name: "provinsi",
  initialState,
  reducers: {
    updateProvinsiData: (state, action) => {
      const { provinsiIndex, newData } = action.payload;
      state.provinces[provinsiIndex] = {
        ...state.provinces[provinsiIndex],
        ...newData,
      };
    },
    resetProvinsiData: (state) => {
      state.provinces = state.provinces.map((provinsi) => ({
        ...provinsi,
        kasus: 0,
        sembuh: 0,
        meninggal: 0,
        dirawat: 0,
      }));
    },
  },
});

export const { updateProvinsiData, resetProvinsiData } = provinsiSlice.actions;
export default provinsiSlice.reducer;
