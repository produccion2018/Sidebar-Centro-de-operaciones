import { createFileRoute, useParams } from "@tanstack/react-router";
import { ModulePage } from "@/components/cloudster/ModulePage";
import { EmptyState, SectionCard } from "@/components/cloudster/primitives";
import { MODULES } from "@/lib/cloudster/modules";

export const Route = createFileRoute("/app/$")({ component: ModuleStub });

function ModuleStub() {
  const { _splat } = useParams({ from: "/app/$" });
  const path = `/app/${_splat ?? ""}`.replace(/\/$/, "");
  const mod = MODULES.find((m) => m.path === path) ?? MODULES[0]!;

  return (
    <ModulePage moduleId={mod.id}>
      <SectionCard title={`${mod.label} · pantalla en construcción`} description="Este módulo ya está en el catálogo, con su plan, grupo y fondo temático definidos.">
        <EmptyState
          title="Pantalla operativa pendiente"
          description={`${mod.description} La próxima iteración construye la vista completa con datos ficticios, filtros, estados y exportaciones.`}
        />
      </SectionCard>
    </ModulePage>
  );
}
