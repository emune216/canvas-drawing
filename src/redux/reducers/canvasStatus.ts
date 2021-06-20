import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  isDeleteMode: false,
  magnification: 1,
  currentMagnification: 1,
};

const reducers = {
  changeCanvasMode: (state: any, { payload }: PayloadAction<Boolean>) => {
    state.isDeleteMode = payload;
  },
  changeMagnification: (state: any, { payload }: PayloadAction<number>) => {
    state.magnification = payload;
  },
  changeCurrentMagnification: (state: any, { payload }: PayloadAction<number>) => {
    state.currentMagnification = payload;
  },
};

const canvasStatus = createSlice({
  name: "canvasStatus",
  initialState,
  reducers,
});

export const {
  changeCanvasMode,
  changeMagnification,
  changeCurrentMagnification,
} = canvasStatus.actions;

export default canvasStatus.reducer;
