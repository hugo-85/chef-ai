import { useState } from "react";
import { useChefStore } from "@/app/providers/chef-store-provider";
import styles from "./ApiKeyField.module.css";

export default function ApiKeyField() {
  const { apiKey, updateApiKey } = useChefStore((store) => store);
  const [value, setValue] = useState("");

  return (
    <fieldset className={styles.apiKeyFieldMain}>
      <legend>Api Key</legend>
      <input
        required
        value={apiKey}
        onChange={(e) => updateApiKey(e.target.value)}
      />
    </fieldset>
  );
}
