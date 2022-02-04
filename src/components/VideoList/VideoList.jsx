import { List, ListItem } from './VideoList.styled';

export const VideoList = ({ videos, onSelect }) => {
  return (
    <List>
      {videos.map(video => (
        <ListItem key={video.id} onClick={() => onSelect(video.link)}>
          {video.link}
        </ListItem>
      ))}
    </List>
  );
};
