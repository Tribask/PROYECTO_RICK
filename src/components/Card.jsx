import { Link } from 'react-router-dom';
import React from 'react';
import styles from './Card.module.css'
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { deleteCharacter , addCharacter } from '../redux/actions';

function Card(props) {
   const [isFav, setIsFav] = React.useState(false);
   
   useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites]);

   const handleFavorite = () => {
      if ( isFav ) {
         setIsFav(false);
         props.deleteCharacter(props.id);      
      } 
         else {
            setIsFav(true);
            props.addCharacter(props);
         }
      
   };
   
   

   return (
      <div className={styles.card}>
         
            {
               isFav ? (
                  <button onClick={()=>handleFavorite(props.id)}>❤️</button>
               ) : (
                  <button onClick={()=>handleFavorite(props.id)}>🤍</button>
               )
            }
            <button onClick={()=>props.onClose(props.id)}>X</button>
            <Link to={`/detail/${props.id}`}>
               <h2>{props.name}</h2>
            </Link>
            <h2>{props.species}</h2>
            <h2>Gender: {props.gender}</h2>
            <h2>Status: {props.status}</h2>
            <img  src={props.image} alt="imagen" />
      </div>
   );
}

export function mapStateToProps(state) {
   return {
     myFavorites: state.myFavorites,
   };
 }

export function mapDispatchToProps (dispatch){
   return {
      addCharacter:  (id) => dispatch(addCharacter(id)),
      deleteCharacter: (id) => dispatch(deleteCharacter(id))
      }
   }


export default connect (mapStateToProps, mapDispatchToProps) (Card);
