import { combineReducers } from "redux";
import { useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";

import polygonReducer from "./reducers/polygon";
import canvasStatusReducer from "./reducers/canvasStatus";

const reducer = combineReducers({
  polygons: polygonReducer,
  canvasStatus: canvasStatusReducer,
});

const middleware = [];

if (process.env.NODE_ENV !== "production") {
  middleware.push(createLogger());
};

const store = configureStore({
  reducer,
  middleware,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
