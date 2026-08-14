import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Lock } from "lucide-react";
import { PLANS } from "@/lib/cloudster/mock";
import { MODULES, PLAN_HIGHLIGHTS, availableIn } from "@/lib/cloudster/modules";
import { ModuleIcon } from "@/lib/cloudster/icons";

export const Route = createFileRoute("/planes")({
  head: () => ({
    meta: [
      { title: "Planes de Cloudster — Inicial, Profesional, Avanzada y Grupo" },
      { name: "description", content: "Compará visualmente los cuatro niveles de Cloudster y qué módulos incluye cada plan para clínicas odontológicas." },
      { property: "og:title", content: "Planes de Cloudster" },
      { property: "og:description", content: "De consultorio individual a grupo odontológico multi-sede." },
    ],
  }),
  component: Planes,
});

function Planes() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="brand-gradient grid size-8 place-items-center rounded-[10px] font-display text-sm font-bold text-primary-foreground">C</span>
            <span className="font-display text-[15px] font-semibold">Cloudster</span>
          </Link>
          <Link to="/app" className="ml-auto rounded-lg bg-primary px-3.5 py-2 text-sm font-medium text-primary-foreground">Entrar al sistema</Link>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">Cuatro niveles, una misma plataforma</h1>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Los recordatorios están incluidos en todos los planes. La inteligencia, la automatización y la gestión multi-sede crecen a medida que crece la organización.
        </p>

        <div className="mt-10 grid gap-4 lg:grid-cols-4">
          {Object.values(PLANS).map((p) => (
            <article key={p.id} className={`surface-card flex flex-col p-5 ${p.id === "grupo" ? "ring-2 ring-primary/40" : ""}`}>
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">Nivel {p.level}</span>
              <h2 className="mt-1 font-display text-lg font-semibold">{p.name}</h2>
              <p className="text-xs text-muted-foreground">{p.audience}</p>
              <p className="mt-4 font-display text-3xl font-semibold">{p.price}<span className="text-xs font-normal text-muted-foreground"> /mes</span></p>

              <div className="mt-4 grid grid-cols-4 gap-1.5">
                {MODULES.filter((m) => availableIn(m, p.id)).slice(0, 12).map((m) => (
                  <span key={m.id} title={m.label} className="grid aspect-square place-items-center rounded-lg bg-primary/8 text-primary">
                    <ModuleIcon name={m.icon} className="size-3.5" />
                  </span>
                ))}
              </div>

              <ul className="mt-4 flex-1 space-y-1.5 text-xs text-muted-foreground">
                {PLAN_HIGHLIGHTS[p.id].map((h) => (
                  <li key={h} className="flex gap-2"><Check className="mt-0.5 size-3 shrink-0 text-primary" />{h}</li>
                ))}
              </ul>
              <Link to="/app" className="mt-5 rounded-lg bg-primary py-2 text-center text-xs font-semibold text-primary-foreground">Probar este plan</Link>
            </article>
          ))}
        </div>

        <section className="surface-card mt-12 overflow-x-auto">
          <table className="w-full min-w-[720px] text-sm">
            <thead>
              <tr className="border-b border-border text-xs uppercase tracking-wider text-muted-foreground">
                <th className="p-3 text-left font-medium">Módulo</th>
                {Object.values(PLANS).map((p) => <th key={p.id} className="p-3 text-center font-medium">{p.name}</th>)}
              </tr>
            </thead>
            <tbody>
              {MODULES.map((m) => (
                <tr key={m.id} className="border-b border-border/60 last:border-0">
                  <td className="p-3">
                    <span className="flex items-center gap-2"><ModuleIcon name={m.icon} className="size-4 text-primary" /> {m.label}</span>
                  </td>
                  {Object.values(PLANS).map((p) => (
                    <td key={p.id} className="p-3 text-center">
                      {availableIn(m, p.id)
                        ? <Check className="mx-auto size-4 text-[color:var(--color-success)]" />
                        : <Lock className="mx-auto size-3.5 text-muted-foreground/40" />}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}
