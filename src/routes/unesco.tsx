import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { byCategory, searchPlaces } from "@/data/places";
import type { Region } from "@/data/types";
import { REGION_LABEL, UNESCO_KIND_LABEL } from "@/data/types";
import { PlaceCard } from "@/components/place-card";
import { SearchField } from "@/components/search-field";
import { cn } from "@/lib/cn";

export const Route = createFileRoute("/unesco")({ component: UnescoPage });

const REGIONS: ("hepsi" | Region)[] = [
  "hepsi",
  "marmara",
  "ege",
  "akdeniz",
  "ic-anadolu",
  "karadeniz",
  "dogu-anadolu",
  "guneydogu",
];

function UnescoPage() {
  const all = byCategory("unesco");
  const [q, setQ] = useState("");
  const [region, setRegion] = useState<(typeof REGIONS)[number]>("hepsi");
  const list = useMemo(() => {
    let rows = searchPlaces(q, all);
    if (region !== "hepsi") rows = rows.filter((p) => p.region === region);
    return [...rows].sort((a, b) => (a.unescoYear ?? 0) - (b.unescoYear ?? 0));
  }, [all, q, region]);
  const cultural = all.filter((p) => p.unescoKind === "kulturel").length;
  const mixed = all.filter((p) => p.unescoKind === "karma").length;

  return (
    <main>
      <section className="relative h-56 overflow-hidden sm:h-72">
        <img src="/images/unesco-ephesus.jpg" alt="" className="size-full object-cover" />
        <div className="absolute inset-0 bg-ink/45" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-4 py-8 sm:px-6">
          <p className="text-kicker font-medium tracking-[0.18em] text-pine-fg/80 uppercase">
            Dünya mirası · 22 alan
          </p>
          <h1 className="mt-2 font-display text-display font-medium tracking-tight text-pine-fg">
            UNESCO kültür mirası
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
        <p className="max-w-2xl text-lead text-muted">
          Türkiye’de listedeki {all.length} alan: {cultural} kültürel, {mixed} karma. 1985
          İstanbul’undan 2025 Sardes’e. Saat ve bilet değişir; resmi kaynağı teyit edin.
        </p>

        <div className="mt-8">
          <SearchField value={q} onChange={setQ} placeholder="Alan, il veya dönem ara" />
        </div>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {REGIONS.map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setRegion(r)}
              className={cn(
                "h-11 rounded-md border px-3 text-sm font-medium",
                region === r
                  ? "border-pine bg-pine text-pine-fg"
                  : "border-line bg-paper text-muted hover:border-line-strong",
              )}
            >
              {r === "hepsi" ? "Tümü" : REGION_LABEL[r]}
            </button>
          ))}
        </div>

        <p className="mt-5 text-sm text-faint">
          {list.length} alan
          {region !== "hepsi" ? ` · ${REGION_LABEL[region]}` : ""}
        </p>
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <PlaceCard key={p.id} place={p} />
          ))}
        </div>
        {list.length === 0 ? (
          <p className="mt-6 text-muted">Bu süzgeçle eşleşen alan yok.</p>
        ) : null}

        <p className="mt-10 text-xs leading-relaxed text-faint">
          {UNESCO_KIND_LABEL.kulturel}: {cultural} · {UNESCO_KIND_LABEL.karma}: {mixed}. Kaynak:
          UNESCO Dünya Mirası Listesi, 2026.
        </p>
      </div>
    </main>
  );
}
