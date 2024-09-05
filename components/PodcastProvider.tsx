import React from 'react';
import { PodcastEpisode } from 'types';

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
  constructor(props: Readonly<Props>) {
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

  async componentDidUpdate(prevProps: Props): Promise<void> {
    if (prevProps.podcastURL !== this.props.podcastURL) {
      this.setState(
        { podcastURL: this.props.podcastURL, podcastEpisodes: [] },
        this.fetchPodcast
      );
    }
  }

  async fetchPodcast(): Promise<void> {
    const response = await fetch(
      'https://corsproxy.io/?' + encodeURIComponent(this.state.podcastURL),
      {
        headers: {
          'Content-Type': 'application/xml',
        },
      }
    );
    const responseBody = await response.text();
    const document = new DOMParser().parseFromString(
      responseBody,
      'application/xml'
    );
    if (document !== null && document.getElementsByTagName('rss').length > 0) {
      const rssElement = document.getElementsByTagName('rss')[0];
      const items = rssElement.getElementsByTagName('item');
      const podcastEpisodes: ReadonlyArray<PodcastEpisode> = Array.from(
        items
      ).map((item) => {
        return {
          title: item.getElementsByTagName('title')[0]?.textContent,
          description: item.getElementsByTagName('description')[0]?.textContent,
          src: item.getElementsByTagName('enclosure')[0]?.getAttribute('url'),
          image: item
            .getElementsByTagName('itunes:image')[0]
            ?.getAttribute('href'),
          publishedDate: item.getElementsByTagName('pubDate')[0]?.textContent,
          duration: parseInt(
            item.getElementsByTagName('itunes:duration')[0]?.textContent
          ),
        };
      });
      this.setState({ podcastEpisodes: podcastEpisodes });
    }
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
