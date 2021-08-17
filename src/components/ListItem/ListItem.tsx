import React from "react";

interface ListItemProps {
  styles: {
    [key: string]: string;
  };
  food: any;
}

export const ListItem: React.FC<ListItemProps> = ({ styles, food }) => {
  return (
    <div className={styles.listItem}>
      <p className={styles.text}>{food.description}</p>
      <p className={styles.text}>{food.foodNutrients[0].value}g protein</p>
      <p className={styles.text}>{food.foodNutrients[1].value}g fat</p>
      <p className={styles.text}>
        {food.foodNutrients[2].value}g carbohydrates
      </p>
      <p className={styles.text}>{food.foodNutrients[3].value}kcal</p>
    </div>
  );
};
