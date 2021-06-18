import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import ZoomInIcon from "@material-ui/icons/ZoomIn";

import ZoomButton from "../components/ZoomButton";

test("renders button", () => {
  let isClicked = false;

  render(<ZoomButton icon={<ZoomInIcon />} onClick={() => { isClicked = true}} />);
  const btn = screen.getByLabelText("zoom-btn");

  expect(btn).toHaveClass("MuiButtonBase-root");

  userEvent.click(btn);
  expect(isClicked).toBe(true);
});
