export interface PodcastEpisode {
  readonly title: string;
  readonly src: string;
  readonly image?: string;
  readonly description?: string;
  readonly publishedDate?: string;
  readonly duration?: number;
}

export interface SelectedPodcastEpisode {
  readonly src: string;
  readonly isPlaying: boolean;
}
