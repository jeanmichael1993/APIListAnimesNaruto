import React from 'react';


const ListaAnimeNaruto = (props) => {
  const { animes } = props;
  if (!animes || animes.length === 0) return <p>Carregando ...</p>;
  return (
    <TabelaDeAnimes listaDeAnimes={animes} />
  );
};

class Linha extends React.Component {
  render() {
    const animes = this.props.animes;

    return (
      <tr>
        <td>{animes.mal_id}</td>
        <td><a href={animes.url}>link</a></td>
        <td><img src={animes.image_url}></img></td>
        <td>{animes.title}</td>
        <td>{animes.airing}</td>
        <td>{animes.synopsis}</td>
        <td>{animes.type}</td>
        <td>{animes.episodes}</td>
        <td>{animes.score}</td>
        <td>{animes.start_date}</td>
        <td>{animes.end_date}</td>
        <td>{animes.members}</td>
        <td>{animes.rated}</td>
      </tr>
    );
  }
}

class TabelaDeAnimes extends React.Component {
  render() {
    const linhas = [];

    this.props.listaDeAnimes.forEach(
      (anime) => {
        linhas.push(
          <Linha animes={anime} />
        );
      }
    );

    return (
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Url</th>
            <th>Image</th>
            <th>Title</th>
            <th>Airing</th>
            <th>Synopsis</th>
            <th>Type</th>
            <th>Episodes</th>
            <th>Score</th>
            <th>Start_date</th>
            <th>End_date</th>
            <th>Members</th>
            <th>Rated</th>
          </tr>
        </thead>
        <tbody>{linhas}</tbody>
      </table>
    );
  }
}


export default ListaAnimeNaruto;