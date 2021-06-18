import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";

import App from "../components/App";

const mockStore = configureMockStore();
const store = mockStore({
  polygons: {
    polygon: {},
  },
});

test("renders App", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});
