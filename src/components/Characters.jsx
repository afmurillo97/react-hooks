import React, { useState, useEffect } from 'react';
import '../App.css';

const Characters = () => {

    const [characters, setCharacters] = useState([]);
    console.log(characters);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/')
        .then((response) => response.json())
        .then((data) => setCharacters(data.results))
    }, [])

  return (
    <div className="Characters">
        {characters.map((character, idx) => (
            <h2 key={idx}>{character.name}</h2>
        ))}
    </div>
  );
};

export default Characters;