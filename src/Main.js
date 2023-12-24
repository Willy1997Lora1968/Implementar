import React, { useEffect, useState } from 'react';
import RickAndMortyService from './RickAndMortyService';

const Main = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const data = await RickAndMortyService.getAllCharacters();
      setCharacters(data.results);
    };

    fetchCharacters();
  }, []);

  return (
    <main>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Album example</h1>
            <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
            <p>
              <a href="#" className="btn btn-primary my-2">Main call to action</a>
              <a href="#" className="btn btn-secondary my-2">Secondary action</a>
            </p>
          </div>
        </div>
      </section>

      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {characters && characters.map(character => (
              <div className="col" key={character.id}>
                <div className="card shadow-sm">
                  <img src={character.image} alt={character.name} className="bd-placeholder-img card-img-top" width="100%" height="225" />
                  <div className="card-body">
                    <p className="card-text">{character.name}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                      <small className="text-muted">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
