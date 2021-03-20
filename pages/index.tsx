import React, { ReactNode, useState } from 'react';
import Head from 'next/head';
import PodcastInput from 'components/PodcastInput';
import PodcastEpisodeList from 'components/PodcastEpisodeList';
import PodcastProvider, { PodcastConsumer } from 'components/PodcastProvider';
import AudioPlayer from 'react-h5-audio-player';
import { PodcastEpisode, SelectedPodcastEpisode } from 'types';
import GitHubCorner from 'components/GitHubCorner';

export default function Home(): JSX.Element {
  const exampleFeed =
    'https://www.omnycontent.com/d/playlist/aaea4e69-af51-495e-afc9-a9760146922b/64b5de49-d653-47c4-afe1-ab0600144b4b/87b34f0a-5ff9-491e-957c-ab0600144b63/podcast.rss';
  const [podcastUrl, setPodcastUrl] = useState('');
  const [podcastEpisode, setPodcastEpisode] = useState<
    PodcastEpisode | undefined
  >(undefined);
  const [selectedPodcastEpisode, setSelectedPodcastEpisode] = useState<
    SelectedPodcastEpisode
  >(undefined);
  return (
    <div className="index-page">
      <Head>
        <title>Podcast Friend | Podcast Listener</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GitHubCorner />
      <PodcastProvider podcastURL={podcastUrl}>
        <main className="index-page-main">
          <PodcastInput
            podcastURL={podcastUrl}
            onSubmit={setPodcastUrl}
            exampleFeed={exampleFeed}
          />
          <PodcastConsumer>
            {(podcastContext): ReactNode => (
              <PodcastEpisodeList
                podcastEpisodes={podcastContext.podcastEpisodes}
                selectedPodcastEpisode={selectedPodcastEpisode}
                onClick={(podcastEpisode): void => {
                  setPodcastEpisode(podcastEpisode);
                }}
              />
            )}
          </PodcastConsumer>
        </main>
        <footer className="index-page-footer">
          <AudioPlayer
            src={podcastEpisode ? podcastEpisode.src : undefined}
            header={podcastEpisode ? podcastEpisode.title : undefined}
            autoPlay
            onPlay={(): void => {
              setSelectedPodcastEpisode({
                src: podcastEpisode.src,
                isPlaying: true,
              });
            }}
            onPause={(): void => {
              setSelectedPodcastEpisode({
                src: podcastEpisode.src,
                isPlaying: false,
              });
            }}
          />
        </footer>
      </PodcastProvider>
    </div>
  );
}
