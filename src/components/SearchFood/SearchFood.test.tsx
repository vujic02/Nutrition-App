import React from "react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../../App";

test("successfully updates the input", () => {
  const component = render(<App />);

  let searchInput = component.getByTestId("search-input") as HTMLInputElement;

  expect(searchInput.value).toBe("");

  fireEvent.change(searchInput, { target: { value: "mango" } });

  expect(searchInput.value).toBe("mango");
});
