import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  isDeleteMode: false,
};

const reducers = {
  changeCanvasMode: (state: any, { payload }: PayloadAction<Boolean>) => {
    state.isDeleteMode = payload;
  },
};

const canvasMode = createSlice({
  name: "canvasMode",
  initialState,
  reducers,
});

export const { changeCanvasMode } = canvasMode.actions;

export default canvasMode.reducer;
