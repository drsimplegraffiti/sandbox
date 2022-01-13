import { useNavigate } from "react-router-dom";
import styles from "../styles/button.module.css";

const Profile = () => {
  let navigate = useNavigate();
  return (
    <div className={styles.profile_page}>
      <section className={styles.main_page}>
        <h1>This is Profile</h1>
        <button className={styles.button}
          onClick={() => {
            navigate("/");
          }}
        >
          Go to Home
        </button>
      </section>
    </div>
  );
};

export default Profile;
