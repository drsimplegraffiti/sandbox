import styles from "../styles/button.module.css";
import HeroSection from "./Hero";
import HowItWorks from "./HowItWorks";
import Location from "./Location";
const Home = () => {
  return (
    <div className={styles.profile_page}>
      <HeroSection />
      <HowItWorks />
      <Location />
    </div>
  );
};

export default Home;
