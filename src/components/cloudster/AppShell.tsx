import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Bell, ChevronDown, Lock, Menu, Search, Command } from "lucide-react";
import { cn } from "@/lib/utils";
import { MODULES, availableIn, planLevel } from "@/lib/cloudster/modules";
import { PLANS, CLINICS, type PlanId } from "@/lib/cloudster/mock";
import { ModuleIcon } from "@/lib/cloudster/icons";
import { ROLES, useCloudster } from "@/lib/cloudster/store";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";

const GROUPS = ["Clínico", "Operación", "Administración", "Inteligencia", "Organización", "Sistema"] as const;

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link to={"/app" as never} className="flex items-center gap-2.5">
      <span className="brand-gradient grid size-8 place-items-center rounded-[10px] font-display text-sm font-bold text-primary-foreground shadow-[0_6px_18px_-6px_oklch(0.5_0.18_295)]">
        C
      </span>
      {!compact && (
        <span className="leading-tight">
          <span className="block font-display text-[15px] font-semibold tracking-tight text-sidebar-foreground">Cloudster</span>
          <span className="block text-[10px] uppercase tracking-[0.18em] text-sidebar-foreground/50">Dental Suite</span>
        </span>
      )}
    </Link>
  );
}

function NavList({ onNavigate }: { onNavigate?: (() => void) | undefined }) {
  const { plan, disabled } = useCloudster();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <nav className="scrollbar-slim flex-1 space-y-5 overflow-y-auto px-3 pb-6">
      {GROUPS.map((group) => {
        const items = MODULES.filter((m) => m.group === group);
        const visible = items.filter((m) => availableIn(m, plan) || planLevel(m.minPlan) <= planLevel(plan) + 1);
        if (!visible.length) return null;
        return (
          <div key={group}>
            <p className="px-2 pb-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-sidebar-foreground/40">{group}</p>
            <ul className="space-y-0.5">
              {visible.map((m) => {
                const unlocked = availableIn(m, plan);
                const off = disabled.includes(m.id);
                const active = m.path === "/app" ? pathname === "/app" : pathname.startsWith(m.path);
                if (!unlocked) {
                  return (
                    <li key={m.id}>
                      <div className="flex cursor-not-allowed items-center gap-2.5 rounded-lg px-2 py-2 text-sm text-sidebar-foreground/35">
                        <ModuleIcon name={m.icon} className="size-4 shrink-0" />
                        <span className="truncate">{m.label}</span>
                        <Lock className="ml-auto size-3" />
                      </div>
                    </li>
                  );
                }
                return (
                  <li key={m.id}>
                    <Link
                      to={m.path as never}
                      onClick={onNavigate}
                      className={cn(
                        "group flex items-center gap-2.5 rounded-lg px-2 py-2 text-sm transition-colors",
                        active
                          ? "bg-sidebar-accent font-medium text-sidebar-accent-foreground shadow-[inset_2px_0_0_0_var(--color-sidebar-primary)]"
                          : "text-sidebar-foreground/75 hover:bg-sidebar-accent/60 hover:text-sidebar-accent-foreground",
                        off && "opacity-40",
                      )}
                    >
                      <ModuleIcon name={m.icon} className={cn("size-4 shrink-0", active && "text-sidebar-primary")} />
                      <span className="truncate">{m.label}</span>
                      {off && <span className="ml-auto text-[9px] uppercase tracking-wider">off</span>}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </nav>
  );
}

function PlanFooter() {
  const { plan } = useCloudster();
  return (
    <div className="border-t border-sidebar-border p-3">
      <div className="rounded-xl bg-sidebar-accent/60 p-3">
        <p className="text-[10px] uppercase tracking-[0.16em] text-sidebar-foreground/45">Plan activo</p>
        <p className="font-display text-sm font-semibold text-sidebar-foreground">{PLANS[plan].name}</p>
        <p className="mt-0.5 text-[11px] text-sidebar-foreground/55">{PLANS[plan].audience}</p>
        <Link to={"/planes" as never} className="mt-2.5 block rounded-lg bg-sidebar-primary px-3 py-1.5 text-center text-xs font-semibold text-sidebar-primary-foreground transition-opacity hover:opacity-90">
          Comparar planes
        </Link>
      </div>
    </div>
  );
}

function SidebarInner({ onNavigate }: { onNavigate?: (() => void) | undefined }) {
  return (
    <div className="flex h-full flex-col bg-sidebar text-sidebar-foreground">
      <div className="px-4 py-4"><Logo /></div>
      <NavList onNavigate={onNavigate} />
      <PlanFooter />
    </div>
  );
}

function Topbar() {
  const { plan, setPlan, clinic, setClinic, role } = useCloudster();
  const isGroup = plan === "grupo";
  const roleInfo = ROLES.find((r) => r.id === role)!;

  return (
    <header className="sticky top-0 z-30 flex flex-wrap items-center gap-2 border-b border-border/80 bg-background/85 px-3 py-2.5 backdrop-blur-xl md:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="lg:hidden"><Menu className="size-5" /></Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[280px] border-sidebar-border bg-sidebar p-0">
          <SheetTitle className="sr-only">Navegación</SheetTitle>
          <SidebarInner />
        </SheetContent>
      </Sheet>

      <div className="relative hidden min-w-0 flex-1 md:block md:max-w-sm">
        <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input placeholder="Buscar paciente, turno, factura…" className="h-9 pl-9 pr-14" />
        <kbd className="pointer-events-none absolute right-2 top-1/2 hidden -translate-y-1/2 items-center gap-0.5 rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground lg:flex">
          <Command className="size-2.5" />K
        </kbd>
      </div>

      <div className="ml-auto flex flex-wrap items-center gap-2">
        {isGroup && (
          <Select value={clinic} onValueChange={setClinic}>
            <SelectTrigger className="h-9 w-[168px] text-xs"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas las clínicas</SelectItem>
              {CLINICS.map((c) => <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>)}
            </SelectContent>
          </Select>
        )}

        <Select value={plan} onValueChange={(v) => setPlan(v as PlanId)}>
          <SelectTrigger className="h-9 w-[170px] border-primary/30 bg-primary/5 text-xs font-medium text-primary">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {Object.values(PLANS).map((p) => <SelectItem key={p.id} value={p.id}>{p.name}</SelectItem>)}
          </SelectContent>
        </Select>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="size-4.5" />
                <span className="absolute right-2 top-2 size-1.5 rounded-full bg-destructive" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>3 alertas sin leer</TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <div className={cn("flex items-center gap-2 rounded-full border py-1 pl-1 pr-2.5", isGroup ? "border-primary/40 bg-primary/8" : "border-border bg-card")}>
          <span className="brand-gradient grid size-7 place-items-center rounded-full text-[11px] font-semibold text-primary-foreground">MP</span>
          <span className="hidden leading-tight sm:block">
            <span className="block text-xs font-medium">Mauro Pinto</span>
            <span className="block text-[10px] text-muted-foreground">{roleInfo.label}</span>
          </span>
          <ChevronDown className="size-3.5 text-muted-foreground" />
        </div>
      </div>

      {isGroup && (
        <Badge variant="outline" className="order-last w-full justify-center border-primary/30 bg-primary/8 text-[10px] uppercase tracking-widest text-primary md:order-none md:w-auto">
          Vista corporativa · Grupo Dental Pérez
        </Badge>
      )}
    </header>
  );
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const [_, setOpen] = useState(false);
  void _; void setOpen;
  return (
    <div className="flex min-h-screen bg-background">
      <aside className="sticky top-0 hidden h-screen w-[264px] shrink-0 border-r border-sidebar-border lg:block">
        <SidebarInner />
      </aside>
      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar />
        <main className="min-w-0 flex-1">{children}</main>
      </div>
    </div>
  );
}
