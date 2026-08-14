import type { ReactNode } from "react";
import { MODULE_BY_ID, type ModuleId } from "@/lib/cloudster/modules";
import { BACKGROUNDS } from "./backgrounds";
import { PLANS } from "@/lib/cloudster/mock";
import { PlanTag } from "./primitives";
import { cn } from "@/lib/utils";

export function ModulePage({
  moduleId, title, subtitle, actions, tabs, children,
}: {
  moduleId: ModuleId;
  title?: string;
  subtitle?: string;
  actions?: ReactNode;
  tabs?: ReactNode;
  children: ReactNode;
}) {
  const mod = MODULE_BY_ID[moduleId];
  const bg = BACKGROUNDS[mod.bg];

  return (
    <div className="relative isolate min-h-full">
      {/* Fondo temático del módulo — sutil, detrás del contenido */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] overflow-hidden">
        <img src={bg} alt="" loading="lazy" className="size-full object-cover opacity-[0.16]" />
        <div className="absolute inset-0 bg-linear-to-b from-background/45 via-background/85 to-background" />
      </div>

      <div className="mx-auto w-full max-w-[1600px] px-4 py-6 md:px-6 lg:px-8">
        <header className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div className="min-w-0">
            <div className="mb-1.5 flex items-center gap-2">
              <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">{mod.group}</span>
              <PlanTag plan={`Desde ${PLANS[mod.minPlan].name}`} />
            </div>
            <h1 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">{title ?? mod.label}</h1>
            <p className="mt-1 max-w-2xl text-sm text-muted-foreground">{subtitle ?? mod.description}</p>
          </div>
          {actions ? <div className="flex flex-wrap items-center gap-2">{actions}</div> : null}
        </header>
        {tabs ? <div className="mb-5">{tabs}</div> : null}
        <div className={cn("space-y-5 pb-12")}>{children}</div>
      </div>
    </div>
  );
}
