import './App.css';
import React, {useState} from 'react';
// import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
//import SearchBar from './components/SearchBar.jsx';
// import characters /*{ Rick }*/ from './data.js';
import Nav from './components/Nav';
import Form from './components/Form';
import Favorites from './components/Favorites';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Detail from './components/Detail'
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


function App () {

  const onSearch=(character)=>{
    //  }; 
    // console.log('estoy ejecuntando onSearch con', character);
    axios.get(`https://rickandmortyapi.com/api/character/${character}`).then(response => {
     setCharacters((oldCharacters)=> [...oldCharacters, response.data]);
     //console.log(characters);
      }
    );
  }

  const onClose = (id) =>{
    setCharacters(oldCharacters => oldCharacters.filter(character => character.id !== id))
  }

  const [access, setAccess] = React.useState(false);
  const username='ejemplo@gmail.com';
  const password='1password';
  const navigate=useNavigate();

  function login(userData){
    if(userData.password === password && userData.username === username){
      alert('Datos correctos');
      setAccess(true);
      navigate('/home');
    } else alert('Usuario y/o contraseña incorrecta(s)');
  }


  const [characters, setCharacters] = useState([])

  const location = useLocation();

  useEffect(() => {
    !access && navigate('/');
 }, [access]);

  return (
    <div className='App' style={{ padding: '25px' }}>
      {location.pathname !== '/' && <Nav onSearch={onSearch}/>}
      <Routes> 
          <Route path='/' element= {<Form
          login={login} />} />
          <Route path='/home' element={
            <Cards 
              characters={characters}
              onClose={onClose}
            />
          } 
          />
          <Route path='/about' element={<About />}/>
          <Route path='/favorites' element={<Favorites characters={characters}/>}/>
          <Route path='/detail/:detailId' element={<Detail />} />
      </Routes>

    </div>
  )
}

export default App
