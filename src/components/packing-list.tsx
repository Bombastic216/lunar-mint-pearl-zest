import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { usePacking } from "@/lib/packing";
import { cn } from "@/lib/cn";

export function PackingList({
  items,
  title = "Çanta",
}: {
  items: string[];
  title?: string;
}) {
  const [mounted, setMounted] = useState(false);
  const checked = usePacking((s) => s.checked);
  const toggle = usePacking((s) => s.toggle);
  const reset = usePacking((s) => s.reset);

  useEffect(() => {
    setMounted(true);
  }, []);

  const done = mounted ? items.filter((i) => checked.includes(i)).length : 0;

  return (
    <section className="rounded-xl border border-line bg-paper p-5 sm:p-6">
      <div className="flex items-end justify-between gap-3">
        <div>
          <h2 className="font-display text-2xl font-medium">{title}</h2>
          <p className="mt-1 text-sm text-faint">
            {mounted ? `${done} / ${items.length} hazır` : "Liste yükleniyor"}
          </p>
        </div>
        <button
          type="button"
          onClick={reset}
          className="h-11 px-3 text-sm font-medium text-muted hover:text-ink"
        >
          Sıfırla
        </button>
      </div>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
        {items.map((item) => {
          const on = mounted && checked.includes(item);
          return (
            <li key={item}>
              <button
                type="button"
                onClick={() => toggle(item)}
                className={cn(
                  "flex min-h-12 w-full items-center gap-3 rounded-md border px-3 py-2 text-left text-sm transition-colors duration-150",
                  on
                    ? "border-pine bg-paper text-ink"
                    : "border-line bg-canvas text-muted hover:border-line-strong",
                )}
              >
                <span
                  className={cn(
                    "inline-flex size-5 shrink-0 items-center justify-center rounded-xs border",
                    on ? "border-pine bg-pine text-pine-fg" : "border-line-strong bg-paper",
                  )}
                >
                  {on ? <Check className="size-3" strokeWidth={2.5} /> : null}
                </span>
                <span className={cn(on && "line-through opacity-70")}>{item}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
