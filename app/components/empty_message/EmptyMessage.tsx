import Image from "next/image";
import styles from "./EmptyMessage.module.css";

export default function EmptyMessage() {
  return (
    <section className={styles.emptyMessageMain}>
      <Image
        src={"/imgs/fridge2.png"}
        alt="a person looking food in a fridge"
        width={100}
        height={100}
      />
      <h1>
        You don't know what to cook, only have a few items in your fridge.
      </h1>
      <h1>
        No problem! Pick your ingredients and this chef will make recipes for
        you.
      </h1>
    </section>
  );
}
