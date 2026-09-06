import { Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import type { Place } from "@/data/types";
import { CATEGORY_LABEL, DIFFICULTY_LABEL, SEASON_LABEL } from "@/data/types";
import { FavoriteButton } from "./favorite-button";
import { cn } from "@/lib/cn";

export function PlaceCard({
  place,
  featured = false,
}: {
  place: Place;
  featured?: boolean;
}) {
  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-xl border border-line bg-paper shadow-lift",
        featured && "sm:flex-row",
      )}
    >
      <Link
        to="/yer/$id"
        params={{ id: place.id }}
        className={cn(
          "relative block overflow-hidden bg-canvas",
          featured ? "h-56 sm:h-auto sm:w-1/2" : "h-52",
        )}
      >
        <img
          src={place.image}
          alt=""
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      <div className={cn("flex flex-1 flex-col gap-3 p-5", featured && "sm:p-7")}>
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-kicker font-medium tracking-[0.18em] text-muted uppercase">
              {CATEGORY_LABEL[place.category]}
              {place.unescoYear ? ` · ${place.unescoYear}` : ""}
              {place.trailKm ? ` · ${place.trailKm} km` : ""}
              {place.difficulty ? ` · ${DIFFICULTY_LABEL[place.difficulty]}` : ""}
            </p>
            <h3
              className={cn(
                "mt-1 font-display font-medium tracking-tight text-ink",
                featured ? "text-3xl" : "text-2xl",
              )}
            >
              <Link to="/yer/$id" params={{ id: place.id }} className="hover:text-pine">
                {place.name}
              </Link>
            </h3>
          </div>
          <FavoriteButton id={place.id} />
        </div>
        <p className="text-sm leading-relaxed text-muted">{place.summary}</p>
        {place.seasons && place.seasons.length > 0 ? (
          <ul className="flex flex-wrap gap-1.5">
            {place.seasons.map((s) => (
              <li
                key={s}
                className="rounded-full border border-line px-2.5 py-0.5 text-kicker font-medium tracking-wide text-muted uppercase"
              >
                {SEASON_LABEL[s]}
              </li>
            ))}
          </ul>
        ) : null}
        <div className="mt-auto flex flex-wrap items-center gap-x-3 gap-y-1 pt-1 text-xs text-faint">
          <span className="inline-flex items-center gap-1">
            <MapPin className="size-3.5" strokeWidth={1.75} />
            {place.district}
          </span>
          {place.duration ? <span>{place.duration}</span> : null}
        </div>
      </div>
    </article>
  );
}
