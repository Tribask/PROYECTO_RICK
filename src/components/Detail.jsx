import React, { useEffect } from "react";
import { useState} from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Detail(props){
    const {detailId}=useParams();
    console.log(detailId)
    
    const navigate= useNavigate();
    const [character , setCharacter] = useState('');
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
           .then((response) => response.json())
           .then((char) => {
              if (char.name) {
                 setCharacter(char);
              } else {
                 window.alert('No hay personajes con ese ID');
              }
           })
           .catch((err) => {
              window.alert('No hay personajes con ese ID');
           });
        return setCharacter({});
     }, [detailId]);
     console.log(character)

     return (
        <div>
            <button onClick={()=>navigate('/home')}>VOLVER</button>
            <h1>NOMBRE: {character.name}</h1>
            <h2>STATUS: {character.status}</h2>
            <h2>ESPECIE: {character.species}</h2>
            <h2>GENERO: {character.gender}</h2>
            <h2>ORIGIN: {character.origin?.name}</h2>
            <img src={character.image} alt={character.name}/>
            
        </div>

     )
    
}

// const Detail = (props) => {
//     const {id}= useParams();
//     return (
//         <div>
//             <h1>COMPONENTE Detail</h1>
//         </div>
//     )
// }

// export default Detail;