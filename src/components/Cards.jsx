import Card from './Card';
import React from 'react';
import styles from './Cards.module.css'

export default function Cards(props) {
   const { characters } = props;
   const { onClose } = props;
   return (
   <div className={styles.rick}>
      {characters.map(char => <Card 
      key={char.name}
      id= {char.id}
      name= {char.name} 
      species= {char.species}
      gender= {char.gender}
      image= {char.image}
      onClose= {onClose}/>)
}
   </div>);
}
