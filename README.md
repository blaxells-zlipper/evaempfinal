# CineSpoilerS Store

Proyecto final de React para una base de e-commerce de peliculas. Incluye rutas,
layout, consumo de datos con Axios/TanStack Query, estado global con Zustand,
formulario con React Hook Form y Zod, UI con TailwindCSS + shadcn y pasarela de
pago simulada.

## Versiones para captura

```powershell
node -v
npm -v
```

Resultado usado en esta entrega:

```txt
Node: v24.16.0
npm: 11.16.0
```

## Instalacion y ejecucion

```powershell
npm install
npm run dev
```

Abrir:

```txt
http://localhost:5173
```

## Validacion

```powershell
npm run lint
npm run build
npm test
```

Estado actual:

```txt
Lint: OK
Build: OK
Tests: 2 passed
Browser check: OK
```

## Librerias solicitadas

- React Router: rutas `/`, `/movies`, `/movies/:movieId`, `/checkout`.
- TanStack Query: fetching/cache de peliculas.
- Zustand: carrito global y total de compra.
- React Hook Form: formulario de checkout.
- Zod: validacion de nombre, correo y tarjeta demo.
- Axios: cliente HTTP para TMDB.
- TailwindCSS: estilos globales y utilidades.
- shadcn: componentes UI reutilizables.

## TMDB

El proyecto esta listo para consumir TMDB. Si se agrega token o API key, usa la
API real; si no, renderiza datos locales de respaldo para que la presentacion no
falle.

Crear `.env` a partir de `.env.example`:

```env
VITE_TMDB_API_URL=https://api.themoviedb.org/3
VITE_TMDB_TOKEN=
VITE_TMDB_API_KEY=
```

## Flujo para presentar

1. Capturar terminal con `node -v` y `npm -v`.
2. Capturar `npm install` o indicar que las dependencias ya estan instaladas.
3. Ejecutar `npm run dev` y abrir `http://localhost:5173`.
4. Mostrar la landing editada.
5. Entrar a `Movies` y explicar fetching/renderizado.
6. Abrir el detalle de una pelicula y agregarla al carrito.
7. Entrar a `Checkout`, completar:
   - Nombre: `Mauricio Demo`
   - Correo: `demo@mail.com`
   - Tarjeta: `4242424242424242`
8. Presionar pagar y mostrar el codigo de compra simulada.
9. Ejecutar `npm run lint`, `npm run build` y `npm test`.

## Evidencia visual incluida

- `docs/browser-home-check.png`: cartelera renderizada.
- `docs/browser-checkout-check.png`: checkout con pago simulado.

## Archivos clave

- `src/services/movie-api.ts`: consumo TMDB con fallback.
- `src/stores/cart-store.ts`: estado global del carrito.
- `src/pages/checkout-page.tsx`: pago simulado, eventos y validacion.
- `src/routes/router.tsx`: rutas principales.
- `src/components/movies/movie-card.tsx`: props, eventos y renderizado.
