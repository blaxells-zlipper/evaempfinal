import { Link } from "react-router-dom";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Movie } from "@/types/movie";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useCartStore } from "@/stores/cart-store";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  const addMovie = useCartStore((state) => state.addMovie);

  return (
    <article>
      <Card className="h-full overflow-hidden rounded-lg">
        <img
          src={movie.posterUrl}
          alt={movie.title}
          className="aspect-2/3 w-full object-cover"
        />

        <CardHeader>
          <div className="mb-2 flex flex-wrap gap-2">
            {movie.genres.map((genre) => (
              <Badge key={genre} variant="secondary">
                {genre}
              </Badge>
            ))}
          </div>

          <CardTitle className="line-clamp-2 min-h-11">
            {movie.title}
          </CardTitle>
        </CardHeader>

        <CardContent>
          <p className="mb-4 line-clamp-3 text-sm text-muted-foreground">
            {movie.synopsis}
          </p>

          <div className="flex items-center justify-between text-sm">
            <span className="font-semibold">S/ {movie.price.toFixed(2)}</span>
            <span className="text-muted-foreground">{movie.rating}/10</span>
          </div>
        </CardContent>

        <CardFooter className="mt-auto gap-2">
          <Button asChild variant="outline" className="flex-1">
            <Link to={`/movies/${movie.id}`}>
              Detalle
            </Link>
          </Button>

          <Button className="flex-1" onClick={() => addMovie(movie)}>
            Comprar
          </Button>
        </CardFooter>
      </Card>
    </article>
  );
};

export default MovieCard;
