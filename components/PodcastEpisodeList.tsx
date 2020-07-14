import React from 'react';
import PodcastEpisode from './PodcastEpisode';
import {
  PodcastEpisode as podcastEpisode,
  SelectedPodcastEpisode,
} from 'types';

interface Props {
  readonly podcastEpisodes: ReadonlyArray<podcastEpisode>;
  readonly onClick: (podcastEpisode: podcastEpisode) => void;
  readonly selectedPodcastEpisode?: SelectedPodcastEpisode;
}

const displayPodcastEpisodes: (
  podcastEpisodes: ReadonlyArray<podcastEpisode>,
  onClick: (podcastEpisode: podcastEpisode) => void,
  selectedPodcastEpisode: SelectedPodcastEpisode
) => JSX.Element[] = (podcastEpisodes, onClick, selectedPodcastEpisode) => {
  return podcastEpisodes.map((podcastEpisode, index) => (
    <PodcastEpisode
      key={index}
      podcastEpisode={podcastEpisode}
      onClick={onClick}
      isPlaying={
        selectedPodcastEpisode &&
        selectedPodcastEpisode.src === podcastEpisode.src
      }
    />
  ));
};

const PodcastEpisodeList: React.FC<Props> = ({
  podcastEpisodes,
  onClick,
  selectedPodcastEpisode,
}) => {
  return (
    <div className="podcast-episode-list">
      {displayPodcastEpisodes(podcastEpisodes, onClick, selectedPodcastEpisode)}
    </div>
  );
};

export default PodcastEpisodeList;
