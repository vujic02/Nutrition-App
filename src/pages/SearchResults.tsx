import React, { useRef, useEffect } from "react";
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
            <h1 className={styles.heading}>Mango</h1>
            <div className={styles.center}>
              <div className={styles.graph} ref={graphRef}></div>
            </div>
            <div className={styles.graphList}>
              <h2 className={styles.graphText1}>Nutrients</h2>
              <div className={styles.listItemTest}>
                <div className={styles.carbohydrates}></div>
                <p className={styles.graphText3}>Carbohydrates</p>
                <p className={styles.graphText2}>57g</p>
                <p className={styles.graphText2}>57%</p>
              </div>
            </div>
          </div>

          <div className={styles.detailedInfo}>
            <h1 className={styles.heading}>Mango</h1>
            <div className={styles.searchedItem}>
              Searched for: <span>Mango</span>
            </div>
            <div className={styles.detailedList}>
              <div className={styles.listItem}>
                <p className={styles.text}>Mango, raw</p>
                <p className={styles.text}>18g protein</p>
                <p className={styles.text}>20g fat</p>
                <p className={styles.text}>50g carbohydrates</p>
                <p className={styles.text}>250kcal</p>
              </div>
              <div className={styles.listItem}>
                <p className={styles.text}>Mango, raw</p>
                <p className={styles.text}>18g protein</p>
                <p className={styles.text}>20g fat</p>
                <p className={styles.text}>50g carbohydrates</p>
                <p className={styles.text}>250kcal</p>
              </div>
              <div className={styles.listItem}>
                <p className={styles.text}>Mango, raw</p>
                <p className={styles.text}>18g protein</p>
                <p className={styles.text}>20g fat</p>
                <p className={styles.text}>50g carbohydrates</p>
                <p className={styles.text}>250kcal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchResults;
