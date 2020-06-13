import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import { PodcastEpisode as podcastEpisode } from 'types';

interface Props {
  readonly podcastEpisode: podcastEpisode;
  readonly onClick: (podcastEpisode: podcastEpisode) => void;
}

const PodcastEpisode: React.FC<Props> = ({ podcastEpisode, onClick }) => {
  return (
    <div className="podcast-episode">
      <AudioPlayer
        header={podcastEpisode.title}
        src={podcastEpisode.src}
        onPlay={(): void => onClick(podcastEpisode)}
      />
    </div>
  );
};

export default PodcastEpisode;
