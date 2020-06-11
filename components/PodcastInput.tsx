import React, { useRef } from 'react';

interface Props {
  readonly podcastURL: string;
  readonly onSubmit?: (podcastURL) => void;
}

const PodcastInput: React.FC<Props> = ({ podcastURL, onSubmit }) => {
  const podcastURLInput = useRef(null);
  return (
    <div className="podcast-input">
      <input type="text" ref={podcastURLInput} />
      <button onClick={(): void => onSubmit(podcastURLInput.current.value)}>
        Fetch Podcast
      </button>
    </div>
  );
};

export default PodcastInput;
