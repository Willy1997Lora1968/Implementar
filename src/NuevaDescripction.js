import React, { useState } from 'react';

const NuevaDescription = ({ characters }) => {
  const [descriptions, setDescriptions] = useState({});

  const handleEdit = (characterId, description) => {
    setDescriptions(prevDescriptions => ({
      ...prevDescriptions,
      [characterId]: description,
    }));
  };

  return (
    <>
      {characters.slice(0, 20).map((character) => (
        <div key={character.id}>
          <p>{character.name}</p>
          <button onClick={() => handleEdit(character.id, 'Nueva descripción')}>
            Editar
          </button>
          <button onClick={() => alert(descriptions[character.id])}>
            Vista
          </button>
        </div>
      ))}
    </>
  );
};

export default NuevaDescription;
