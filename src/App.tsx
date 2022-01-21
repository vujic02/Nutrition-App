import React, { useState } from "react";
import { Home } from "./pages";
import { LoadingPage } from "./pages/LoadingPage";

type FoodsList = {
  foods: any[];
};

const App: React.FC = () => {
  const [nutrition, setNutrition] = useState<FoodsList | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <div className="App">
      {nutrition === null ? (
        <Home nutrition={nutrition} setNutrition={setNutrition} />
      ) : (
        <LoadingPage
          nutrition={nutrition}
          setNutrition={setNutrition}
          loading={loading}
          setLoading={setLoading}
        />
      )}
    </div>
  );
};

export default App;
