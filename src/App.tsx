import React, { useState } from "react";
import { Home } from "./pages";

// interface INutritionValues {
//   description: string;
//   dataType: string;
//   fdcId: number;
//   foodCode: number;
//   foodNutrients: object[];
//   foodCategory: string;
//   publishedDate: string;
//   score: string;
// }

type FoodsList = {
  foods: any[];
};

const App: React.FC = () => {
  const [nutrition, setNutrition] = useState<FoodsList | null>(null);

  console.log(nutrition, "app");

  return (
    <div className="App">
      <Home nutrition={nutrition} setNutrition={setNutrition} />
    </div>
  );
};

export default App;
