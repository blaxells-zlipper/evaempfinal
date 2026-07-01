import { describe, expect, it } from "vitest";

import { movies } from "@/data/movies";
import { useCartStore } from "@/stores/cart-store";

describe("cart store", () => {
  it("adds movies and calculates totals", () => {
    useCartStore.getState().clearCart();

    useCartStore.getState().addMovie(movies[0]);
    useCartStore.getState().addMovie(movies[0]);
    useCartStore.getState().addMovie(movies[1]);

    expect(useCartStore.getState().itemCount()).toBe(3);
    expect(useCartStore.getState().total()).toBeCloseTo(
      movies[0].price * 2 + movies[1].price,
    );
  });
});
