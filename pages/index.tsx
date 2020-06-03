import React from 'react';
import Head from 'next/head';
import PodcastInput from 'components/PodcastInput';
import PodcastEpisodeList from 'components/PodcastEpisodeList';
import { PodcastEpisode as podcastEpisode } from 'types';

const episode: podcastEpisode = {
  title: 'Test',
  src:
    'https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3',
  length: 174,
};

export default function Home(): JSX.Element {
  return (
    <div className="index-page">
      <Head>
        <title>Compodre | Podcast Listener</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <PodcastInput />
        <PodcastEpisodeList podcastEpisodes={[episode, episode]} />
      </main>
    </div>
  );
}
