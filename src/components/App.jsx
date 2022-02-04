import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Layout from './Layout';
import PokemonForm from './PokemonForm';
import PokemonInfo from './PokemonInfo';
import 'react-toastify/dist/ReactToastify.css';

export default class App extends Component {
  state = {
    pokemonName: '',
  };

  handleFormSubmit = pokemonName => {
    this.setState({ pokemonName });
  };

  render() {
    return (
      <Layout>
        <PokemonForm onSubmit={this.handleFormSubmit} />
        <PokemonInfo pokemonName={this.state.pokemonName} />
        <ToastContainer autoClose={3000} />
      </Layout>
    );
  }
}
