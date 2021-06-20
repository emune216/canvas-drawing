import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  isDeleteMode: false,
  magnification: 1,
  isChangeZoom: false,
};

const reducers = {
  changeCanvasMode: (state: any, { payload }: PayloadAction<Boolean>) => {
    state.isDeleteMode = payload;
  },
  changeMagnification: (state: any, { payload }: PayloadAction<number>) => {
    state.magnification = payload;
    state.isChangeZoom = !state.isChangeZoom;
  },
};

const canvasStatus = createSlice({
  name: "canvasStatus",
  initialState,
  reducers,
});

export const { changeCanvasMode, changeMagnification } = canvasStatus.actions;

export default canvasStatus.reducer;
