import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ITINERARIES, KIND_LABEL, type ItineraryKind } from "@/data/itineraries";
import { cn } from "@/lib/cn";

export const Route = createFileRoute("/rotalar")({ component: RoutesPage });

function RoutesPage() {
  const [kind, setKind] = useState<"hepsi" | ItineraryKind>("hepsi");
  const list = useMemo(
    () => (kind === "hepsi" ? ITINERARIES : ITINERARIES.filter((r) => r.kind === kind)),
    [kind],
  );

  return (
    <main>
      <section className="relative h-56 overflow-hidden sm:h-72">
        <img src="/images/hero-city.jpg" alt="" className="size-full object-cover" />
        <div className="absolute inset-0 bg-ink/40" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-4 py-8 sm:px-6">
          <p className="text-kicker font-medium tracking-[0.18em] text-pine-fg/80 uppercase">
            Hazır güzergah
          </p>
          <h1 className="mt-2 font-display text-display font-medium tracking-tight text-pine-fg">
            Rotalar
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
        <p className="max-w-2xl text-lead text-muted">
          Şehir günleri, yürüyüş parkurları ve kamp hafta sonları. Duraklar sırayla; her biri kendi
          sayfasında saat, ücret ve çanta notu taşır.
        </p>

        <div className="mt-8 flex h-12 max-w-xl rounded-lg border border-line bg-paper p-1">
          {(
            [
              ["hepsi", "Tümü"],
              ["sehir", "Şehir"],
              ["yuruyus", "Yürüyüş"],
              ["kamp", "Kamp"],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              type="button"
              onClick={() => setKind(id)}
              className={cn(
                "flex-1 rounded-md px-3 text-sm font-medium",
                kind === id ? "bg-pine text-pine-fg" : "text-muted",
              )}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {list.map((r) => (
            <Link
              key={r.id}
              to="/rota/$id"
              params={{ id: r.id }}
              className="group overflow-hidden rounded-xl border border-line bg-paper shadow-lift"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={r.image}
                  alt=""
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5 sm:p-6">
                <p className="text-kicker font-medium tracking-[0.16em] text-muted uppercase">
                  {KIND_LABEL[r.kind]} · {r.duration}
                </p>
                <h2 className="mt-1 font-display text-3xl font-medium tracking-tight">{r.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{r.summary}</p>
                <p className="mt-4 text-sm text-faint">
                  {r.steps.length} durak · {r.seasonHint}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-pine">
                  Rotayı aç
                  <ArrowRight className="size-4" strokeWidth={1.75} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
