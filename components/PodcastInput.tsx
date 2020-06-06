import React from 'react';

interface Props {
  onSubmit?: () => void;
}

const PodcastInput: React.FC<Props> = () => {
  return (
    <div className="podcast-input">
      <input type="text" />
      <button>Fetch Podcast</button>
    </div>
  );
};

export default PodcastInput;
