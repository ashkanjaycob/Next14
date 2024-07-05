import Card from "../module/Card";
import styles from "./CarsPage.module.css";

function CarsPage({ data }) {
  return (
    <>
      <div className={styles.container}>
        {data.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </>
  );
}

export default CarsPage;
