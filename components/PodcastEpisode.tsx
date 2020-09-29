import React from 'react';
import { PodcastEpisode as podcastEpisode } from 'types';
import { format } from 'date-fns';

interface Props {
  readonly podcastEpisode: podcastEpisode;
  readonly onClick: (podcastEpisode: podcastEpisode) => void;
  readonly isPlaying?: boolean;
}

function secondsToHms(seconds: number): string {
  let h = Math.floor(seconds / 3600);
  let m = Math.floor(seconds % 3600 / 60);
  let s = Math.floor(seconds % 3600 % 60);

  let hDisplay = h > 0 ? h + "h" : "";
  let mDisplay = m > 0 ? m + "m" : "";
  let sDisplay = s > 0 ? s + "s" : "";
  return h + m > 0 ? hDisplay + mDisplay : sDisplay; 
}

const PodcastEpisode: React.FC<Props> = ({
  podcastEpisode,
  onClick,
  isPlaying,
}) => {
  const publishedDate = podcastEpisode.publishedDate
    ? format(new Date(podcastEpisode.publishedDate), 'MMM d, yyyy')
    : undefined;
  return (
    <div className="podcast-episode">
      {podcastEpisode.image && (
        <div className="podcast-episode-image"><img src={podcastEpisode.image}/></div>
      )}
      <div className="podcast-episode-metadata">
        <div className="podcast-episode-metadata-heading">
          <h3 className="podcast-episode-title">{podcastEpisode.title}</h3>
          {isPlaying && (
            <div className="podcast-episode-now-playing">Now Playing</div>
          )}
        </div>
        <div className="podcast-episode-metadata-details">
          {publishedDate && (
            <div className="podcast-episode-date">{publishedDate}</div>
          )}
          {podcastEpisode.duration && (
            <div className="podcast-episode-duration">{secondsToHms(podcastEpisode.duration)}</div>
          )}
        </div>
        {podcastEpisode.description && (<p className="podcast-episode-description">
          {podcastEpisode.description}
        </p>)}
      </div>
      <div className="podcast-episode-controls">
        <button
          className="podcast-episode-button"
          title="Play Podcast Episode"
          onClick={(): void => onClick(podcastEpisode)}
        >
          <img src="/img/play-button.svg" />
        </button>
        <a className="podcast-episode-button" type="button" title="Download Podcast Episode" href={podcastEpisode.src} target="_blank">
          <img src="/img/download-button.svg" />
        </a>
      </div>
    </div>
  );
};

export default PodcastEpisode;
