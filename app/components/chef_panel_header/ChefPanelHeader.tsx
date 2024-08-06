import { FC } from "react";
import Image from "next/image";
import styles from "./ChefPanel.module.css";

interface ChefPanelHeaderProps {}

const ChefPanelHeader: FC<ChefPanelHeaderProps> = () => {
  return (
    <header className={styles.chefPanelMain}>
      <Image
        src={"/chef-hat.png"}
        alt="a person looking food in a fridge"
        width={100}
        height={100}
      />
      <h1>Chef AI</h1>
    </header>
  );
};

export default ChefPanelHeader;
