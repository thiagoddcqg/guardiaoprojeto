import React, { Component } from 'react';
import api from '../api';

class CatalogoLista extends Component {

  state = {
    filmes: [],
  }

  async componentDidMount() {
    const response = await api.get('pokemon');

    this.setState({ filmes: response.data });
  }

  render() {

    const { filmes } = this.state;

    return (
      <div>
        {filmes.map(filme => (
          <li key={filme.show.id}>
            <h2>
              <strong>Título: </strong>
              {filme.show.name}
            </h2>
            <p>
              {filme.show.url}
            </p>
          </li>
        ))}
      </div>
    );
  };
};

export default CatalogoLista;