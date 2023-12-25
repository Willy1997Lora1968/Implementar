import React, { useState } from 'react';

const CharacterEditor = ({ character, onSave }) => {
  const [description, setDescription] = useState(character.description || 'No hay descripción disponible. Haz clic aquí para agregar una.');

  const handleSave = () => {
    onSave({ ...character, description });
  };

  return (
    <div>
      <h2>Editando a {character.name}</h2>
      <textarea value={description} onChange={e => setDescription(e.target.value)} />
      <button onClick={handleSave}>Guardar</button>
    </div>
  );
};

export default CharacterEditor;
