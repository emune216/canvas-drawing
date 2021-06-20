import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Polygon = {
  order: number;
  range: Object;
  coordinates: Array<Object>;
};

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
