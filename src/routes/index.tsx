import { useEffect, useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Compass } from "lucide-react";
import {
  byCategory,
  getPlace,
  PLACES,
  searchPlaces,
  seasonForMonth,
  todayPick,
  weekendCamps,
  weekendTrails,
} from "@/data/places";
import { featuredItineraries, KIND_LABEL } from "@/data/itineraries";
import { featuredTrails } from "@/data/trekking";
import { SEASON_LABEL } from "@/data/types";
import type { Place } from "@/data/types";
import { PlaceCard } from "@/components/place-card";
import { SearchField } from "@/components/search-field";

export const Route = createFileRoute("/")({ component: Home });

const FALLBACK: Place = PLACES[0]!;

function Home() {
  const [q, setQ] = useState("");
  const [pick, setPick] = useState<Place>(FALLBACK);
  const [weekend, setWeekend] = useState<Place[]>([]);
  const [trails, setTrails] = useState<Place[]>(featuredTrails(3));
  const [seasonLabel, setSeasonLabel] = useState(SEASON_LABEL["dort-mevsim"]);
  const results = useMemo(() => searchPlaces(q), [q]);
  const museums = byCategory("muze").slice(0, 3);
  const historic = byCategory("tarihi").slice(0, 3);
  const unesco = ["unesco-gobeklitepe", "unesco-ephesus", "unesco-goreme"]
    .map((id) => getPlace(id))
    .filter((p): p is Place => p != null);
  const routes = featuredItineraries(3);

  useEffect(() => {
    setPick(todayPick());
    setWeekend(weekendCamps());
    setTrails(weekendTrails(new Date(), 3));
    setSeasonLabel(SEASON_LABEL[seasonForMonth(new Date().getMonth())]);
  }, []);

  return (
    <main>
      <section className="relative h-96 overflow-hidden sm:h-125">
        <img
          src="/images/hero-city.jpg"
          alt=""
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/45" />
        <div className="relative mx-auto flex h-full max-w-6xl flex-col justify-end px-4 py-10 sm:px-6 sm:py-14">
          <p className="text-kicker font-medium tracking-[0.22em] text-pine-fg/80 uppercase">
            Şehir rehberi · parkur defteri
          </p>
          <h1 className="mt-3 max-w-xl font-display text-display font-medium tracking-tight text-pine-fg">
            Taşın, suyun ve ormanın İstanbul’u
          </h1>
          <p className="mt-4 max-w-lg text-lead text-pine-fg/85">
            Müzeler, tarihi mekanlar, UNESCO; kamp ve İstanbul’un yürüyüş parkurları — bentler,
            Aydos, adalar, Karadeniz falez.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <SearchField value={q} onChange={setQ} />

        {q.trim() ? (
          <section className="mt-8">
            <h2 className="font-display text-3xl font-medium">{results.length} sonuç</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {results.map((p) => (
                <PlaceCard key={p.id} place={p} />
              ))}
            </div>
            {results.length === 0 ? (
              <p className="mt-6 text-muted">
                Bu aramayla eşleşen yer yok. Mahalle, parkur veya mevsim deneyin.
              </p>
            ) : null}
          </section>
        ) : (
          <>
            <section className="mt-10 rounded-xl border border-line bg-paper p-5 sm:p-7">
              <p className="text-kicker font-medium tracking-[0.18em] text-muted uppercase">
                Bugünün rotası
              </p>
              <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h2 className="font-display text-3xl font-medium tracking-tight">{pick.name}</h2>
                  <p className="mt-2 max-w-xl text-muted">{pick.summary}</p>
                </div>
                <Link
                  to="/yer/$id"
                  params={{ id: pick.id }}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-pine px-5 text-sm font-medium text-pine-fg"
                >
                  Rotayı aç
                  <ArrowRight className="size-4" strokeWidth={1.75} />
                </Link>
              </div>
            </section>

            <section className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <CategoryTile
                to="/muzeler"
                image="/images/museum-interior.jpg"
                kicker={`${byCategory("muze").length} durak`}
                title="Müzeler"
                copy="Saray, arkeoloji, çağdaş salonlar."
              />
              <CategoryTile
                to="/tarihi"
                image="/images/historic-street.jpg"
                kicker={`${byCategory("tarihi").length} durak`}
                title="Tarihi mekanlar"
                copy="Cami, sur, çarşı, mahalle."
              />
              <CategoryTile
                to="/unesco"
                image="/images/unesco-ephesus.jpg"
                kicker={`${byCategory("unesco").length} alan`}
                title="UNESCO"
                copy="Türkiye'nin dünya mirası listesi."
              />
              <CategoryTile
                to="/yuruyus"
                image="/images/trek-belgrad.jpg"
                kicker={`${byCategory("yuruyus").length} parkur`}
                title="Yürüyüş"
                copy="Bentler, Aydos, ada, falez."
              />
              <CategoryTile
                to="/kamp"
                image="/images/camp-summer.jpg"
                kicker={`${byCategory("kamp").length} alan`}
                title="Kamp"
                copy="Yazlık, kışlık, dört mevsim."
              />
              <CategoryTile
                to="/rotalar"
                image="/images/trek-yusa.jpg"
                kicker="Hazır gün"
                title="Rotalar"
                copy="Şehir, parkur ve kamp hafta sonu."
              />
            </section>

            <SectionHead title="Bu hafta sonu parkur" to="/yuruyus" action="Tüm parkurlar" />
            <div className="mt-6 grid gap-5 lg:grid-cols-3">
              {trails.map((p) => (
                <PlaceCard key={p.id} place={p} />
              ))}
            </div>

            <SectionHead title="Hazır güzergah" to="/rotalar" action="Tüm rotalar" />
            <div className="mt-6 grid gap-5 lg:grid-cols-3">
              {routes.map((r) => (
                <Link
                  key={r.id}
                  to="/rota/$id"
                  params={{ id: r.id }}
                  className="group overflow-hidden rounded-xl border border-line bg-paper"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={r.image}
                      alt=""
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-kicker font-medium tracking-[0.16em] text-muted uppercase">
                      {KIND_LABEL[r.kind]} · {r.duration}
                    </p>
                    <h2 className="mt-1 font-display text-2xl font-medium">{r.title}</h2>
                    <p className="mt-1 text-sm text-muted">{r.summary}</p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-14 flex items-end justify-between gap-4">
              <h2 className="font-display text-3xl font-medium tracking-tight">
                Kamp · {seasonLabel}
              </h2>
              <Link to="/kamp" className="text-sm font-medium text-pine hover:underline">
                Kamp rehberi
              </Link>
            </div>
            <div className="mt-6 grid gap-5 lg:grid-cols-3">
              {weekend.map((p) => (
                <PlaceCard key={p.id} place={p} />
              ))}
            </div>

            <SectionHead title="Yarımada ve Pera" to="/muzeler" action="Tüm müzeler" />
            <div className="mt-6 grid gap-5 lg:grid-cols-3">
              {museums.map((p) => (
                <PlaceCard key={p.id} place={p} />
              ))}
            </div>

            <SectionHead title="Şehrin taşları" to="/tarihi" action="Tüm tarihi yerler" />
            <div className="mt-6 grid gap-5 lg:grid-cols-3">
              {historic.map((p) => (
                <PlaceCard key={p.id} place={p} />
              ))}
            </div>

            <SectionHead title="UNESCO kültür mirası" to="/unesco" action="22 alanı gör" />
            <div className="mt-6 grid gap-5 lg:grid-cols-3">
              {unesco.map((p) => (
                <PlaceCard key={p.id} place={p} />
              ))}
            </div>

            <p className="mt-14 flex items-center gap-2 text-sm text-faint">
              <Compass className="size-4" strokeWidth={1.75} />
              {PLACES.length} kayıtlı durak. Saat, vapur ve ücretler değişir; resmi kaynağı teyit
              edin.
            </p>
          </>
        )}
      </div>
    </main>
  );
}

function CategoryTile({
  to,
  image,
  kicker,
  title,
  copy,
}: {
  to: "/muzeler" | "/tarihi" | "/kamp" | "/unesco" | "/yuruyus" | "/rotalar";
  image: string;
  kicker: string;
  title: string;
  copy: string;
}) {
  return (
    <Link to={to} className="group overflow-hidden rounded-xl border border-line bg-paper">
      <div className="relative h-40 overflow-hidden">
        <img
          src={image}
          alt=""
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <p className="text-kicker font-medium tracking-[0.18em] text-muted uppercase">{kicker}</p>
        <h2 className="mt-1 font-display text-2xl font-medium">{title}</h2>
        <p className="mt-1 text-sm text-muted">{copy}</p>
      </div>
    </Link>
  );
}

function SectionHead({
  title,
  to,
  action,
}: {
  title: string;
  to: "/muzeler" | "/tarihi" | "/kamp" | "/rotalar" | "/unesco" | "/yuruyus";
  action: string;
}) {
  return (
    <div className="mt-14 flex items-end justify-between gap-4">
      <h2 className="font-display text-3xl font-medium tracking-tight">{title}</h2>
      <Link to={to} className="text-sm font-medium text-pine hover:underline">
        {action}
      </Link>
    </div>
  );
}
