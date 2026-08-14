import { type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, FileSpreadsheet, FileText, Printer, Share2, TrendingDown, TrendingUp } from "lucide-react";

export function Kpi({
  label, value, delta, hint, icon, tone = "default",
}: {
  label: string; value: string; delta?: number | undefined; hint?: string | undefined; icon?: ReactNode | undefined;
  tone?: "default" | "success" | "warning" | "danger" | "brand" | undefined;
}) {
  const tones: Record<string, string> = {
    default: "text-foreground",
    success: "text-[color:var(--color-success)]",
    warning: "text-[color:var(--color-warning)]",
    danger: "text-destructive",
    brand: "text-primary",
  };
  return (
    <div className="surface-card group relative overflow-hidden p-4 transition-shadow hover:shadow-[var(--shadow-float)]">
      <div className="flex items-start justify-between gap-2">
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</p>
        {icon ? <span className="text-muted-foreground/70">{icon}</span> : null}
      </div>
      <p className={cn("mt-2 font-display text-2xl font-semibold tabular-nums", tones[tone])}>{value}</p>
      <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
        {typeof delta === "number" && (
          <span className={cn("inline-flex items-center gap-1 font-medium", delta >= 0 ? "text-[color:var(--color-success)]" : "text-destructive")}>
            {delta >= 0 ? <TrendingUp className="size-3" /> : <TrendingDown className="size-3" />}
            {delta >= 0 ? "+" : ""}{delta}%
          </span>
        )}
        {hint ? <span className="truncate">{hint}</span> : null}
      </div>
      <div className="pointer-events-none absolute -right-8 -top-8 size-24 rounded-full bg-[image:var(--gradient-brand)] opacity-[0.07] transition-opacity group-hover:opacity-15" />
    </div>
  );
}

const STATUS_TONE: Record<string, string> = {
  confirmado: "bg-[color:var(--color-success)]/12 text-[color:var(--color-success)] border-[color:var(--color-success)]/25",
  entregado: "bg-[color:var(--color-success)]/12 text-[color:var(--color-success)] border-[color:var(--color-success)]/25",
  pagada: "bg-[color:var(--color-success)]/12 text-[color:var(--color-success)] border-[color:var(--color-success)]/25",
  aprobado: "bg-[color:var(--color-success)]/12 text-[color:var(--color-success)] border-[color:var(--color-success)]/25",
  activo: "bg-[color:var(--color-success)]/12 text-[color:var(--color-success)] border-[color:var(--color-success)]/25",
  abierto: "bg-[color:var(--color-info)]/12 text-[color:var(--color-info)] border-[color:var(--color-info)]/25",
  enviado: "bg-[color:var(--color-info)]/12 text-[color:var(--color-info)] border-[color:var(--color-info)]/25",
  atendido: "bg-[color:var(--color-info)]/12 text-[color:var(--color-info)] border-[color:var(--color-info)]/25",
  pendiente: "bg-[color:var(--color-warning)]/15 text-[color:var(--color-warning)] border-[color:var(--color-warning)]/30",
  parcial: "bg-[color:var(--color-warning)]/15 text-[color:var(--color-warning)] border-[color:var(--color-warning)]/30",
  reprogramado: "bg-[color:var(--color-warning)]/15 text-[color:var(--color-warning)] border-[color:var(--color-warning)]/30",
  borrador: "bg-muted text-muted-foreground border-border",
  cancelado: "bg-destructive/10 text-destructive border-destructive/25",
  rechazado: "bg-destructive/10 text-destructive border-destructive/25",
  fallido: "bg-destructive/10 text-destructive border-destructive/25",
  vencida: "bg-destructive/10 text-destructive border-destructive/25",
  vencido: "bg-destructive/10 text-destructive border-destructive/25",
  ausente: "bg-destructive/10 text-destructive border-destructive/25",
};

export function StatusPill({ status, className }: { status: string; className?: string | undefined }) {
  const key = status.toLowerCase();
  return (
    <span className={cn("inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium capitalize", STATUS_TONE[key] ?? "bg-secondary text-secondary-foreground border-border", className)}>
      <span className="size-1.5 rounded-full bg-current" />
      {status}
    </span>
  );
}

export function SectionCard({
  title, description, actions, children, className, padded = true,
}: { title?: string | undefined; description?: string | undefined; actions?: ReactNode | undefined; children: ReactNode; className?: string | undefined; padded?: boolean | undefined }) {
  return (
    <section className={cn("surface-card overflow-hidden", className)}>
      {(title || actions) && (
        <header className="flex flex-wrap items-center justify-between gap-3 border-b border-border/70 px-4 py-3">
          <div>
            {title && <h3 className="font-display text-sm font-semibold">{title}</h3>}
            {description && <p className="text-xs text-muted-foreground">{description}</p>}
          </div>
          {actions}
        </header>
      )}
      <div className={cn(padded && "p-4")}>{children}</div>
    </section>
  );
}

export function ExportBar({ formats = ["PDF", "Excel", "CSV"] }: { formats?: string[] }) {
  const icon: Record<string, ReactNode> = {
    PDF: <FileText className="size-3.5" />,
    Excel: <FileSpreadsheet className="size-3.5" />,
    CSV: <Download className="size-3.5" />,
    Word: <FileText className="size-3.5" />,
  };
  return (
    <div className="flex flex-wrap items-center gap-1.5">
      {formats.map((f) => (
        <Button key={f} variant="outline" size="sm" className="h-8 gap-1.5 text-xs">
          {icon[f] ?? <Download className="size-3.5" />} {f}
        </Button>
      ))}
      <Button variant="ghost" size="sm" className="h-8 gap-1.5 text-xs"><Printer className="size-3.5" /> Imprimir</Button>
      <Button variant="ghost" size="sm" className="h-8 gap-1.5 text-xs"><Share2 className="size-3.5" /> Compartir</Button>
    </div>
  );
}

export function PlanTag({ plan }: { plan: string }) {
  return <Badge variant="outline" className="border-primary/30 bg-primary/8 text-[10px] font-semibold uppercase tracking-wider text-primary">{plan}</Badge>;
}

export function EmptyState({ title, description, action }: { title: string; description: string; action?: ReactNode | undefined }) {
  return (
    <div className="grid-blueprint flex flex-col items-center justify-center rounded-xl border border-dashed border-border px-6 py-12 text-center">
      <div className="brand-gradient mb-3 grid size-10 place-items-center rounded-xl text-primary-foreground opacity-90">
        <FileText className="size-5" />
      </div>
      <p className="font-display text-sm font-semibold">{title}</p>
      <p className="mt-1 max-w-sm text-xs text-muted-foreground">{description}</p>
      {action ? <div className="mt-4">{action}</div> : null}
    </div>
  );
}
