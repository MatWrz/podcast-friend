import React, { ReactNode, useState } from 'react';
import Head from 'next/head';
import PodcastInput from 'components/PodcastInput';
import PodcastEpisodeList from 'components/PodcastEpisodeList';
import PodcastProvider, { PodcastConsumer } from 'components/PodcastProvider';
import AudioPlayer from 'react-h5-audio-player';

export default function Home(): JSX.Element {
  const [podcastUrl, setPodcastUrl] = useState('');
  const [podcastEpisode, setPodcastEpisode] = useState('');
  return (
    <div className="index-page">
      <Head>
        <title>Compodre | Podcast Listener</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PodcastProvider podcastURL={podcastUrl}>
        <main className="index-page-main">
          <PodcastInput podcastURL={podcastUrl} onSubmit={setPodcastUrl} />
          <PodcastConsumer>
            {(podcastContext): ReactNode => (
              <PodcastEpisodeList
                podcastEpisodes={podcastContext.podcastEpisodes}
                onClick={(src): void => setPodcastEpisode(src)}
              />
            )}
          </PodcastConsumer>
        </main>
        <footer className="index-page-footer">
          <AudioPlayer />
        </footer>
      </PodcastProvider>
    </div>
  );
}
//test feed
//https://www.omnycontent.com/d/playlist/aaea4e69-af51-495e-afc9-a9760146922b/64b5de49-d653-47c4-afe1-ab0600144b4b/87b34f0a-5ff9-491e-957c-ab0600144b63/podcast.rss
