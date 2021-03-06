import React, { useState } from "react";
import { API_KEY } from "../../api";
import styles from "./searchfood.module.sass";
import { AiOutlineSearch } from "react-icons/ai";

type FoodsList = {
  foods: any[];
};

interface SearchFoodProps {
  nutrition: FoodsList | null;
  setNutrition: React.Dispatch<React.SetStateAction<FoodsList | null>>;
}

export const SearchFood: React.FC<SearchFoodProps> = ({
  nutrition,
  setNutrition,
}) => {
  const [input, setInput] = useState<string | undefined>("");

  const fetchData = async (e: any) => {
    e.preventDefault();
    const data = await fetch(
      `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${API_KEY}&query=${input}&dataType=${"Survey (FNDDS)"}&pageSize=${12}`
    );
    const response = await data.json();
    setNutrition(response);
  };

  return (
    <div className={styles.main}>
      <form onSubmit={fetchData}>
        <AiOutlineSearch className={styles.searchIcon} />
        <input
          data-testid="search-input"
          type="text"
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setInput(e.currentTarget.value)
          }
          value={input}
        />
      </form>
    </div>
  );
};
