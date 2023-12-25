import React, { useEffect, useState } from 'react';
import RickAndMortyService from './RickAndMortyService';
import CharacterEditor from './CharacterEditor';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [editingCharacter, setEditingCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      const data = await RickAndMortyService.getAllCharacters();
      const charactersWithDescription = data.results.map(character => ({
        ...character,
        description: 'Esta es una descripción predeterminada.'
      }));
      setCharacters(charactersWithDescription);
    };

    fetchCharacters();
  }, []);

  const handleEdit = (character) => {
    console.log("Editando personaje: ", character);
    setEditingCharacter(character);
  };

  const handleSave = (updatedCharacter) => {
    console.log("Guardando personaje: ", updatedCharacter);
    setCharacters(characters.map(character => character.id === updatedCharacter.id ? updatedCharacter : character));
    setEditingCharacter(null);
  };

  return (
    <div>
      {editingCharacter ? (
        <CharacterEditor character={editingCharacter} onSave={handleSave} />
      ) : (
        characters.slice(0, 20).map((character) => (
          <div key={character.id}>
            <p>{character.name}</p>
            <button onClick={() => handleEdit(character)}>Editar</button>
          </div>
        ))
      )}
    </div>
  );
};

export default CharacterList;
