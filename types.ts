export interface PodcastEpisode {
  readonly title: string;
  readonly src: string;
  readonly description?: string;
  readonly publishedDate?: string;
  readonly length?: number;
}

export interface SelectedPodcastEpisode {
  readonly src: string;
  readonly isPlaying: boolean;
}
