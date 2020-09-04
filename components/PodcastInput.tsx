import React, { useRef, useState } from 'react';

interface Props {
  readonly podcastURL: string;
  readonly onSubmit?: (podcastURL) => void;
  readonly exampleFeed?: string;
}

const PodcastInput: React.FC<Props> = ({ podcastURL, onSubmit, exampleFeed }) => {
  const [podcastURLInput, setPodcastURLInput] = useState(podcastURL);
  const fetchPodcast = (podcastURL: string): void => {
    onSubmit(podcastURL);
  };
  const loadExample = (): void => {
    setPodcastURLInput(exampleFeed);
    fetchPodcast(exampleFeed);
  }

  return (
    <form className="podcast-input">
      <label htmlFor="podcastURL">Podcast RSS Feed URL:</label>
      <div>
        <input
          type="text"
          id="podcastURL"
          name="podcastURL"
          defaultValue={podcastURLInput}
          onChange={(event) => setPodcastURLInput(event.target.value)}
        />
      </div>
      <div className="podcast-input-buttons">
        <button className="podcast-input-buttons-fetch" type="button" onClick={() => fetchPodcast(podcastURLInput)}>Fetch Podcast</button>
        {exampleFeed && 
        (<button className="podcast-input-buttons-example" type="button" onClick={() => loadExample()}>Load Example</button>)}
      </div>
    </form>
  );
};

export default PodcastInput;
