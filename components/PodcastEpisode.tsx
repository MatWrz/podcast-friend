import React from 'react';
import { PodcastEpisode as podcastEpisode } from 'types';

interface Props {
  readonly podcastEpisode: podcastEpisode;
  readonly onClick: (podcastEpisode: podcastEpisode) => void;
}

const PodcastEpisode: React.FC<Props> = ({ podcastEpisode, onClick }) => {
  return (
    <div className="podcast-episode">
      <button
        className="podcast-episode-button"
        onClick={(): void => onClick(podcastEpisode)}
      >
        <img src="img/play-button.svg" />
      </button>
      <h3>{podcastEpisode.title}</h3>
    </div>
  );
};

export default PodcastEpisode;
