import React, { useState, useEffect, useContext } from 'react';
import '../styles/Characters.css';
import { DarkModeContext } from './Header';

const Characters = () => {
    const darkMode = useContext(DarkModeContext);
    const [characters, setCharacters] = useState([]);
    // console.log(darkMode);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/')
        .then((response) => response.json())
        .then((data) => setCharacters(data.results))
    }, [])

  return (
    <div className={ darkMode ? `Characters Dark` : `Characters Light` }>
        {characters.map((character, idx) => (
          <div className='Characters-Card' key={idx}>
            <h2 className={ darkMode ? `TitleDark` : `TitleLight` }>{character.name}</h2>
            <img src={character.image} alt={character.name} className="Character-image"/>
            <ul className={ darkMode ? `Character-data TitleDark` : `Character-data TitleLight` }>
              <li><strong>Status:</strong> {character.status}</li>
              <li><strong>Species:</strong>  {character.species}</li>
              <li><strong>Gender:</strong>  {character.gender}</li>
              <li><strong>Origin:</strong>  {character.origin.name}</li>
            </ul>
          </div>
        ))}
    </div>
  );
};

export default Characters;