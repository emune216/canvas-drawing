import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../components/App";

const CANVAS = "Canvas";
const LIST = "List";

test("renders title", () => {
  render(<App />);

  expect(screen.getByText(CANVAS)).toBeInTheDocument();
  expect(screen.getByText(LIST)).toBeInTheDocument();
});
