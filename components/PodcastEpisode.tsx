import React from 'react';
import { PodcastEpisode as podcastEpisode } from 'types';

const prettyPrintTime: (number) => string = (time) => {
  // Hours, minutes and seconds
  const hrs = ~~(time / 3600);
  const mins = ~~((time % 3600) / 60);
  const secs = ~~time % 60;

  // Output like "1:01" or "4:03:59" or "123:03:59"
  let ret = '';

  if (hrs > 0) {
    ret += '' + hrs + ':' + (mins < 10 ? '0' : '');
  }

  ret += '' + mins + ':' + (secs < 10 ? '0' : '');
  ret += '' + secs;
  return ret;
};

const PodcastEpisode: React.FC<podcastEpisode> = ({ title, length, src }) => {
  return (
    <div className="podcast-episode">
      <h3 className="podcast-episode-title">{title}</h3>
      <audio controls src={src}>
        Your browser does not support the
        <code>audio</code> element.
      </audio>
      {/* <p>{prettyPrintTime(length)}</p> */}
    </div>
  );
};

export default PodcastEpisode;
