import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";

import List from "../components/List";

const mockStore = configureMockStore();
const store = mockStore({
  polygons: {
    polygon: [
      {
        order: 1,
      },
      {
        order: 2,
      },
    ],
  },
});

test("should render list of polygons", () => {
  render(
    <Provider store={store}>
      <List />
    </Provider>
  );

  const list = screen.getByRole("list", {
    name: /polygons/i,
  });
  const { getAllByRole } = within(list);
  const items = getAllByRole("listitem");
  expect(items.length).toBe(2);
});
