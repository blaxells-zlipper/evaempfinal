import { useQuery } from "@tanstack/react-query";
import { Calendar, Clock, ShoppingCart, Star } from "lucide-react";
import { Link, useParams } from "react-router-dom";

import PageContainer from "@/components/layout/page-container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { fetchMovieById } from "@/services/movie-api";
import { useCartStore } from "@/stores/cart-store";

export function MovieDetailPage() {
  const { movieId = "" } = useParams();
  const addMovie = useCartStore((state) => state.addMovie);
  const movieQuery = useQuery({
    queryKey: ["movies", movieId],
    queryFn: () => fetchMovieById(movieId),
  });

  if (movieQuery.isLoading) {
    return (
      <PageContainer>
        <p className="py-16 text-muted-foreground">Cargando detalle...</p>
      </PageContainer>
    );
  }

  const movie = movieQuery.data;

  if (!movie) {
    return (
      <PageContainer>
        <section className="py-16">
          <h1 className="text-3xl font-bold">Pelicula no encontrada</h1>
          <Button asChild className="mt-6">
            <Link to="/movies">Volver al catalogo</Link>
          </Button>
        </section>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <section className="grid gap-10 py-10 md:grid-cols-[0.85fr_1.15fr]">
        <img
          src={movie.backdropUrl}
          alt={movie.title}
          className="aspect-[4/5] w-full rounded-lg object-cover"
        />

        <div className="self-center">
          <div className="flex flex-wrap gap-2">
            {movie.genres.map((genre) => (
              <Badge key={genre} variant="secondary">
                {genre}
              </Badge>
            ))}
          </div>

          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            {movie.title}
          </h1>

          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            {movie.synopsis}
          </p>

          <div className="mt-6 grid gap-3 text-sm text-muted-foreground sm:grid-cols-3">
            <span className="flex items-center gap-2">
              <Star className="h-4 w-4 text-primary" />
              {movie.rating}/10
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              {movie.runtime} min
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" />
              {movie.releaseDate}
            </span>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <strong className="text-3xl">S/ {movie.price.toFixed(2)}</strong>
            <Button onClick={() => addMovie(movie)} className="gap-2">
              <ShoppingCart />
              Agregar al carrito
            </Button>
            <Button asChild variant="outline">
              <Link to="/checkout">Pagar ahora</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
