import React from "react";
import { SearchFood } from "../components/SearchFood/SearchFood";
import styles from "./styles/home.module.sass";

type FoodsList = {
  foods: any[];
};

interface HomeProps {
  nutrition: FoodsList | null;
  setNutrition: React.Dispatch<React.SetStateAction<FoodsList | null>>;
}

{
  /*<SearchFood nutrition={nutrition} setNutrition={setNutrition} />
      {nutrition !== null && nutrition.foods ? (
        nutrition.foods.map((food: INutritionValues, idx: number) => (
          <FoodCard key={idx} food={food} />
        ))
      ) : (
        <div>Search for a food</div>
      )} */
}

const Home: React.FC<HomeProps> = ({ nutrition, setNutrition }) => {
  return (
    <>
      <div className={styles.overlay}></div>
      <div className={styles.main}>
        <SearchFood nutrition={nutrition} setNutrition={setNutrition} />
      </div>
    </>
  );
};

export default Home;
