export interface Episode {
  id: number; // The id of the episode.
  name:	string;	// The name of the episode.
  air_date:	string; // The air date of the episode.
  episode: string; // The code of the episode.
  characters: string[]; // List of characters who have been seen in the episode.
  url: string; // Link to the episode's own endpoint.
  created: string; // Time at which the episode was created in the database.
}

export interface CharactersHttp {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string | null;
  },
  results: Location[]
}
