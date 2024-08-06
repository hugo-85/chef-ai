import { FallingLines } from "react-loader-spinner";
import styles from "./Generating.module.css";

export default function Generating() {
  return (
    <section className={styles.generatingMain}>
      <FallingLines color="#ffff" width="200" visible={true} />
      <h1>Generating recipes</h1>
    </section>
  );
}
