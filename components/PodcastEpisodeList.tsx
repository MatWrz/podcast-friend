import React from 'react';
import PodcastEpisode from './PodcastEpisode';
import { PodcastEpisode as podcastEpisode } from 'types';

interface Props {
  readonly podcastEpisodes: ReadonlyArray<podcastEpisode>;
  readonly onClick: (audioSrc: string) => void;
}

const displayPodcastEpisodes: (
  podcastEpisodes: ReadonlyArray<podcastEpisode>,
  onClick: (audioSrc: string) => void
) => JSX.Element[] = (podcastEpisodes, onClick) => {
  return podcastEpisodes.map((podcastEpisode, index) => (
    <PodcastEpisode key={index} {...podcastEpisode} onClick={onClick} />
  ));
};

const PodcastEpisodeList: React.FC<Props> = ({ podcastEpisodes, onClick }) => {
  return (
    <div className="podcast-episode-list">
      {displayPodcastEpisodes(podcastEpisodes, onClick)}
    </div>
  );
};

export default PodcastEpisodeList;
