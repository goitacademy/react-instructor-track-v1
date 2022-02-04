import { useState } from 'react';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';

const styles = {
  form: { marginBottom: 20 },
};

/**
 * CLASS
 */
// export default class PokemonForm extends Component {
//   state = {
//     pokemonName: '',
//   };

//   handleNameChange = event => {
//     this.setState({ pokemonName: event.currentTarget.value.toLowerCase() });
//   };

//   handleSubmit = event => {
//     event.preventDefault();

//     if (this.state.pokemonName.trim() === '') {
//       toast.error('Enter pokemon name!');
//       return;
//     }

//     this.props.onSubmit(this.state.pokemonName);
//     this.setState({ pokemonName: '' });
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit} style={styles.form}>
//         <input
//           type="text"
//           name="pokemonName"
//           value={this.state.pokemonName}
//           onChange={this.handleNameChange}
//         />
//         <button type="submit">
//           <ImSearch style={{ marginRight: 8 }} />
//           Search
//         </button>
//       </form>
//     );
//   }
// }

/**
 * HOOKS
 */
export default function PokemonForm({ onSubmit }) {
  const [pokemonName, setPokemonName] = useState('');

  const handleNameChange = event => {
    setPokemonName(event.target.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (pokemonName.trim() === '') {
      toast.error('Enter pokemon name!');
      return;
    }

    onSubmit(pokemonName);
    setPokemonName('');
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        name="pokemonName"
        value={pokemonName}
        onChange={handleNameChange}
      />
      <button type="submit">
        <ImSearch style={{ marginRight: 8 }} />
        Search
      </button>
    </form>
  );
}
