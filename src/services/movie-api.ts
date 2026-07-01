import { movies } from "@/data/movies";
import { httpClient } from "@/services/http-client";
import type { Movie } from "@/types/movie";

interface TmdbMovie {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  vote_average: number;
  genre_ids?: number[];
  runtime?: number;
}

interface TmdbListResponse {
  results: TmdbMovie[];
}

const genreMap = new Map<number, string>([
  [12, "Adventure"],
  [16, "Animation"],
  [18, "Drama"],
  [28, "Action"],
  [35, "Comedy"],
  [80, "Crime"],
  [878, "Sci-Fi"],
]);

const imageUrl = (path: string | null, fallback: string) =>
  path ? `https://image.tmdb.org/t/p/w780${path}` : fallback;

const toMovie = (movie: TmdbMovie, index: number): Movie => {
  const fallback = movies[index % movies.length];

  return {
    id: String(movie.id),
    title: movie.title || fallback.title,
    posterUrl: imageUrl(movie.poster_path, fallback.posterUrl),
    backdropUrl: imageUrl(movie.backdrop_path, fallback.backdropUrl),
    synopsis: movie.overview || fallback.synopsis,
    releaseDate: movie.release_date || fallback.releaseDate,
    rating: Number((movie.vote_average || fallback.rating).toFixed(1)),
    runtime: movie.runtime ?? fallback.runtime,
    genres:
      movie.genre_ids
        ?.map((genreId) => genreMap.get(genreId))
        .filter((genre): genre is string => Boolean(genre))
        .slice(0, 2) ?? fallback.genres,
    price: Number((14.9 + (index % 4) * 2).toFixed(2)),
  };
};

const hasTmdbCredentials = () =>
  Boolean(import.meta.env.VITE_TMDB_TOKEN || import.meta.env.VITE_TMDB_API_KEY);

export async function fetchPopularMovies(): Promise<Movie[]> {
  if (!hasTmdbCredentials()) {
    console.info("TMDB credentials not configured. Rendering local fallback data.");
    return movies;
  }

  try {
    const { data } = await httpClient.get<TmdbListResponse>("/movie/popular", {
      params: {
        language: "es-PE",
        page: 1,
      },
    });

    console.info("TMDB popular movies:", data.results.slice(0, 6));

    return data.results.slice(0, 12).map(toMovie);
  } catch (error) {
    console.warn("TMDB request failed. Rendering local fallback data.", error);
    return movies;
  }
}

export async function fetchMovieById(movieId: string): Promise<Movie | undefined> {
  const localMovie = movies.find((movie) => movie.id === movieId);

  if (!hasTmdbCredentials()) {
    return localMovie;
  }

  try {
    const { data } = await httpClient.get<TmdbMovie>(`/movie/${movieId}`, {
      params: {
        language: "es-PE",
      },
    });

    return toMovie(data, 0);
  } catch (error) {
    console.warn("TMDB detail request failed. Rendering local fallback data.", error);
    return localMovie;
  }
}
