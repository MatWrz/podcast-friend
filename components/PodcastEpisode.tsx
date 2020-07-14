import React from 'react';
import { PodcastEpisode as podcastEpisode } from 'types';
import { format } from 'date-fns';

interface Props {
  readonly podcastEpisode: podcastEpisode;
  readonly onClick: (podcastEpisode: podcastEpisode) => void;
  readonly isPlaying?: boolean;
}

const PodcastEpisode: React.FC<Props> = ({
  podcastEpisode,
  onClick,
  isPlaying,
}) => {
  const publishedDate = podcastEpisode.publishedDate
    ? format(new Date(podcastEpisode.publishedDate), 'MMMM d, yyyy')
    : undefined;
  return (
    <div className="podcast-episode">
      <div className="podcast-episode-metadata">
        {publishedDate && (
          <p className="podcast-episode-date">{publishedDate}</p>
        )}
        <h3 className="podcast-episode-title">{podcastEpisode.title}</h3>
        {isPlaying && (
          <p className="podcast-episode-now-playing">Now Playing</p>
        )}
        <p className="podcast-episode-description">
          {podcastEpisode.description}
        </p>
      </div>
      <div className="podcast-episode-controls">
        <button
          className="podcast-episode-button"
          onClick={(): void => onClick(podcastEpisode)}
        >
          <img src="img/play-button.svg" />
        </button>
        <button className="podcast-episode-button">
          <img src="img/download-button.svg" />
        </button>
      </div>
    </div>
  );
};

export default PodcastEpisode;
