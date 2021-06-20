import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";

import Inform from "../components/Inform";

const mockStore = configureMockStore();
const store = mockStore({
  canvasStatus: {
    currentMagnification: 1,
  },
});

test("should render current magnification", () => {
  render(
    <Provider store={store}>
      <Inform />
    </Provider>
  );

  const informText = screen.getByTestId("inform-text").textContent;
  expect(informText).toEqual("현재 캔버스 배율: 1.0배")
});
