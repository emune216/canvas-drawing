import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TPayload = {
  name: string;
  location: Array<Array<string>>;
};

const initialState = {
  polygon: {},
};

const reducers = {
  addPolygon: (state: any, { payload }: PayloadAction<TPayload>) => {
    state.polygon[payload.name] = payload.location;
  },
};

const polygonSlice = createSlice({
  name: "polygon",
  initialState,
  reducers,
});

export const { addPolygon } = polygonSlice.actions;

export default polygonSlice.reducer;
