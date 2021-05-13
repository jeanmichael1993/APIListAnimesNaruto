import React, { useEffect, useState } from 'react';
import './App.css';
import ListaAnimeNaruto from './componentes/ListaAnimeNaruto';
import hoc from './componentes/hoc';

function App() {
  const CarregandoAnimes = hoc(ListaAnimeNaruto);
  const [estadoDaAplicacao, setEstadoDaAplicacao] = useState({
    consultando: false,
    animes: null,
  });

  useEffect(() => {
    setEstadoDaAplicacao({ consultando: true });
    const apiUrl = `https://api.jikan.moe/v3/search/anime?q=naruto`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((repos) => {
        setEstadoDaAplicacao({ consultando: false, animes: repos.results });
      });
  }, [setEstadoDaAplicacao]);

  return (
    <div className='App'>
      <CarregandoAnimes isLoading={estadoDaAplicacao.consultando} animes={estadoDaAplicacao.animes} />
    </div>
  );
}
export default App;