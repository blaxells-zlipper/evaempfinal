import { zodResolver } from "@hookform/resolvers/zod";
import { CreditCard, Trash2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";

import PageContainer from "@/components/layout/page-container";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useCartStore } from "@/stores/cart-store";

const checkoutSchema = z.object({
  fullName: z.string().min(3, "Ingresa el nombre completo."),
  email: z.string().email("Ingresa un correo valido."),
  cardNumber: z
    .string()
    .regex(/^\d{16}$/, "La tarjeta demo debe tener 16 digitos."),
});

type CheckoutForm = z.infer<typeof checkoutSchema>;

export function CheckoutPage() {
  const [orderCode, setOrderCode] = useState("");
  const items = useCartStore((state) => state.items);
  const removeMovie = useCartStore((state) => state.removeMovie);
  const clearCart = useCartStore((state) => state.clearCart);
  const total = useCartStore((state) => state.total());

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<CheckoutForm>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      fullName: "",
      email: "",
      cardNumber: "",
    },
  });

  const onSubmit = (data: CheckoutForm) => {
    console.info("Pago simulado:", {
      customer: data.fullName,
      email: data.email,
      items,
      total,
    });

    setOrderCode(`CS-${items.length}-${Math.round(total * 100)}`);
    clearCart();
    reset();
  };

  return (
    <PageContainer>
      <section className="grid gap-8 py-10 lg:grid-cols-[1fr_0.8fr]">
        <div>
          <p className="text-sm font-medium text-primary">Pasarela de pago</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight">
            Checkout simulado
          </h1>
          <p className="mt-3 text-muted-foreground">
            Valida el formulario con Zod, maneja eventos de estado y muestra el
            resultado de la transaccion por consola.
          </p>

          <Card className="mt-8 rounded-lg">
            <CardHeader>
              <CardTitle>Datos del comprador</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label className="text-sm font-medium" htmlFor="fullName">
                    Nombre completo
                  </label>
                  <Input id="fullName" className="mt-2" {...register("fullName")} />
                  {errors.fullName ? (
                    <p className="mt-1 text-sm text-destructive">
                      {errors.fullName.message}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label className="text-sm font-medium" htmlFor="email">
                    Correo
                  </label>
                  <Input id="email" className="mt-2" {...register("email")} />
                  {errors.email ? (
                    <p className="mt-1 text-sm text-destructive">
                      {errors.email.message}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label className="text-sm font-medium" htmlFor="cardNumber">
                    Tarjeta demo
                  </label>
                  <Input
                    id="cardNumber"
                    className="mt-2"
                    inputMode="numeric"
                    placeholder="4242424242424242"
                    {...register("cardNumber")}
                  />
                  {errors.cardNumber ? (
                    <p className="mt-1 text-sm text-destructive">
                      {errors.cardNumber.message}
                    </p>
                  ) : null}
                </div>

                <Button
                  type="submit"
                  className="w-full gap-2"
                  disabled={items.length === 0 || isSubmitting}
                >
                  <CreditCard />
                  Pagar S/ {total.toFixed(2)}
                </Button>
              </form>

              {orderCode ? (
                <div className="mt-5 rounded-lg border border-primary/20 bg-primary/10 p-4 text-sm">
                  Compra simulada correctamente. Codigo:{" "}
                  <strong>{orderCode}</strong>
                </div>
              ) : null}
            </CardContent>
          </Card>
        </div>

        <aside>
          <Card className="rounded-lg">
            <CardHeader>
              <CardTitle>Resumen del carrito</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {items.length === 0 ? (
                <div className="rounded-lg border border-dashed p-6 text-center">
                  <p className="text-sm text-muted-foreground">
                    Aun no hay peliculas seleccionadas.
                  </p>
                  <Button asChild className="mt-4" variant="outline">
                    <Link to="/movies">Elegir peliculas</Link>
                  </Button>
                </div>
              ) : (
                items.map((item) => (
                  <div
                    key={item.movie.id}
                    className="flex items-start gap-3 border-b pb-4 last:border-0"
                  >
                    <img
                      src={item.movie.posterUrl}
                      alt={item.movie.title}
                      className="h-20 w-14 rounded-md object-cover"
                    />
                    <div className="min-w-0 flex-1">
                      <h2 className="font-medium">{item.movie.title}</h2>
                      <p className="text-sm text-muted-foreground">
                        {item.quantity} x S/ {item.movie.price.toFixed(2)}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeMovie(item.movie.id)}
                      aria-label={`Quitar ${item.movie.title}`}
                    >
                      <Trash2 />
                    </Button>
                  </div>
                ))
              )}

              <div className="flex items-center justify-between border-t pt-4">
                <span className="font-medium">Total</span>
                <strong className="text-2xl">S/ {total.toFixed(2)}</strong>
              </div>
            </CardContent>
          </Card>
        </aside>
      </section>
    </PageContainer>
  );
}
