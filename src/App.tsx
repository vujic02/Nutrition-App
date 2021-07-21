import React, { useState } from "react";
import { FoodCard } from "./components/FoodCard.js/FoodCard";
import { SearchFood } from "./components/SearchFood/SearchFood";

interface INutritionValues {
  description: string;
  dataType: string;
  fdcId: number;
  foodCode: number;
  foodNutrients: object[];
  foodCategory: string;
  publishedDate: string;
  score: string;
}

type FoodsList = {
  foods: any[];
};

const App: React.FC = () => {
  const [nutrition, setNutrition] = useState<FoodsList | null>(null);

  console.log(nutrition);
  console.log(nutrition !== null && nutrition.foods);

  return (
    <div className="App">
      <SearchFood nutrition={nutrition} setNutrition={setNutrition} />
      {nutrition !== null && nutrition.foods ? (
        nutrition.foods.map((food: INutritionValues, idx: number) => (
          <FoodCard key={idx} food={food} />
        ))
      ) : (
        <div>Search for a food</div>
      )}
    </div>
  );
};

export default App;
