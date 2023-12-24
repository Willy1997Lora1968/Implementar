import React from 'react';
import Header from './Header';
import Main from './Main';
import CharacterList from './CharacterList';
import Footer from './Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <CharacterList />
      </Main>
      <Footer/>
    </div>
  );
}

export default App;



