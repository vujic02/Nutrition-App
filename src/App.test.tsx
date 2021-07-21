import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

test("renders learn react link", () => {
  const app = render(<App />);
  const element = app.getByText("Hello World!");
  expect(element).toBeInTheDocument();
});
