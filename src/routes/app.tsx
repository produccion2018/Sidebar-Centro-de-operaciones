import { createFileRoute, Outlet } from "@tanstack/react-router";
import { AppShell } from "@/components/cloudster/AppShell";
import { CloudsterProvider } from "@/lib/cloudster/store";

export const Route = createFileRoute("/app")({
  head: () => ({
    meta: [
      { title: "Cloudster · Sistema de gestión odontológica" },
      { name: "description", content: "Prototipo navegable del sistema Cloudster: agenda, pacientes, clínica, administración e inteligencia." },
      { property: "og:title", content: "Cloudster · Sistema" },
      { property: "og:description", content: "Prototipo navegable de la suite odontológica Cloudster." },
    ],
  }),
  component: () => (
    <CloudsterProvider>
      <AppShell>
        <Outlet />
      </AppShell>
    </CloudsterProvider>
  ),
});
