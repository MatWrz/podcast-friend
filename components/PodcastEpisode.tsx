import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import { PodcastEpisode as podcastEpisode } from 'types';

interface Props extends podcastEpisode {
  readonly onClick: (audioSrc: string) => void;
}

const PodcastEpisode: React.FC<Props> = ({ title, src, onClick }) => {
  return (
    <div className="podcast-episode">
      <AudioPlayer header={title} src={src} onPlay={(): void => onClick(src)} />
    </div>
  );
};

export default PodcastEpisode;
