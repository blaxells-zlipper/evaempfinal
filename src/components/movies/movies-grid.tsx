import { useQuery } from "@tanstack/react-query";

import { fetchPopularMovies } from "@/services/movie-api";

import MovieCard from "./movie-card";

const MoviesGrid = () => {
  const moviesQuery = useQuery({
    queryKey: ["movies", "popular"],
    queryFn: fetchPopularMovies,
  });

  return (
    <section className="py-4">
      <header className="mb-8">
        <h2 className="text-3xl font-bold">
          Peliculas destacadas
        </h2>

        <p className="mt-2 text-muted-foreground">
          Informacion renderizada desde TMDB cuando hay credenciales, con datos
          locales de respaldo para que el proyecto siempre levante.
        </p>
      </header>

      {moviesQuery.isLoading ? (
        <p className="text-muted-foreground">Cargando peliculas...</p>
      ) : null}

      <div
        className="
          grid
          gap-6
          md:grid-cols-2
          lg:grid-cols-3
        "
      >
        {(moviesQuery.data ?? []).map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        ))}
      </div>
    </section>
  );
};

export default MoviesGrid;
