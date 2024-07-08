import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../assets/logo.jpg"; // Adjust the path to your logo file

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="CareerCompass Logo" />
        <h1 className={styles.navLink}>CareerCompass</h1>
      </div>
      <nav className={styles.nav}>
        <NavLink to="/" className={styles.navLink}>
          Home
        </NavLink>
        <NavLink to="/profile" className={styles.navLink}>
          Profile
        </NavLink>
        <NavLink to="/jobs" className={styles.navLink}>
          Jobs
        </NavLink>
        <NavLink to="/mentorship" className={styles.navLink}>
          Mentorship
        </NavLink>
        <NavLink to="/resume" className={styles.navLink}>
          Resume
        </NavLink>
        <NavLink to="/interview" className={styles.navLink}>
          Interview
        </NavLink>
      </nav>
      <div className={styles.actions}>
        <NavLink
          to="/signup"
          className={`${styles.actionButton} ${styles.signupButton}`}
        >
          Sign Up
        </NavLink>
        <NavLink
          to="/login"
          className={`${styles.actionButton} ${styles.loginButton}`}
        >
          Login
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
