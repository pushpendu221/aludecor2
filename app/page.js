import Image from "next/image";
import styles from "./page.module.css";
import PrimaryMenu from "./components/primaryMenu";

export default function Home() {
  return (
    <div className={styles.page}>
      <header>
        <PrimaryMenu />
      </header>
      <main className={styles.main}>HomePage</main>
    </div>
  );
}
