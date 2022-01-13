import styles from '../styles/howitworks.module.css'
import CardContain from '../components/CardContainer'
import Location from './Location';
const HowItWorks = () => {
  return (
    <>
      <section className={styles.main_section}>
          <div className={styles.container}>
              <h3 className={styles.main_heading}>How it works</h3>
              <h4 className={styles.booking_details}>Book your flight in three steps</h4>
              <h5 className={styles.content}>You are three steps away from having a perfect booking</h5>
          <CardContain />
          </div>
      </section>
    </>
  );
};
export default HowItWorks;
