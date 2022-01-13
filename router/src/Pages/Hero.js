import styles from '../styles/herosection.module.css'

const HeroSection = () => {
  return (
    <div>
      <section>
      <img
        src="/images/tourism.jpg"
        alt="background pics"
        className={styles.main_img}
      />
        <div className={styles.main_style}>
        <h2 className={styles.main_style}>Tour the World</h2>
        <p>
          Don't travel to to other people countries. If your not willing to
          respect their rules, tradition, customs, culture and views. You are
          not there to mock their ways, but you're there to learn from them.
        </p>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
