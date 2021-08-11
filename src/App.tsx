import React, { useState } from "react";
import { Home } from "./pages";
import { LoadingPage } from "./pages/LoadingPage";

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
  const [loading, setLoading] = useState<boolean>(false);

  console.log(nutrition, "app");

  return (
    <div className="App">
      {nutrition === null ? (
        <Home nutrition={nutrition} setNutrition={setNutrition} />
      ) : (
        <LoadingPage
          nutrition={nutrition}
          loading={loading}
          setLoading={setLoading}
        />
      )}
    </div>
  );
};

export default App;
