import React from "react";
import { getByText, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ListItem } from "./ListItem";
import styles from "../../pages/styles/searchresult.module.sass";

test("loads component correctly", () => {
  const data = {
    description: "Mango",
    foodNutrients: [{ value: 20 }, { value: 13 }, { value: 9 }, { value: 190 }],
  };
  const component = render(<ListItem styles={styles} food={data} />);

  expect(component.getByText("Mango")).toBeInTheDocument();
  expect(component.getByText("20g protein")).toBeInTheDocument();
  expect(component.getByText("13g fat")).toBeInTheDocument();
  expect(component.getByText("9g carbohydrates")).toBeInTheDocument();
  expect(component.getByText("190kcal")).toBeInTheDocument();
});
