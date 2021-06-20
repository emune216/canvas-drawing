import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";

import DeleteCheckBox from "../components/DeleteCheckBox";

const mockStore = configureMockStore();
const store = mockStore({});

test("renders App", () => {
  render(
    <Provider store={store}>
      <DeleteCheckBox />
    </Provider>
  );

  const text = screen.getByText("Delete Mode");
  expect(text).toBeTruthy();

  const btn = screen.getByLabelText("delete-check-box") as HTMLInputElement;
  expect(btn.checked).toBe(false);
  userEvent.click(btn);
  expect(btn.checked).toBe(true);
  userEvent.click(btn);
  expect(btn.checked).toBe(false);
});
