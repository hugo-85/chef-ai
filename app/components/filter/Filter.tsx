import { FC, useState } from "react";
import styles from "./Filter.module.css";
import { useChefStore } from "@/app/providers/chef-store-provider";

interface FilterProps {}

const Filter: FC<FilterProps> = () => {
  const { filter, updateFilter } = useChefStore((store) => store);
  const [value, setValue] = useState("");

  return (
    <fieldset className={styles.filter}>
      <legend>Filter</legend>
      <input
        type="search"
        value={filter}
        onChange={(e) => updateFilter(e.target.value)}
      />
    </fieldset>
  );
};

export default Filter;
