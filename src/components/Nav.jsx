//import Card from './Card';
import React from "react";
import SearchBar from "./SearchBar";
import styles from "./Nav.module.css";
//import About from './About';
import { Link } from "react-router-dom";

export default function Nav({ onSearch }) {
  return (
    <nav className={styles.nav}>
      <SearchBar onSearch={onSearch} />
      <div className={styles.prueba}>
        <Link to="/about">
          <span>ABOUT</span>{" "}
        </Link>
      </div>
      <div className={styles.prueba}>
        <Link to="/home">
          <span>HOME </span>
        </Link>
      </div>
      <div className={styles.prueba}>
        <Link to="/favorites">
          <span> FAVORITOS </span>
        </Link>
      </div>
    </nav>
  );
}
