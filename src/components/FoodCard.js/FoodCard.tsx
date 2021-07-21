import React from "react";

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

interface FoodCardProps {
  food: INutritionValues;
}

export const FoodCard: React.FC<FoodCardProps> = ({ food }): JSX.Element => {
  return (
    <div>
      <p>{food.fdcId}</p>
      <p>{food.foodCategory}</p>
      <p>{food.publishedDate}</p>
    </div>
  );
};
