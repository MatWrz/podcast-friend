import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import { PodcastEpisode as podcastEpisode } from 'types';

const PodcastEpisode: React.FC<podcastEpisode> = ({ title, src }) => {
  return (
    <div className="podcast-episode">
      <AudioPlayer header={title} src={src} />
    </div>
  );
};

export default PodcastEpisode;
