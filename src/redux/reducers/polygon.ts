import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Polygon } from "../../types";

const initialState = {
  polygon: [],
};

const reducers = {
  addPolygon: (state: any, { payload }: PayloadAction<Polygon>) => {
    state.polygon = [...state.polygon, payload];
  },
  deletePolygon: (state: any, { payload }: PayloadAction<number>) => {
    state.polygon = state.polygon.filter((polygon: Polygon) => polygon.order !== payload);
  },
};

const polygonSlice = createSlice({
  name: "polygon",
  initialState,
  reducers,
});

export const { addPolygon, deletePolygon } = polygonSlice.actions;

export default polygonSlice.reducer;
