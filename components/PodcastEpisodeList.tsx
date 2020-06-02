import React from 'react';
import PodcastEpisode from './PodcastEpisode';

interface Props {
  readonly podcastEpisodes: ReadonlyArray<PodcastEpisode>;
}

const displayPodcastEpisodes: (
  podcastEpisodes: ReadonlyArray<PodcastEpisode>
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
