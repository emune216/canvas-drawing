import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TPayload = {
  order: number;
  location: Array<Object>;
};

const initialState = {
  polygon: {},
};

const reducers = {
  addPolygon: (state: any, { payload }: PayloadAction<TPayload>) => {
    state.polygon[payload.order] = payload.location;
  },
};

const polygonSlice = createSlice({
  name: "polygon",
  initialState,
  reducers,
});

export const { addPolygon } = polygonSlice.actions;

export default polygonSlice.reducer;
