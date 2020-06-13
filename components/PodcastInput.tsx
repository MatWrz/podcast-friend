import React, { useRef } from 'react';

interface Props {
  readonly podcastURL: string;
  readonly onSubmit?: (podcastURL) => void;
}

const PodcastInput: React.FC<Props> = ({ podcastURL, onSubmit }) => {
  const podcastURLInput = useRef(null);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    onSubmit(
      'https://cors-anywhere.herokuapp.com/' + podcastURLInput.current.value
    );
  };
  return (
    <form className="podcast-input" onSubmit={handleSubmit}>
      <label htmlFor="podcastURL">Podcast RSS Feed URL:</label>
      <input
        type="text"
        id="podcastURL"
        name="podcastURL"
        defaultValue={podcastURL}
        ref={podcastURLInput}
      />
      <input type="submit" value="Fetch Podcast" />
    </form>
  );
};

export default PodcastInput;
