import { useEffect, useState } from "react";
import { Bookmark } from "lucide-react";
import { useFavorites } from "@/lib/favorites";
import { cn } from "@/lib/cn";

export function FavoriteButton({
  id,
  className,
}: {
  id: string;
  className?: string;
}) {
  const [mounted, setMounted] = useState(false);
  const stored = useFavorites((s) => s.ids.includes(id));
  const toggle = useFavorites((s) => s.toggle);
  const has = mounted && stored;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggle(id);
      }}
      aria-pressed={has}
      aria-label={has ? "Kayıtlardan çıkar" : "Kaydet"}
      className={cn(
        "inline-flex size-11 shrink-0 items-center justify-center rounded-md border border-line bg-paper text-ink transition-colors duration-150",
        "hover:border-line-strong hover:bg-canvas",
        has && "border-pine bg-pine text-pine-fg",
        className,
      )}
    >
      <Bookmark className={cn("size-4", has && "fill-current")} strokeWidth={1.75} />
    </button>
  );
}
