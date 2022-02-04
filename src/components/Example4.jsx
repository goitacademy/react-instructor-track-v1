import { useState } from 'react';
import { VideoList } from './VideoList/VideoList';
import { Player } from './Player/Player';
import videos from '../videos.json';

const Example = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div>
      <h1>Selected video: {selectedVideo}</h1>
      <VideoList videos={videos} onSelect={setSelectedVideo} />
      <Player url={selectedVideo} />
    </div>
  );
};

export default Example;
