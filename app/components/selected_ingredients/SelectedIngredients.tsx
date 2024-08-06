import { FC } from "react";
import styles from "./SelectedIngredients.module.css";
import { useChefStore } from "@/app/providers/chef-store-provider";
import Ingredient from "../ingredient/Ingredient";

interface SelectedIngredientsProps {}

const SelectedIngredients: FC<SelectedIngredientsProps> = () => {
  const { selectedIngredients } = useChefStore((store) => store);
  return (
    <fieldset className={styles.selectedIngredientsMain}>
      <legend>Ingredients</legend>
      {selectedIngredients.map((ing) => (
        <Ingredient key={ing.value} ingredient={ing} />
      ))}
    </fieldset>
  );
};

export default SelectedIngredients;
