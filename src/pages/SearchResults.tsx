import React, { useState, useEffect } from "react";
import { ListItem } from "../components/ListItem/ListItem";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import styles from "./styles/searchresults.module.sass";

type FoodsList = {
  foods: any[];
};

interface SearchResultsProps {
  nutrition: FoodsList | null;
}

interface graphData {
  labels: ["Fats", "Proteins", "Carbohydrates"];
  datasets: [
    {
      label: "Nutrition";
      data: number[] | [];
      backgroundColor: ["rgb(224,85,85)", "rgb(15,201,231)", "rgb(22,128,234)"];
    }
  ];
}

const SearchResults: React.FC<SearchResultsProps> = ({ nutrition }) => {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const [loaded, setLoaded] = useState<boolean>(false);
  const [percentage, setPercentage] = useState<number[] | []>([]);
  let fatPercentage = 0;
  let proteinPercentage = 0;
  let carbohydratesPercentage = 0;
  const [data, setData] = useState<graphData>({
    labels: ["Fats", "Proteins", "Carbohydrates"],
    datasets: [
      {
        label: "Nutrition",
        data: [],
        backgroundColor: [
          "rgb(224,85,85)",
          "rgb(15,201,231)",
          "rgb(22,128,234)",
        ],
      },
    ],
  });

  useEffect(() => {
    let protein = nutrition?.foods[0].foodNutrients[0].value;
    let fat = nutrition?.foods[0].foodNutrients[1].value;
    let carbohydrates = nutrition?.foods[0].foodNutrients[2].value;

    let fatPercentage = Math.floor(
      (fat / (protein + fat + carbohydrates)) * 100
    );
    let proteinPercentage = Math.floor(
      (protein / (protein + fat + carbohydrates)) * 100
    );
    let carbohydratesPercentage = Math.floor(
      (carbohydrates / (protein + fat + carbohydrates)) * 100
    );

    setPercentage([fatPercentage, proteinPercentage, carbohydratesPercentage]);
    setData({
      labels: ["Fats", "Proteins", "Carbohydrates"],
      datasets: [
        {
          label: "Nutrition",
          data: [fat, protein, carbohydrates],
          backgroundColor: [
            "rgb(224,85,85)",
            "rgb(15,201,231)",
            "rgb(22,128,234)",
          ],
        },
      ],
    });

    setLoaded(true);
  }, []);

  return (
    <>
      <div className={styles.overlay}></div>
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.graphInfo}>
            <h1 className={styles.heading}>
              {nutrition?.foods[0].description}
            </h1>

            <div className={styles.center}>
              {loaded && <Doughnut data={data} />}
            </div>

            <div className={styles.graphList}>
              <h2 className={styles.graphText1}>Nutrients</h2>
              <div className={styles.graphListItem}>
                <div className={styles.color}>
                  <div className={styles.carbohydrates}></div>
                  <span className={styles.graphText3}>Carbohydrates</span>
                </div>
                <p className={styles.graphText2}>
                  {nutrition?.foods[0].foodNutrients[2].value}g
                </p>
                <p className={styles.graphText2}>{loaded && percentage[2]}%</p>
              </div>
              <div className={styles.graphListItem}>
                <div className={styles.color}>
                  <div className={styles.proteins}></div>
                  <span className={styles.graphText3}>Proteins</span>
                </div>
                <p className={styles.graphText2}>
                  {nutrition?.foods[0].foodNutrients[0].value}g
                </p>
                <p className={styles.graphText2}>{loaded && percentage[1]}%</p>
              </div>
              <div className={styles.graphListItem}>
                <div className={styles.color}>
                  <div className={styles.fats}></div>
                  <span className={styles.graphText3}>Fats</span>
                </div>
                <p className={styles.graphText2}>
                  {nutrition?.foods[0].foodNutrients[1].value}g
                </p>
                <p className={styles.graphText2}>{loaded && percentage[0]}%</p>
              </div>
            </div>
          </div>

          <div className={styles.detailedInfo}>
            <h1 className={styles.heading}>Detailed info</h1>
            <div className={styles.searchedItem}>
              Searched in category:{" "}
              <span>{nutrition?.foods[0].foodCategory}</span>
            </div>

            <div className={styles.detailedList}>
              {nutrition?.foods.map((food, idx) => (
                <ListItem key={idx} styles={styles} food={food} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchResults;
