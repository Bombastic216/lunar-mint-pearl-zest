import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Navigation } from "lucide-react";
import { getItinerary, KIND_LABEL } from "@/data/itineraries";
import { getPlace } from "@/data/places";

export const Route = createFileRoute("/rota/$id")({ component: ItineraryPage });

function ItineraryPage() {
  const { id } = Route.useParams();
  const route = getItinerary(id);

  if (!route) {
    return (
      <main className="mx-auto max-w-xl px-4 py-20 text-center">
        <h1 className="font-display text-3xl">Bu rota yok</h1>
        <Link
          to="/rotalar"
          className="mt-8 inline-flex h-12 items-center rounded-md bg-pine px-5 text-sm font-medium text-pine-fg"
        >
          Rotalara dön
        </Link>
      </main>
    );
  }

  return (
    <main>
      <div className="relative h-64 overflow-hidden sm:h-80">
        <img src={route.image} alt="" className="size-full object-cover" />
        <div className="absolute inset-0 bg-ink/30" />
      </div>

      <article className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
        <p className="text-kicker font-medium tracking-[0.18em] text-muted uppercase">
          {KIND_LABEL[route.kind]} · {route.duration}
        </p>
        <h1 className="mt-2 font-display text-display font-medium tracking-tight">{route.title}</h1>
        <p className="mt-4 text-lead text-ink">{route.summary}</p>
        <p className="mt-3 flex items-start gap-2 text-sm text-muted">
          <Navigation className="mt-0.5 size-4 shrink-0" strokeWidth={1.75} />
          {route.transport}
        </p>
        <p className="mt-2 text-sm text-faint">{route.seasonHint}</p>

        <ol className="mt-10 space-y-4">
          {route.steps.map((step, i) => {
            const place = getPlace(step.placeId);
            if (!place) return null;
            return (
              <li key={`${step.placeId}-${i}`}>
                <Link
                  to="/yer/$id"
                  params={{ id: place.id }}
                  className="flex gap-4 rounded-xl border border-line bg-paper p-4 transition-colors duration-150 hover:border-line-strong"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-pine font-display text-xl text-pine-fg">
                    {i + 1}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex flex-wrap items-baseline gap-x-2">
                      <span className="font-display text-2xl font-medium tracking-tight">
                        {place.name}
                      </span>
                      {step.time ? <span className="text-xs text-faint">{step.time}</span> : null}
                    </span>
                    <span className="mt-1 block text-sm text-muted">{step.note}</span>
                    <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-pine">
                      Durağı aç
                      <ArrowRight className="size-3.5" strokeWidth={1.75} />
                    </span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ol>

        <section className="mt-10">
          <h2 className="font-display text-2xl font-medium">Saha notu</h2>
          <ul className="mt-3 space-y-2">
            {route.tips.map((t) => (
              <li key={t} className="border-b border-line py-2 text-sm text-muted">
                {t}
              </li>
            ))}
          </ul>
        </section>

        <Link
          to="/rotalar"
          className="mt-10 inline-flex h-12 items-center rounded-md border border-line bg-paper px-5 text-sm font-medium"
        >
          Tüm rotalar
        </Link>
      </article>
    </main>
  );
}
