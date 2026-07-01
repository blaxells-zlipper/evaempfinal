export interface Movie {
  id: string;
  title: string;
  posterUrl: string;
  backdropUrl: string;
  synopsis: string;
  releaseDate: string;
  rating: number;
  runtime: number;
  genres: string[];
  price: number;
}

export interface CartItem {
  movie: Movie;
  quantity: number;
}
