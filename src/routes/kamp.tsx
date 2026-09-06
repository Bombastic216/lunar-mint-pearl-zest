import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { byCategory, searchPlaces } from "@/data/places";
import { CAMP_RULES, PACKING_CORE, SEASON_GUIDES } from "@/data/camp-guide";
import type { Difficulty, Season } from "@/data/types";
import { DIFFICULTY_LABEL, SEASON_LABEL } from "@/data/types";
import { PlaceCard } from "@/components/place-card";
import { SearchField } from "@/components/search-field";
import { PackingList } from "@/components/packing-list";
import { cn } from "@/lib/cn";

export const Route = createFileRoute("/kamp")({ component: CampPage });

type SeasonFilter = "hepsi" | Season;
type RegionFilter = "hepsi" | "ici" | "yakin";
type DiffFilter = "hepsi" | Difficulty;

function CampPage() {
  const all = byCategory("kamp");
  const [q, setQ] = useState("");
  const [season, setSeason] = useState<SeasonFilter>("hepsi");
  const [region, setRegion] = useState<RegionFilter>("hepsi");
  const [diff, setDiff] = useState<DiffFilter>("hepsi");
  const list = useMemo(() => {
    let rows = searchPlaces(q, all);
    if (season !== "hepsi") {
      rows = rows.filter((p) => p.seasons?.includes(season));
    }
    if (region === "ici") {
      rows = rows.filter((p) => p.side === "avrupa" || p.side === "asya");
    } else if (region === "yakin") {
      rows = rows.filter((p) => p.side === "yakin");
    }
    if (diff !== "hepsi") {
      rows = rows.filter((p) => p.difficulty === diff);
    }
    return rows;
  }, [all, q, season, region, diff]);
  const guide = season === "hepsi" ? null : SEASON_GUIDES.find((g) => g.id === season);
  const packItems = guide ? [...PACKING_CORE, ...guide.gear] : PACKING_CORE;

  return (
    <main>
      <section className="relative h-56 overflow-hidden sm:h-72">
        <img src="/images/sile-coast.jpg" alt="" className="size-full object-cover" />
        <div className="absolute inset-0 bg-ink/40" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-4 py-8 sm:px-6">
          <p className="text-kicker font-medium tracking-[0.18em] text-pine-fg/80 uppercase">
            Kamp defteri
          </p>
          <h1 className="mt-2 font-display text-display font-medium tracking-tight text-pine-fg">
            Yazlık, kışlık, dört mevsim
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
        <p className="max-w-2xl text-lead text-muted">
          İstanbul ili ve hafta sonu mesafesi. Karadeniz rüzgarı, orman yasağı ve kış soğuğu bu
          listenin bir parçası — yalnızca yer adı değil.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {SEASON_GUIDES.map((g) => (
            <button
              key={g.id}
              type="button"
              onClick={() => setSeason(g.id)}
              className={cn(
                "rounded-xl border p-5 text-left transition-colors duration-150",
                season === g.id
                  ? "border-pine bg-pine text-pine-fg"
                  : "border-line bg-paper hover:border-line-strong",
              )}
            >
              <p className="text-kicker font-medium tracking-[0.16em] uppercase opacity-80">
                {g.months}
              </p>
              <h2 className="mt-2 font-display text-2xl font-medium">{g.title}</h2>
              <p
                className={cn(
                  "mt-2 text-sm leading-relaxed",
                  season === g.id ? "text-pine-fg/85" : "text-muted",
                )}
              >
                {g.who}
              </p>
            </button>
          ))}
        </div>

        {guide ? (
          <article className="mt-8 rounded-xl border border-line bg-paper p-5 sm:p-7">
            <h2 className="font-display text-3xl font-medium">{guide.title} notu</h2>
            <p className="mt-3 max-w-3xl text-muted">{guide.climate}</p>
            <p className="mt-3 max-w-3xl text-muted">{guide.notes}</p>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-sm font-medium">Çanta</h3>
                <ul className="mt-2 space-y-1.5 text-sm text-muted">
                  {guide.gear.map((item) => (
                    <li key={item} className="border-b border-line py-1.5">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-medium">Risk</h3>
                <ul className="mt-2 space-y-1.5 text-sm text-muted">
                  {guide.risks.map((item) => (
                    <li key={item} className="border-b border-line py-1.5">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setSeason("hepsi")}
              className="mt-6 text-sm font-medium text-pine hover:underline"
            >
              Filtreyi temizle
            </button>
          </article>
        ) : (
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {CAMP_RULES.map((rule) => (
              <div key={rule.title} className="rounded-xl border border-line bg-paper p-5">
                <h2 className="font-display text-2xl font-medium">{rule.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{rule.body}</p>
              </div>
            ))}
          </div>
        )}

        <div className="mt-8">
          <PackingList items={packItems} title={guide ? `${guide.title} çantası` : "Her çantada"} />
        </div>

        <p className="mt-8 text-sm text-muted">
          Kış kampı İstanbul içinde yok denecek kadar azdır; Kartepe ve Uludağ hafta sonu mesafesi.
          İl içi orman (Belgrad, Polonezköy, Aydos) çoğu zaman günübirliktir. Parkur notu{" "}
          <Link to="/yuruyus" className="font-medium text-pine hover:underline">
            yürüyüş defterinde
          </Link>
          .
        </p>

        <div className="mt-8 flex flex-col gap-3">
          <SearchField value={q} onChange={setQ} placeholder="Kamp alanı veya ilçe ara" />
          <div className="flex flex-col gap-2 sm:flex-row">
            <ChipRow
              value={region}
              onChange={setRegion}
              options={[
                ["hepsi", "Tümü"],
                ["ici", "İstanbul içi"],
                ["yakin", "Yakın kaçış"],
              ]}
            />
            <ChipRow
              value={diff}
              onChange={setDiff}
              options={[
                ["hepsi", "Zorluk"],
                ["kolay", DIFFICULTY_LABEL.kolay],
                ["orta", DIFFICULTY_LABEL.orta],
                ["zor", DIFFICULTY_LABEL.zor],
              ]}
            />
          </div>
          <p className="text-sm text-faint">
            {list.length} alan
            {season !== "hepsi" ? ` · ${SEASON_LABEL[season]}` : ""}
          </p>
        </div>

        {list.length === 0 ? (
          <p className="mt-8 rounded-xl border border-line bg-paper p-6 text-muted">
            Bu filtreyle alan yok. Mevsimi veya zorluğu gevşetin.{" "}
            <Link to="/rotalar" className="font-medium text-pine hover:underline">
              Kamp rotasına bakın
            </Link>
            .
          </p>
        ) : (
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((p) => (
              <PlaceCard key={p.id} place={p} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

function ChipRow<T extends string>({
  value,
  onChange,
  options,
}: {
  value: T;
  onChange: (v: T) => void;
  options: ReadonlyArray<readonly [T, string]>;
}) {
  return (
    <div className="flex min-h-12 flex-1 flex-wrap gap-1 rounded-lg border border-line bg-paper p-1">
      {options.map(([id, label]) => (
        <button
          key={id}
          type="button"
          onClick={() => onChange(id)}
          className={cn(
            "min-h-10 flex-1 rounded-md px-3 text-sm font-medium",
            value === id ? "bg-pine text-pine-fg" : "text-muted",
          )}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
