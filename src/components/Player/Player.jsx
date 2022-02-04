import { useState, useEffect } from 'react';
import { PlayerWrapper, StyledPlayer } from './Player.styled';

/**
 * CLASS
 */
//  export class Player extends Component {
//   state = {
//     isVideoLoaded: false,
//   };

//   componentDidUpdate(prevProps) {
//     if (prevProps.url !== this.props.url) {
//       this.setState({ isVideoLoaded: false });
//     }
//   }

//   render() {
//     const { isVideoLoaded } = this.state;
//     const { url } = this.props;
//     const showLoader = url && !isVideoLoaded;
//     const playerWidth = isVideoLoaded ? '100%' : 0;
//     const playerHeight = isVideoLoaded ? '100%' : 0;

//     return (
//       <>
//         {showLoader && <h2>Loading video...</h2>}
//         {url && (
//           <PlayerWrapper>
//             <StyledPlayer
//               url={url}
//               width={playerWidth}
//               height={playerHeight}
//               onReady={() =>
//                 this.setState({
//                   isVideoLoaded: true,
//                 })
//               }
//               controls
//             />
//           </PlayerWrapper>
//         )}
//       </>
//     );
//   }
// }

/**
 * HOOKS
 */
export const Player = ({ url }) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const showLoader = url && !isVideoLoaded;
  const playerSize = isVideoLoaded ? '100%' : 0;

  useEffect(() => setIsVideoLoaded(false), [url]);

  return (
    <>
      {showLoader && <h2>Loading video...</h2>}
      {url && (
        <PlayerWrapper>
          <StyledPlayer
            url={url}
            width={playerSize}
            height={playerSize}
            onReady={() => setIsVideoLoaded(true)}
            controls
          />
        </PlayerWrapper>
      )}
    </>
  );
};
