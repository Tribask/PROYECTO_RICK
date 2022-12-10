import { useState } from 'react';
import styles from './Search.module.css'

export default function SearchBar({onSearch}) {
   const[searchInput, setSearchInput]= useState('');
   const changeHandler = (event)=>{
      setSearchInput(event.target.value);
   }

   
   return (
      <div className={styles.search}>
         <input type='search' onChange={changeHandler}/>
      <button onClick={()=>onSearch(searchInput)}>Agregar</button>
      </div>
   );
}
