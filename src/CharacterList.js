import React, { useEffect, useState } from 'react';
import RickAndMortyService from './RickAndMortyService';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const data = await RickAndMortyService.getAllCharacters();
      setCharacters(data.results);
    };

    fetchCharacters();
  }, []);

  return (
    <div>
      {characters.slice(0, 20).map((character) => (
        <p key={character.id}>{character.name}</p>
      ))}
    </div>
  );
};

export default CharacterList;

