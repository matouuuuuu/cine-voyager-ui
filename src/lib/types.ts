
export interface Film {
  id: string;
  title: string;
  posterUrl: string;
  backdropUrl?: string;
  year: number;
  rating: number;
  runtime: number;
  genres: string[];
  overview: string;
  director?: string;
  cast?: string[];
  trailerUrl?: string;
}

export interface Genre {
  id: string;
  name: string;
}

export interface User {
  id: string;
  username: string;
  email: string;
  favorites: string[];
  watchlist: string[];
}

export interface Review {
  id: string;
  userId: string;
  filmId: string;
  rating: number;
  content: string;
  createdAt: string;
  username: string;
}
