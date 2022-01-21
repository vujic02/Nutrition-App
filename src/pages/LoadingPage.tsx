import React, { useEffect } from "react";
import { Loading } from "../components/Loading/Loading";
import { SearchResults } from "../pages";

type FoodsList = {
  foods: any[];
};

interface LoadingPageProps {
  nutrition: FoodsList | null;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setNutrition: React.Dispatch<React.SetStateAction<FoodsList | null>>;
}

export const LoadingPage: React.FC<LoadingPageProps> = ({
  nutrition,
  loading,
  setLoading,
  setNutrition,
}) => {
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <SearchResults
          nutrition={nutrition}
          setNutrition={setNutrition}
          setLoading={setLoading}
        />
      )}
    </>
  );
};
