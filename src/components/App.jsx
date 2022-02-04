import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import Layout from './Layout';
import PokemonForm from './PokemonForm';
import PokemonInfo from './PokemonInfo';
import 'react-toastify/dist/ReactToastify.css';

/**
 * CLASS
 */
// export default class App extends Component {
//   state = {
//     pokemonName: '',
//   };

//   handleFormSubmit = pokemonName => {
//     this.setState({ pokemonName });
//   };

//   render() {
//     return (
//       <Layout>
//         <PokemonForm onSubmit={this.handleFormSubmit} />
//         <PokemonInfo pokemonName={this.state.pokemonName} />
//         <ToastContainer autoClose={3000} />
//       </Layout>
//     );
//   }
// }

/**
 * HOOKS
 */
export default function PokemonView() {
  const [pokemonName, setPokemonName] = useState('');

  return (
    <Layout>
      <PokemonForm onSubmit={setPokemonName} />
      <PokemonInfo pokemonName={pokemonName} />
      <ToastContainer autoClose={3000} />
    </Layout>
  );
}
