import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";

import { movies } from "@/data/movies";

import MovieCard from "./movie-card";

describe("MovieCard", () => {
  it("renders movie data and buy action", () => {
    render(
      <MemoryRouter>
        <MovieCard movie={movies[0]} />
      </MemoryRouter>,
    );

    expect(screen.getByText(movies[0].title)).toBeInTheDocument();
    expect(screen.getByText(`S/ ${movies[0].price.toFixed(2)}`)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Comprar" })).toBeInTheDocument();
  });
});
