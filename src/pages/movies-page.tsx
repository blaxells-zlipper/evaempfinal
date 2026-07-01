import PageContainer from "@/components/layout/page-container";
import MoviesGrid from "@/components/movies/movies-grid";

export function MoviesPage() {
  return (
    <PageContainer>
      <section className="py-10">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-medium text-primary">Cartelera</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight">
            Peliculas disponibles
          </h1>
          <p className="mt-3 text-muted-foreground">
            Esta pagina demuestra fetching de datos, renderizado de informacion
            y componentes comunicados mediante props.
          </p>
        </div>

        <MoviesGrid />
      </section>
    </PageContainer>
  );
}
