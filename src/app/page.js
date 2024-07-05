/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from "./Home.module.css";
export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <h4>Click On Image To Enter Cars Area</h4>
        <Link href="/cars" >
          <img className={styles.baner} src="/Baner.webp" alt="Banner" />
        </Link>
      </div>
    </>
  );
}
