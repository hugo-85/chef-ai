"use client";

import { useChefStore } from "@/app/providers/chef-store-provider";
import ChefPanel from "../chef_panel/ChefPanel";
import Recipes from "../recipes/Recipes";
import styles from "./ChefIA.module.css";
import EmptyMessage from "../empty_message/EmptyMessage";
import Generating from "../generating/Generating";
import ErrorMessage from "../error/ErrorMessage";

export default function ChefIA() {
  const { recipes, generating, error } = useChefStore((store) => store);

  const render = () => {
    if (generating) return <Generating />;

    if (error && error !== "") return <ErrorMessage />;

    if (recipes.length > 0) return <Recipes />;
    else return <EmptyMessage />;
  };

  return (
    <main className={styles.main}>
      <ChefPanel />
      {render()}
    </main>
  );
}
