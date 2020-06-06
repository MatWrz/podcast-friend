import React from 'react';
import { PodcastEpisode } from 'types';
import ky from 'ky/umd';

interface Props {
  readonly podcastURL: string;
}

interface State {
  readonly podcastURL: string;
  readonly podcastEpisodes: ReadonlyArray<PodcastEpisode>;
  readonly isLoading: boolean;
}

interface DataContextProps {
  readonly podcastURL: string;
  readonly podcastEpisodes: ReadonlyArray<PodcastEpisode>;
  readonly isLoading: boolean;
}

interface ProviderContextProps {
  readonly fetchPodcast: () => void;
  readonly updatePodcastURL: (podcastURL: string) => void;
}

type PodcastContextProps = DataContextProps & Partial<ProviderContextProps>;

export const PodcastContext = React.createContext<PodcastContextProps>({
  podcastEpisodes: [],
  isLoading: false,
  podcastURL: '',
});

export const PodcastConsumer = PodcastContext.Consumer;

class PodcastProvider extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      podcastURL: this.props.podcastURL,
      podcastEpisodes: [],
      isLoading: false,
    };
    this.fetchPodcast = this.fetchPodcast.bind(this);
    this.updatePodcastURL = this.updatePodcastURL.bind(this);
  }

  async componentDidMount(): Promise<void> {
    this.fetchPodcast();
  }

  async fetchPodcast(): Promise<void> {
    // AJAX call to retrieve XML then parse result to create podcast episodes
    const api = ky.extend({
      hooks: {
        beforeRequest: [
          (request): void => {
            request.headers.set('Content-Type', 'application/xml');
            request.headers.set('Origin', 'localhost');
          },
        ],
      },
    });
    const response = await api(this.state.podcastURL).text();
    const document = new DOMParser().parseFromString(
      response,
      'application/xml'
    );
    console.log(document.children);
  }

  async updatePodcastURL(podcastURL: string): Promise<void> {
    this.setState({ podcastURL: podcastURL }, this.fetchPodcast);
  }

  render(): JSX.Element {
    const { podcastEpisodes, isLoading, podcastURL } = this.state;
    return (
      <PodcastContext.Provider
        value={{
          podcastEpisodes,
          isLoading,
          podcastURL,
          fetchPodcast: this.fetchPodcast,
          updatePodcastURL: this.updatePodcastURL,
        }}
      >
        {this.props.children}
      </PodcastContext.Provider>
    );
  }
}

export default PodcastProvider;
