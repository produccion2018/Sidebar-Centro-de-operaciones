import { createFileRoute, Link } from "@tanstack/react-router";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip as RTooltip, XAxis, YAxis } from "recharts";
import { AlertTriangle, ArrowRight, BellRing, CalendarPlus, CircleDollarSign, Clock, FileSpreadsheet, UserPlus, Users } from "lucide-react";
import { ModulePage } from "@/components/cloudster/ModulePage";
import { ExportBar, Kpi, SectionCard, StatusPill } from "@/components/cloudster/primitives";
import { ACTIVITY, APPOINTMENTS, CLINICS, DENTISTS, REVENUE_SERIES, currency, compact } from "@/lib/cloudster/mock";
import { useCloudster } from "@/lib/cloudster/store";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/app/")({ component: Dashboard });

function Dashboard() {
  const { plan } = useCloudster();
  const isGroup = plan === "grupo";
  const totals = CLINICS.reduce((a, c) => ({ rev: a.rev + c.revenue, pat: a.pat + c.patients, staff: a.staff + c.staff }), { rev: 0, pat: 0, staff: 0 });

  return (
    <ModulePage
      moduleId="dashboard"
      title={isGroup ? "Dashboard corporativo" : "Centro de operaciones"}
      subtitle={isGroup ? "Consolidado de las 4 clínicas del Grupo Dental Pérez." : "Todo lo que pasa hoy en la Clínica Centro, en una sola pantalla."}
      actions={
        <>
          <Button size="sm" className="gap-1.5"><CalendarPlus className="size-4" /> Nuevo turno</Button>
          <Button size="sm" variant="outline" className="gap-1.5"><UserPlus className="size-4" /> Nuevo paciente</Button>
        </>
      }
    >
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {isGroup ? (
          <>
            <Kpi label="Facturación del grupo" value={currency(totals.rev)} delta={12} hint="4 clínicas" icon={<CircleDollarSign className="size-4" />} tone="brand" />
            <Kpi label="Pacientes activos" value={compact(totals.pat)} delta={6} hint="padrón consolidado" icon={<Users className="size-4" />} />
            <Kpi label="Ocupación media" value="81%" delta={3} hint="sillones ocupados" icon={<Clock className="size-4" />} tone="success" />
            <Kpi label="Personal total" value={String(totals.staff)} hint="odontólogos, asistentes y admin." icon={<Users className="size-4" />} />
          </>
        ) : (
          <>
            <Kpi label="Turnos de hoy" value="11" delta={9} hint="7 confirmados · 2 pendientes" icon={<Clock className="size-4" />} tone="brand" />
            <Kpi label="Ingresos del día" value={currency(1284000)} delta={14} hint="6 cobros registrados" icon={<CircleDollarSign className="size-4" />} tone="success" />
            <Kpi label="Recordatorios enviados" value="34" hint="94% entregados" icon={<BellRing className="size-4" />} />
            <Kpi label="Deuda vencida" value={currency(572000)} delta={-4} hint="2 pacientes" icon={<AlertTriangle className="size-4" />} tone="danger" />
          </>
        )}
      </div>

      <div className="grid gap-4 xl:grid-cols-[1.4fr_1fr]">
        <SectionCard
          title={isGroup ? "Ingresos vs gastos del grupo" : "Evolución de la clínica"}
          description="Últimos 6 meses · datos ficticios"
          actions={<ExportBar formats={["PDF", "Excel"]} />}
        >
          <div className="h-[260px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={REVENUE_SERIES} margin={{ left: -18, right: 8, top: 8 }}>
                <defs>
                  <linearGradient id="gi" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--color-chart-1)" stopOpacity={0.35} />
                    <stop offset="100%" stopColor="var(--color-chart-1)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
                <XAxis dataKey="month" tickLine={false} axisLine={false} fontSize={11} />
                <YAxis tickFormatter={(v) => compact(Number(v))} tickLine={false} axisLine={false} fontSize={11} />
                <RTooltip formatter={(v) => currency(Number(v))} contentStyle={{ borderRadius: 12, border: "1px solid var(--color-border)", fontSize: 12 }} />
                <Area type="monotone" dataKey="ingresos" stroke="var(--color-chart-1)" fill="url(#gi)" strokeWidth={2} />
                <Area type="monotone" dataKey="gastos" stroke="var(--color-chart-5)" fill="transparent" strokeWidth={2} strokeDasharray="4 4" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </SectionCard>

        <SectionCard title="Próximos turnos" description="Agenda de hoy" actions={<Link to="/app/agenda" className="inline-flex items-center gap-1 text-xs font-medium text-primary">Ver agenda <ArrowRight className="size-3" /></Link>} padded={false}>
          <ul className="divide-y divide-border/70">
            {APPOINTMENTS.slice(0, 6).map((a) => {
              const d = DENTISTS.find((x) => x.id === a.dentist)!;
              return (
                <li key={a.id} className="flex items-center gap-3 px-4 py-2.5">
                  <span className="w-12 font-mono text-xs text-muted-foreground">{a.start}</span>
                  <span className="size-8 shrink-0 rounded-full" style={{ background: d.color, opacity: 0.15 }} />
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-medium">{a.patient}</span>
                    <span className="block truncate text-xs text-muted-foreground">{a.treatment} · {d.name}</span>
                  </span>
                  <StatusPill status={a.status} />
                </li>
              );
            })}
          </ul>
        </SectionCard>
      </div>

      <div className="grid gap-4 xl:grid-cols-[1fr_1fr]">
        <SectionCard title={isGroup ? "Rendimiento por clínica" : "Producción por odontólogo"} description="Mes en curso">
          <div className="h-[240px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={isGroup ? CLINICS.map((c) => ({ name: c.name.replace("Clínica ", ""), valor: c.revenue })) : DENTISTS.map((d) => ({ name: d.name.split(" ").slice(-1)[0], valor: d.productivity * 42000 }))} margin={{ left: -18, right: 8 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
                <XAxis dataKey="name" tickLine={false} axisLine={false} fontSize={11} />
                <YAxis tickFormatter={(v) => compact(Number(v))} tickLine={false} axisLine={false} fontSize={11} />
                <RTooltip formatter={(v) => currency(Number(v))} contentStyle={{ borderRadius: 12, border: "1px solid var(--color-border)", fontSize: 12 }} />
                <Bar dataKey="valor" fill="var(--color-chart-1)" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </SectionCard>

        <SectionCard title="Actividad reciente" description="Trazabilidad del día" padded={false}>
          <ol className="relative space-y-0 px-4 py-2">
            {ACTIVITY.map((a) => (
              <li key={a.time} className="flex gap-3 border-l border-border py-2.5 pl-4">
                <span className="absolute -ml-[21px] mt-1.5 size-2 rounded-full bg-primary" />
                <span className="w-10 shrink-0 font-mono text-[11px] text-muted-foreground">{a.time}</span>
                <span className="text-sm"><strong className="font-medium">{a.user}</strong> <span className="text-muted-foreground">{a.action}</span></span>
              </li>
            ))}
          </ol>
        </SectionCard>
      </div>

      <SectionCard title="Accesos rápidos">
        <div className="flex flex-wrap gap-2">
          {[
            { to: "/app/agenda", label: "Agenda del día", icon: CalendarPlus },
            { to: "/app/pacientes", label: "Buscar paciente", icon: Users },
            { to: "/app/presupuestos", label: "Crear presupuesto", icon: FileSpreadsheet },
            { to: "/app/recordatorios", label: "Recordatorios", icon: BellRing },
          ].map((q) => (
            <Link key={q.to} to={q.to as never} className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-3.5 py-2 text-sm transition-colors hover:bg-accent">
              <q.icon className="size-4 text-primary" /> {q.label}
            </Link>
          ))}
        </div>
      </SectionCard>
    </ModulePage>
  );
}
