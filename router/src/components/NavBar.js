import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styles from "../styles/navbar.module.css";


const Navbar = () => {
    return ( 
        <nav className={styles.nav}>
        <div className={styles.logo}>
          <img
            src="https://codetheweb.blog/assets/img/icon2.png"
         alt="halt" ></img>
        </div>
        <div className={styles.main_nav}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/term">Term Of Use</Link>
        </div>
      </nav>
     );
}
 
export default Navbar;
