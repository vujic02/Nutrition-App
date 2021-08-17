import React from "react";
import { SearchFood } from "../components/SearchFood/SearchFood";
import styles from "./styles/home.module.sass";
import { IoCalculatorOutline } from "react-icons/io5";

type FoodsList = {
  foods: any[];
};

interface HomeProps {
  nutrition: FoodsList | null;
  setNutrition: React.Dispatch<React.SetStateAction<FoodsList | null>>;
}

const Home: React.FC<HomeProps> = ({ nutrition, setNutrition }) => {
  return (
    <>
      <div className={styles.overlay}></div>
      <div className={styles.main}>
        <div className={styles.navbar}>
          <div className={styles.navLink}>
            <IoCalculatorOutline className={styles.navIcon} />
            <a href="/">Nutrition Calculator</a>
          </div>
        </div>
        <div className={styles.heading}>
          <h1>Nutrition App</h1>
          <p>Simple & easy to use search for food nutrition values</p>
        </div>
        <SearchFood nutrition={nutrition} setNutrition={setNutrition} />
        <div className={styles.footer}>
          Designed & built by:{" "}
          <a href="https://github.com/vujic02" target="_blank" rel="noreferrer">
            vujic02
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
