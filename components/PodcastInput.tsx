import React from 'react';

interface PodcastInput {
  onSubmit?: () => void;
}

const PodcastInput: React.FC<PodcastInput> = () => {
  return (
    <div className="podcast-input">
      <input type="text" />
      <button>Fetch Podcast</button>
    </div>
  );
};

export default PodcastInput;
