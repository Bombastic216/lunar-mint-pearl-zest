import type { ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Bookmark, Compass, Footprints, Landmark, Route, Tent, University } from "lucide-react";
import { cn } from "@/lib/cn";

const DESKTOP_NAV = [
  { to: "/", label: "Keşfet" },
  { to: "/muzeler", label: "Müzeler" },
  { to: "/tarihi", label: "Tarihi" },
  { to: "/unesco", label: "UNESCO" },
  { to: "/kamp", label: "Kamp" },
  { to: "/yuruyus", label: "Yürüyüş" },
  { to: "/rotalar", label: "Rotalar" },
] as const;

const MOBILE_NAV = [
  { to: "/", label: "Keşfet", icon: Compass },
  { to: "/muzeler", label: "Müze", icon: University },
  { to: "/tarihi", label: "Tarihi", icon: Landmark },
  { to: "/kamp", label: "Kamp", icon: Tent },
  { to: "/yuruyus", label: "Parkur", icon: Footprints },
  { to: "/rotalar", label: "Rota", icon: Route },
] as const;

function isActive(pathname: string, to: string) {
  if (to === "/") return pathname === "/";
  return pathname === to || pathname.startsWith(`${to}/`) || (to === "/rotalar" && pathname.startsWith("/rota/"));
}

export function Shell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const favActive = pathname.startsWith("/favoriler");

  return (
    <div className="min-h-dvh bg-canvas text-ink">
      <header className="sticky top-0 z-30 border-b border-line bg-canvas/90 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:h-18 sm:px-6">
          <Link to="/" className="flex items-baseline gap-2">
            <span className="font-display text-2xl font-semibold tracking-tight">
              İstanbul Atlas
            </span>
            <span className="hidden text-kicker tracking-[0.16em] text-muted uppercase sm:inline">
              Şehir & doğa
            </span>
          </Link>
          <div className="flex items-center gap-1">
            <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Ana">
              {DESKTOP_NAV.map((item) => {
                const active = isActive(pathname, item.to);
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={cn(
                      "rounded-md px-2.5 py-2 text-sm font-medium transition-colors duration-150",
                      active ? "bg-pine text-pine-fg" : "text-muted hover:bg-paper hover:text-ink",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <Link
              to="/favoriler"
              aria-label="Kayıtlar"
              className={cn(
                "inline-flex size-11 items-center justify-center rounded-md",
                favActive ? "bg-pine text-pine-fg" : "text-muted hover:bg-paper hover:text-ink",
              )}
            >
              <Bookmark className="size-5" strokeWidth={1.75} />
            </Link>
          </div>
        </div>
      </header>

      <div className="pb-24 lg:pb-0">{children}</div>

      <nav
        className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-paper lg:hidden"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
        aria-label="Mobil"
      >
        <ul className="mx-auto grid max-w-lg grid-cols-6">
          {MOBILE_NAV.map((item) => {
            const Icon = item.icon;
            const active = isActive(pathname, item.to);
            return (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={cn(
                    "flex min-h-14 flex-col items-center justify-center gap-1 text-kicker font-medium tracking-wide",
                    active ? "text-pine" : "text-faint",
                  )}
                >
                  <Icon className="size-5" strokeWidth={1.75} />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
