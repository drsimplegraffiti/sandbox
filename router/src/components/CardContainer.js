import styles from "../styles/cards.module.css";

const CardContain = () => {
  return (
    <div className={styles.card}>
      <div className={styles.container}>
        <img src="/images/tourism.jpg" alt="booking" />
        <h4 className={styles.subtitle}>Book with ease</h4>
        <h5 className={styles.text}>Book a flight with non hassle and proceed to make payment.</h5>
      </div>
      <div className={styles.container}>
        <img src="/images/tourism.jpg" alt="booking" />
        <h4 className={styles.subtitle}>Book with ease</h4>
        <h5 className={styles.text}>Book a flight with non hassle and proceed to make payment.</h5>
      </div>
      <div className={styles.container}>
        <img src="/images/tourism.jpg" alt="booking" />
        <h4 className={styles.subtitle}>Book with ease</h4>
        <h5 className={styles.text}>Book a flight with non hassle and proceed to make payment.</h5>
      </div>
    </div>
  );
};

export default CardContain;
