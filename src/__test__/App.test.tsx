import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../components/App";

const TITLE = "Lunit";

test("renders title", () => {
  render(<App />);

  expect(screen.getByText(TITLE)).toBeInTheDocument();
});
