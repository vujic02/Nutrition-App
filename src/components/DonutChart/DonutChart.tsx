import React from "react";
import styles from "./chart.module.sass";

interface DonutChartProps {
  proteins: number;
  carbohydrates: number;
  fats: number;
  largest: string;
}

export const DonutChart: React.FC<DonutChartProps> = ({
  proteins,
  carbohydrates,
  fats,
}) => {
  return <div className={styles.graph}></div>;
};
