//import Card from './Card';
import React from 'react';
import SearchBar from './SearchBar';
import styles from './Nav.module.css'
//import About from './About';
import { Link } from 'react-router-dom';



export default function Nav({onSearch}) {
    return (
    <nav className={styles.nav}>
        <SearchBar onSearch={onSearch}/>
        <Link to='/about'><span>ABOUT</span> </Link>
        <Link to='/home'><span>HOME </span></Link>
        <Link to='/favorites'><span> FAVORITOS </span></Link>
        
    </nav>
    )
 }