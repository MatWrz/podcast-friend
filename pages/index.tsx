import React from 'react';
import Head from 'next/head';
import PodcastInput from 'components/PodcastInput';
import PodcastEpisode from 'components/PodcastEpisode';

export default function Home(): JSX.Element {
  return (
    <div className="index-page">
      <Head>
        <title>Compodre | Podcast Listener</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <PodcastInput />
        <PodcastEpisode
          title="Test"
          src="https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3"
          length={145}
        />
      </main>
    </div>
  );
}
