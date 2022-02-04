import { useState, useEffect } from 'react';
import PokemonDataView from './PokemonDataView';
import PokemonErrorView from './PokemonErrorView';
import PokemonPendingView from './PokemonPendingView';
import pokemonAPI from '../services/pokemon-api';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

/**
 * CLASS
 */
// export default class PokemonInfo extends Component {
//   state = {
//     pokemon: null,
//     error: null,
//     status: Status.IDLE,
//   };

//   async componentDidUpdate(prevProps) {
//     const prevName = prevProps.pokemonName;
//     const nextName = this.props.pokemonName;

//     if (prevName !== nextName) {
//       try {
//         this.setState({ status: Status.PENDING });
//         const pokemon = await pokemonAPI.fetchPokemon(nextName);
//         this.setState({ pokemon, status: Status.RESOLVED });
//       } catch (error) {
//         this.setState({ error, status: Status.REJECTED });
//       }
//     }
//   }

//   render() {
//     const { pokemon, error, status } = this.state;
//     const { pokemonName } = this.props;

//     if (status === 'idle') {
//       return <div>Enter pokemon name.</div>;
//     }

//     if (status === 'pending') {
//       return <PokemonPendingView pokemonName={pokemonName} />;
//     }

//     if (status === 'rejected') {
//       return <PokemonErrorView message={error.message} />;
//     }

//     if (status === 'resolved') {
//       return <PokemonDataView pokemon={pokemon} />;
//     }
//   }
// }

/**
 * HOOKS
 */

export default function PokemonInfo({ pokemonName }) {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    if (!pokemonName) {
      // Skip fetch on first render if pokemon name is null
      return;
    }

    async function fetchPokemon() {
      try {
        setStatus(Status.PENDING);
        const pokemon = await pokemonAPI.fetchPokemon(pokemonName);
        setPokemon(pokemon);
        setStatus(Status.RESOLVED);
      } catch (error) {
        setError(error);
        setStatus(Status.REJECTED);
      }
    }

    fetchPokemon();
  }, [pokemonName]);

  if (status === Status.IDLE) {
    return <div>Enter pokemon name</div>;
  }

  if (status === Status.PENDING) {
    return <PokemonPendingView pokemonName={pokemonName} />;
  }

  if (status === Status.REJECTED) {
    return <PokemonErrorView message={error.message} />;
  }

  if (status === Status.RESOLVED) {
    return <PokemonDataView pokemon={pokemon} />;
  }
}
