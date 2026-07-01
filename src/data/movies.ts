import type { Movie } from "@/types/movie";

export const movies: Movie[] = [
  {
    id: "1",
    title: "Interstellar",
    posterUrl:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba",
    backdropUrl:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa",
    synopsis:
      "A team travels through a wormhole to find a new home for humanity.",
    releaseDate: "2014-11-06",
    rating: 8.7,
    runtime: 169,
    genres: ["Sci-Fi", "Adventure"],
    price: 19.9,
  },
  {
    id: "2",
    title: "Dune",
    posterUrl:
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c",
    backdropUrl:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    synopsis:
      "Paul Atreides faces politics, prophecy and war on the desert planet Arrakis.",
    releaseDate: "2021-10-22",
    rating: 8.0,
    runtime: 155,
    genres: ["Sci-Fi", "Drama"],
    price: 17.5,
  },
  {
    id: "3",
    title: "Oppenheimer",
    posterUrl:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1",
    backdropUrl:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    synopsis:
      "The story of the physicist who led the Manhattan Project.",
    releaseDate: "2023-07-21",
    rating: 8.3,
    runtime: 180,
    genres: ["Biography", "History"],
    price: 18.9,
  },
  {
    id: "4",
    title: "The Batman",
    posterUrl:
      "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb",
    backdropUrl:
      "https://images.unsplash.com/photo-1519608487953-e999c86e7455",
    synopsis:
      "A detective story in Gotham where corruption and revenge collide.",
    releaseDate: "2022-03-04",
    rating: 7.8,
    runtime: 176,
    genres: ["Action", "Crime"],
    price: 16.9,
  },
  {
    id: "5",
    title: "Spider-Man: No Way Home",
    posterUrl:
      "https://images.unsplash.com/photo-1635805737707-575885ab0820",
    backdropUrl:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176",
    synopsis:
      "A multiverse adventure changes Peter Parker's life forever.",
    releaseDate: "2021-12-17",
    rating: 8.2,
    runtime: 148,
    genres: ["Action", "Fantasy"],
    price: 15.9,
  },
  {
    id: "6",
    title: "Top Gun: Maverick",
    posterUrl:
      "https://images.unsplash.com/photo-1540962351504-03099e0a754b",
    backdropUrl:
      "https://images.unsplash.com/photo-1474302770737-173ee21bab63",
    synopsis:
      "Maverick trains a new generation for an impossible mission.",
    releaseDate: "2022-05-27",
    rating: 8.1,
    runtime: 131,
    genres: ["Action", "Drama"],
    price: 14.9,
  },
];
