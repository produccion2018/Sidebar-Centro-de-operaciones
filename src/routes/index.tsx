import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BellRing, Boxes, Building2, CalendarRange, ChartNoAxesCombined, ClipboardPlus, Receipt, ShieldCheck, Sparkles, Workflow } from "lucide-react";
import hero from "@/assets/hero-cloudster.jpg";
import { PLANS } from "@/lib/cloudster/mock";
import { PLAN_HIGHLIGHTS } from "@/lib/cloudster/modules";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cloudster — Software de gestión para clínicas odontológicas" },
      { name: "description", content: "Agenda, pacientes, historia clínica, odontograma, presupuestos, facturación, inventario, RRHH, BI e IA en una sola plataforma dental." },
      { property: "og:title", content: "Cloudster — Software de gestión odontológica" },
      { property: "og:description", content: "De un consultorio a un grupo multi-sede: toda la clínica en una sola plataforma." },
    ],
  }),
  component: Landing,
});

const PILLARS = [
  { icon: CalendarRange, title: "Agenda viva", text: "Turnos por odontólogo, consultorio y sede, con confirmaciones en tiempo real." },
  { icon: ClipboardPlus, title: "Historia clínica real", text: "Evolución, antecedentes, odontograma, estudios y firma digital." },
  { icon: Receipt, title: "Administración", text: "Presupuestos, facturación, cobros y deuda bajo control." },
  { icon: Boxes, title: "Inventario", text: "Stock crítico, lotes y vencimientos por sede." },
  { icon: Workflow, title: "Automatizaciones", text: "Flujos visuales: disparador, condición y acción." },
  { icon: Sparkles, title: "Cloudster IA", text: "Analiza indicadores, resume actividad y sugiere acciones." },
  { icon: ChartNoAxesCombined, title: "Business Intelligence", text: "Tableros de rentabilidad, conversión y productividad." },
  { icon: ShieldCheck, title: "Seguridad", text: "Roles jerárquicos, auditoría y control de sesiones." },
];

function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
          <span className="brand-gradient grid size-8 place-items-center rounded-[10px] font-display text-sm font-bold text-primary-foreground">C</span>
          <span className="font-display text-[15px] font-semibold tracking-tight">Cloudster</span>
          <nav className="ml-auto flex items-center gap-1.5">
            <Link to="/planes" className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground">Planes</Link>
            <Link to="/app" className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3.5 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">
              Entrar al sistema <ArrowRight className="size-3.5" />
            </Link>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-border">
        <img src={hero} alt="Modelo dental 3D sobre fondo violeta" width={1600} height={912} className="absolute inset-0 size-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-linear-to-b from-background/70 via-background/85 to-background" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-20 md:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/8 px-3 py-1 text-xs font-medium text-primary">
              <span className="size-1.5 rounded-full bg-primary" /> Prototipo navegable · datos ficticios
            </span>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
              Toda la clínica odontológica <span className="text-brand-gradient">en una sola plataforma</span>
            </h1>
            <p className="mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
              Cloudster acompaña la evolución de una práctica dental: del consultorio individual al grupo con varias sedes.
              Agenda, clínica, administración, inteligencia y automatización, con la misma coherencia visual.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/app" className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-float)] transition-transform hover:-translate-y-0.5">
                Explorar el sistema <ArrowRight className="size-4" />
              </Link>
              <Link to="/planes" className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold transition-colors hover:bg-accent">
                Ver los 4 planes
              </Link>
            </div>
            <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4">
              {[["22", "módulos"], ["4", "niveles de plan"], ["6", "roles con permisos"]].map(([n, l]) => (
                <div key={l}>
                  <dt className="font-display text-2xl font-semibold text-primary">{n}</dt>
                  <dd className="text-xs uppercase tracking-wider text-muted-foreground">{l}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="surface-card grid-blueprint relative overflow-hidden p-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Grupo Dental Pérez</p>
            <ul className="mt-3 space-y-2 font-mono text-xs">
              {["Clínica Centro", "Clínica Norte", "Clínica Palermo", "Clínica Belgrano"].map((c, i, arr) => (
                <li key={c} className="flex items-center gap-2 rounded-lg border border-border bg-card/80 px-3 py-2">
                  <span className="text-muted-foreground">{i === arr.length - 1 ? "└──" : "├──"}</span>
                  <Building2 className="size-3.5 text-primary" />
                  {c}
                </li>
              ))}
            </ul>
            <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
              <div className="rounded-lg bg-primary/8 p-3">
                <p className="text-muted-foreground">Facturación consolidada</p>
                <p className="font-display text-lg font-semibold text-primary">$52,5 M</p>
              </div>
              <div className="rounded-lg bg-secondary p-3">
                <p className="text-muted-foreground">Turnos del mes</p>
                <p className="font-display text-lg font-semibold">4.812</p>
              </div>
            </div>
            <div className="mt-3 flex items-center gap-2 rounded-lg border border-dashed border-primary/30 px-3 py-2 text-xs text-muted-foreground">
              <BellRing className="size-3.5 text-primary" /> 128 recordatorios enviados hoy · 94% entregados
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">Cada módulo se siente como un software propio</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">No son tarjetas informativas: son pantallas operativas con datos, estados, filtros y acciones.</p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p) => (
            <article key={p.title} className="surface-card p-4 transition-transform hover:-translate-y-1">
              <p.icon className="size-5 text-primary" />
              <h3 className="mt-3 font-display text-sm font-semibold">{p.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{p.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">Una progresión clara</h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-4">
            {Object.values(PLANS).map((p) => (
              <article key={p.id} className={`surface-card flex flex-col p-5 ${p.id === "grupo" ? "ring-2 ring-primary/40" : ""}`}>
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">Nivel {p.level}</span>
                <h3 className="mt-1 font-display text-lg font-semibold">{p.name}</h3>
                <p className="text-xs text-muted-foreground">{p.audience}</p>
                <p className="mt-4 font-display text-2xl font-semibold">{p.price}<span className="text-xs font-normal text-muted-foreground"> /mes</span></p>
                <ul className="mt-4 flex-1 space-y-1.5 text-xs text-muted-foreground">
                  {PLAN_HIGHLIGHTS[p.id].slice(0, 5).map((h) => (
                    <li key={h} className="flex gap-2"><span className="text-primary">▸</span>{h}</li>
                  ))}
                </ul>
                <Link to="/planes" className="mt-5 rounded-lg border border-border py-2 text-center text-xs font-semibold transition-colors hover:bg-accent">Ver en detalle</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-border px-4 py-8 text-center text-xs text-muted-foreground">
        Cloudster · prototipo visual con datos ficticios. Sin backend ni datos reales.
      </footer>
    </div>
  );
}
