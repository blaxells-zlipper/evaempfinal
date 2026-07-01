import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="py-14 md:py-20">
      <div className="grid items-center gap-10 md:grid-cols-[1.05fr_0.95fr]">
        <div>
          <span className="text-sm font-medium text-primary">
            CineSpoilerS Store
          </span>

          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
            Compra entradas de peliculas populares en minutos.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            Catalogo conectado a TMDB, carrito global con Zustand, rutas con
            React Router y checkout simulado para presentar una base de
            e-commerce funcional.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/movies"
              className="inline-flex h-10 items-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Ver cartelera
            </Link>

            <Link
              to="/checkout"
              className="inline-flex h-10 items-center rounded-lg border border-border px-4 text-sm font-medium transition-colors hover:bg-muted"
            >
              Ir al pago
            </Link>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg border bg-card shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba"
            alt="Sala de cine"
            className="aspect-[4/3] w-full object-cover"
          />

          <div className="grid grid-cols-3 gap-px bg-border text-center">
            <div className="bg-card p-4">
              <strong className="block text-2xl">12</strong>
              <span className="text-xs text-muted-foreground">Peliculas</span>
            </div>
            <div className="bg-card p-4">
              <strong className="block text-2xl">4</strong>
              <span className="text-xs text-muted-foreground">Rutas</span>
            </div>
            <div className="bg-card p-4">
              <strong className="block text-2xl">S/</strong>
              <span className="text-xs text-muted-foreground">Pago demo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
