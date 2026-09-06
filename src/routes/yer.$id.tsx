import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Clock3,
  MapPin,
  Navigation,
  Ticket,
  Trees,
} from "lucide-react";
import { getPlace, relatedPlaces } from "@/data/places";
import { itinerariesForPlace, KIND_LABEL } from "@/data/itineraries";
import {
  CATEGORY_LABEL,
  DIFFICULTY_LABEL,
  FACILITY_LABEL,
  REGION_LABEL,
  SEASON_LABEL,
  SIDE_LABEL,
  TRAIL_KIND_LABEL,
  UNESCO_KIND_LABEL,
} from "@/data/types";
import { FavoriteButton } from "@/components/favorite-button";
import { PlaceCard } from "@/components/place-card";

export const Route = createFileRoute("/yer/$id")({ component: PlacePage });

function PlacePage() {
  const { id } = Route.useParams();
  const place = getPlace(id);

  if (!place) {
    return (
      <main className="mx-auto max-w-xl px-4 py-20 text-center">
        <h1 className="font-display text-3xl">Bu durak yok</h1>
        <p className="mt-3 text-muted">Kayıt silinmiş veya bağlantı eski.</p>
        <Link
          to="/"
          className="mt-8 inline-flex h-12 items-center rounded-md bg-pine px-5 text-sm font-medium text-pine-fg"
        >
          Keşfet
        </Link>
      </main>
    );
  }

  const maps = `https://www.google.com/maps?q=${place.lat},${place.lng}`;
  const related = relatedPlaces(place);
  const onRoutes = itinerariesForPlace(place.id);
  const isCamp = place.category === "kamp";
  const isTrail = place.category === "yuruyus";

  return (
    <main>
      <div className="relative h-64 overflow-hidden sm:h-96">
        <img src={place.image} alt="" className="size-full object-cover" />
        <div className="absolute inset-0 bg-ink/25" />
      </div>

      <article className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-kicker font-medium tracking-[0.18em] text-muted uppercase">
              {CATEGORY_LABEL[place.category]}
              {place.unescoYear ? ` · ${place.unescoYear}` : ""}
              {place.unescoKind ? ` · ${UNESCO_KIND_LABEL[place.unescoKind]}` : ""}
              {place.era && !place.unescoYear ? ` · ${place.era}` : ""}
            </p>
            <h1 className="mt-2 font-display text-display font-medium tracking-tight">
              {place.name}
            </h1>
            <p className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
              <span className="inline-flex items-center gap-1">
                <MapPin className="size-3.5" strokeWidth={1.75} />
                {place.district}
                {place.region
                  ? ` · ${REGION_LABEL[place.region]}`
                  : ` · ${SIDE_LABEL[place.side]}`}
              </span>
              {place.duration ? <span>{place.duration}</span> : null}
              {place.distanceKm ? <span>{place.distanceKm} km</span> : null}
            </p>
          </div>
          <FavoriteButton id={place.id} />
        </div>

        <p className="mt-6 text-lead text-ink">{place.description}</p>
        {place.era && place.unescoYear ? (
          <p className="mt-3 text-sm text-muted">{place.era}</p>
        ) : null}

        <ul className="mt-6 flex flex-wrap gap-2">
          {place.highlights.map((h) => (
            <li
              key={h}
              className="rounded-full border border-line bg-paper px-3 py-1.5 text-xs font-medium text-muted"
            >
              {h}
            </li>
          ))}
        </ul>

        {(isCamp || isTrail) && place.seasons ? (
          <div className="mt-6 flex flex-wrap gap-2">
            {place.seasons.map((s) => (
              <span
                key={s}
                className="rounded-md bg-pine px-3 py-1.5 text-xs font-medium text-pine-fg"
              >
                {SEASON_LABEL[s]}
              </span>
            ))}
            {place.difficulty ? (
              <span className="rounded-md border border-line px-3 py-1.5 text-xs font-medium text-muted">
                Zorluk: {DIFFICULTY_LABEL[place.difficulty]}
              </span>
            ) : null}
            {place.trailKind ? (
              <span className="rounded-md border border-line px-3 py-1.5 text-xs font-medium text-muted">
                {TRAIL_KIND_LABEL[place.trailKind]}
              </span>
            ) : null}
            {place.trailKm ? (
              <span className="rounded-md border border-line px-3 py-1.5 text-xs font-medium text-muted">
                {place.trailKm} km parkur
              </span>
            ) : null}
          </div>
        ) : null}

        <dl className="mt-10 grid gap-4 sm:grid-cols-2">
          {place.hours ? (
            <Info label="Saat" icon={Clock3} value={place.hours} />
          ) : null}
          {place.fee ? <Info label="Ücret" icon={Ticket} value={place.fee} /> : null}
          <Info label="Ulaşım" icon={Navigation} value={place.transport} />
          <Info label="Adres" icon={MapPin} value={place.address} />
          {place.terrain ? <Info label="Zemin" icon={Trees} value={place.terrain} /> : null}
          {place.elevation ? (
            <Info label="Yükseklik" icon={Trees} value={place.elevation} />
          ) : null}
          {place.bestTime ? (
            <Info label="En iyi zaman" icon={Clock3} value={place.bestTime} />
          ) : null}
        </dl>

        {place.facilities && place.facilities.length > 0 ? (
          <section className="mt-10">
            <h2 className="font-display text-2xl font-medium">Tesis ve arazi</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {place.facilities.map((f) => (
                <li
                  key={f}
                  className="rounded-md border border-line bg-paper px-3 py-2 text-sm text-ink"
                >
                  {FACILITY_LABEL[f]}
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {place.tips && place.tips.length > 0 ? (
          <section className="mt-10">
            <h2 className="font-display text-2xl font-medium">Saha notu</h2>
            <ul className="mt-3 space-y-2">
              {place.tips.map((t) => (
                <li key={t} className="border-b border-line py-2 text-sm text-muted">
                  {t}
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {place.packing && place.packing.length > 0 ? (
          <section className="mt-10">
            <h2 className="font-display text-2xl font-medium">
              {isTrail ? "Bu parkura özel çanta" : "Bu alana özel çanta"}
            </h2>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {place.packing.map((t) => (
                <li key={t} className="rounded-md border border-line bg-paper px-3 py-2 text-sm">
                  {t}
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {place.rules && place.rules.length > 0 ? (
          <section className="mt-10">
            <h2 className="font-display text-2xl font-medium">Kural</h2>
            <ul className="mt-3 space-y-2">
              {place.rules.map((t) => (
                <li key={t} className="text-sm text-muted">
                  {t}
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <a
          href={maps}
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-flex h-12 items-center gap-2 rounded-md bg-pine px-5 text-sm font-medium text-pine-fg"
        >
          Haritada aç
          <ArrowUpRight className="size-4" strokeWidth={1.75} />
        </a>
      </article>

      {onRoutes.length > 0 ? (
        <section className="mx-auto max-w-6xl px-4 pb-10 sm:px-6">
          <h2 className="font-display text-3xl font-medium">Bu durak şu rotalarda</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {onRoutes.map((r) => (
              <li key={r.id}>
                <Link
                  to="/rota/$id"
                  params={{ id: r.id }}
                  className="flex items-center justify-between gap-3 rounded-xl border border-line bg-paper px-5 py-4"
                >
                  <span>
                    <span className="block text-kicker font-medium tracking-[0.14em] text-muted uppercase">
                      {KIND_LABEL[r.kind]} · {r.duration}
                    </span>
                    <span className="mt-1 block font-display text-2xl font-medium">{r.title}</span>
                  </span>
                  <ArrowUpRight className="size-4 shrink-0 text-pine" strokeWidth={1.75} />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {related.length > 0 ? (
        <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
          <h2 className="font-display text-3xl font-medium">Yakın duraklar</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <PlaceCard key={p.id} place={p} />
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}

function Info({
  label,
  value,
  icon: Icon,
}: {
  label: string;
  value: string;
  icon: typeof Clock3;
}) {
  return (
    <div className="rounded-xl border border-line bg-paper p-4">
      <dt className="flex items-center gap-2 text-kicker font-medium tracking-[0.14em] text-faint uppercase">
        <Icon className="size-3.5" strokeWidth={1.75} />
        {label}
      </dt>
      <dd className="mt-2 text-sm leading-relaxed text-ink">{value}</dd>
    </div>
  );
}
