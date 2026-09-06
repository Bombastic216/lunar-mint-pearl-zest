import { Search } from "lucide-react";

export function SearchField({
  value,
  onChange,
  placeholder = "Müze, mahalle, kamp ara",
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}) {
  return (
    <label className="relative block">
      <span className="sr-only">Ara</span>
      <Search
        className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-faint"
        strokeWidth={1.75}
      />
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="h-12 w-full rounded-lg border border-line bg-paper pr-4 pl-11 text-base text-ink outline-none placeholder:text-faint focus:border-pine"
      />
    </label>
  );
}
