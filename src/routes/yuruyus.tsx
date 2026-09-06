import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { byCategory, searchPlaces } from "@/data/places";
import { TREK_PACKING } from "@/data/trekking";
import type { Difficulty, TrailKind } from "@/data/types";
import { DIFFICULTY_LABEL, TRAIL_KIND_LABEL } from "@/data/types";
import { PlaceCard } from "@/components/place-card";
import { SearchField } from "@/components/search-field";
import { PackingList } from "@/components/packing-list";
import { cn } from "@/lib/cn";

export const Route = createFileRoute("/yuruyus")({ component: TrekPage });

type SideFilter = "hepsi" | "avrupa" | "asya" | "yakin";
type DiffFilter = "hepsi" | Difficulty;
type KindFilter = "hepsi" | TrailKind;

function TrekPage() {
  const all = byCategory("yuruyus");
  const [q, setQ] = useState("");
  const [side, setSide] = useState<SideFilter>("hepsi");
  const [diff, setDiff] = useState<DiffFilter>("hepsi");
  const [kind, setKind] = useState<KindFilter>("hepsi");
  const list = useMemo(() => {
    let rows = searchPlaces(q, all);
    if (side !== "hepsi") rows = rows.filter((p) => p.side === side);
    if (diff !== "hepsi") rows = rows.filter((p) => p.difficulty === diff);
    if (kind !== "hepsi") rows = rows.filter((p) => p.trailKind === kind);
    return [...rows].sort((a, b) => (a.trailKm ?? 99) - (b.trailKm ?? 99));
  }, [all, q, side, diff, kind]);

  const easy = all.filter((p) => p.difficulty === "kolay").length;
  const mid = all.filter((p) => p.difficulty === "orta").length;

  return (
    <main>
      <section className="relative h-56 overflow-hidden sm:h-72">
        <img src="/images/trek-belgrad.jpg" alt="" className="size-full object-cover" />
        <div className="absolute inset-0 bg-ink/40" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-4 py-8 sm:px-6">
          <p className="text-kicker font-medium tracking-[0.18em] text-pine-fg/80 uppercase">
            Parkur defteri · {all.length} rota
          </p>
          <h1 className="mt-2 font-display text-display font-medium tracking-tight text-pine-fg">
            İstanbul trekking
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
        <p className="max-w-2xl text-lead text-muted">
          Bentler, Aydos, adalar, Yuşa, Karadeniz falez. Mesafe ve yokuş gerçek; çadır
          değil, günübirlik parkur. Saat ve vapur seferi değişir.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          <Note
            kicker={`${easy} kolay`}
            title="Kent ve koru"
            body="Atatürk Kent Ormanı, Çamlıca, Polonezköy, Heybeliada. İlk parkur ve aile."
          />
          <Note
            kicker={`${mid} orta`}
            title="Sırt ve falez"
            body="Aydos zirve, Büyükada yokuşu, Yuşa, Kısırkaya, Şile, Ballıkayalar."
          />
          <Note
            kicker="Kural"
            title="Kamp değil"
            body="Belgrad ve Aydos’ta gece çadırı yok. Yağmurda kanyon iptal. Kene ve poyraz notu her kartta."
          />
        </div>

        <div className="mt-8">
          <PackingList items={TREK_PACKING} title="Parkur çantası" />
        </div>

        <div className="mt-8 flex flex-col gap-3">
          <SearchField value={q} onChange={setQ} placeholder="Parkur veya ilçe ara" />
          <ChipRow
            value={kind}
            onChange={setKind}
            options={[
              ["hepsi", "Zemin"],
              ["orman", TRAIL_KIND_LABEL.orman],
              ["sahil", TRAIL_KIND_LABEL.sahil],
              ["ada", TRAIL_KIND_LABEL.ada],
              ["kent", TRAIL_KIND_LABEL.kent],
              ["kanyon", TRAIL_KIND_LABEL.kanyon],
            ]}
          />
          <div className="flex flex-col gap-2 sm:flex-row">
            <ChipRow
              value={side}
              onChange={setSide}
              options={[
                ["hepsi", "Yaka"],
                ["avrupa", "Avrupa"],
                ["asya", "Anadolu"],
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
          <p className="text-sm text-faint">{list.length} parkur</p>
        </div>

        {list.length === 0 ? (
          <p className="mt-8 rounded-xl border border-line bg-paper p-6 text-muted">
            Bu filtreyle parkur yok. Zemini veya zorluğu gevşetin.{" "}
            <Link to="/rotalar" className="font-medium text-pine hover:underline">
              Hazır yürüyüş gününe bakın
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

function Note({ kicker, title, body }: { kicker: string; title: string; body: string }) {
  return (
    <div className="rounded-xl border border-line bg-paper p-5">
      <p className="text-kicker font-medium tracking-[0.16em] text-muted uppercase">{kicker}</p>
      <h2 className="mt-2 font-display text-2xl font-medium">{title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
    </div>
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
