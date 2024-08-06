import { useChefStore } from "@/app/providers/chef-store-provider";
import styles from "./Error.module.css";
import ErrorIcon from "@/app/assets/svgs/ErrorIcon";

export default function ErrorMessage() {
  const { error } = useChefStore((store) => store);
  return (
    <section className={styles.errorMain}>
      <ErrorIcon width={"200px"} height={"200px"} />
      <h1>There was an error</h1>
      <h2>{error}</h2>
    </section>
  );
}
