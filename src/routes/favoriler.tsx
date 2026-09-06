import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { getPlace } from "@/data/places";
import { useFavorites } from "@/lib/favorites";
import { PlaceCard } from "@/components/place-card";

export const Route = createFileRoute("/favoriler")({ component: FavPage });

function FavPage() {
  const ids = useFavorites((s) => s.ids);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const places = mounted ? ids.map((id) => getPlace(id)).filter((p) => p != null) : [];

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      <p className="text-kicker font-medium tracking-[0.18em] text-muted uppercase">Defter</p>
      <h1 className="mt-2 font-display text-display font-medium tracking-tight">Kayıtlar</h1>
      <p className="mt-3 max-w-xl text-muted">
        Bu cihazdaki yer imleri. Hesap yok; tarayıcı hafızasında durur.
      </p>
      {places.length === 0 ? (
        <div className="mt-10 rounded-xl border border-line bg-paper p-8">
          <p className="text-muted">
            {mounted ? "Henüz kayıt yok. Bir karttaki yer imine dokunun." : "Kayıtlar yükleniyor."}
          </p>
          <Link
            to="/"
            className="mt-6 inline-flex h-12 items-center rounded-md bg-pine px-5 text-sm font-medium text-pine-fg"
          >
            Rehbere dön
          </Link>
        </div>
      ) : (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {places.map((p) => (
            <PlaceCard key={p.id} place={p} />
          ))}
        </div>
      )}
    </main>
  );
}
