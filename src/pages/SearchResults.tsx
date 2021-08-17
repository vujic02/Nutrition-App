import React, { useRef, useEffect } from "react";
import { ListItem } from "../components/ListItem/ListItem";
import styles from "./styles/searchresults.module.sass";

type FoodsList = {
  foods: any[];
};

interface SearchResultsProps {
  nutrition: FoodsList | null;
}

const SearchResults: React.FC<SearchResultsProps> = ({ nutrition }) => {
  const graphRef = useRef<any>();

  useEffect(() => {
    let protein = nutrition?.foods[0].foodNutrients[0].value;
    let fat = nutrition?.foods[0].foodNutrients[1].value;
    let carbohydrates = nutrition?.foods[0].foodNutrients[2].value;
    let sorted = [protein, fat, carbohydrates].sort((a, b) => b - a);

    if (carbohydrates === sorted[0]) {
      graphRef.current.classList.add("template1");
    } else if (protein === sorted[0]) {
      graphRef.current.classList.add("template2");
    } else if (fat === sorted[0]) {
      graphRef.current.classList.add("template3");
    }
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
              <div className={styles.graph} ref={graphRef}></div>
            </div>

            <div className={styles.graphList}>
              <h2 className={styles.graphText1}>Nutrients</h2>
              <div className={styles.graphListItem}>
                <div className={styles.color}>
                  <div className={styles.carbohydrates}></div>
                  <span className={styles.graphText3}>Carbohydrates</span>
                </div>
                <p className={styles.graphText2}>
                  {nutrition?.foods[0].foodNutrients[0].value}g
                </p>
                <p className={styles.graphText2}>57%</p>
              </div>
              <div className={styles.graphListItem}>
                <div className={styles.color}>
                  <div className={styles.proteins}></div>
                  <span className={styles.graphText3}>Proteins</span>
                </div>
                <p className={styles.graphText2}>
                  {nutrition?.foods[0].foodNutrients[1].value}g
                </p>
                <p className={styles.graphText2}>23%</p>
              </div>
              <div className={styles.graphListItem}>
                <div className={styles.color}>
                  <div className={styles.fats}></div>
                  <span className={styles.graphText3}>Fats</span>
                </div>
                <p className={styles.graphText2}>
                  {nutrition?.foods[0].foodNutrients[2].value}g
                </p>
                <p className={styles.graphText2}>32%</p>
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
