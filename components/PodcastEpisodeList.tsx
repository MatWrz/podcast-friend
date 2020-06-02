import React from 'react';
import PodcastEpisode from './PodcastEpisode';
import { PodcastEpisode as podcastEpisode } from 'types';

interface Props {
  readonly podcastEpisodes: ReadonlyArray<podcastEpisode>;
}

const displayPodcastEpisodes: (
  podcastEpisodes: ReadonlyArray<podcastEpisode>
) => JSX.Element[] = (podcastEpisodes) => {
  return podcastEpisodes.map((podcastEpisode, index) => (
    <PodcastEpisode key={index} {...podcastEpisode} />
  ));
};

const PodcastEpisodeList: React.FC<Props> = ({ podcastEpisodes }) => {
  return (
    <div className="podcast-episode-list">
      {displayPodcastEpisodes(podcastEpisodes)}
    </div>
  );
};

export default PodcastEpisodeList;
