import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import "jest-canvas-mock";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";

import App from "../components/App";

const mockStore = configureMockStore();
const store = mockStore({
  polygons: {
    polygon: [],
  },
  canvasStatus: {
    isDeleteMode: false,
    magnification: 1,
    currentMagnification: 1,
  },
});

test("renders App", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});
