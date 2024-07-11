import React from 'react';
import Cabecalho from './components/Cabecalho';
import Hero from './components/Hero';
import ListaVagas from './containers/ListaVagas';
import './global.css';

function App() {
  return (
    <>
      <Cabecalho />
      <Hero />
      <div className="container">
        <ListaVagas />
      </div>
    </>
  );
}

export default App;
