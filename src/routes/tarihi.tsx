import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { byCategory, searchPlaces } from "@/data/places";
import { PlaceCard } from "@/components/place-card";
import { SearchField } from "@/components/search-field";
import { cn } from "@/lib/cn";

export const Route = createFileRoute("/tarihi")({ component: HistoricPage });

function HistoricPage() {
  const all = byCategory("tarihi");
  const [q, setQ] = useState("");
  const [side, setSide] = useState<"hepsi" | "avrupa" | "asya">("hepsi");
  const list = useMemo(() => {
    let rows = searchPlaces(q, all);
    if (side !== "hepsi") rows = rows.filter((p) => p.side === side);
    return rows;
  }, [all, q, side]);

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      <p className="text-kicker font-medium tracking-[0.18em] text-muted uppercase">Yarımada ve iskeleler</p>
      <h1 className="mt-2 font-display text-display font-medium tracking-tight">Tarihi mekanlar</h1>
      <p className="mt-3 max-w-2xl text-lead text-muted">
        Cami, sur, çarşı, hisar ve mahalle. Çoğu ücretsiz; namaz vakitlerinde iç mekan sınırlıdır.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <div className="flex-1">
          <SearchField value={q} onChange={setQ} placeholder="Mekan veya mahalle ara" />
        </div>
        <div className="flex h-12 rounded-lg border border-line bg-paper p-1">
          {(["hepsi", "avrupa", "asya"] as const).map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setSide(s)}
              className={cn(
                "flex-1 rounded-md px-3 text-sm font-medium",
                side === s ? "bg-pine text-pine-fg" : "text-muted",
              )}
            >
              {s === "hepsi" ? "Tümü" : s === "avrupa" ? "Avrupa" : "Anadolu"}
            </button>
          ))}
        </div>
      </div>
      <p className="mt-5 text-sm text-faint">{list.length} mekan</p>
      <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <PlaceCard key={p.id} place={p} />
        ))}
      </div>
    </main>
  );
}
