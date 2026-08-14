import type { PlanId } from "./mock";

export type ModuleId =
  | "dashboard" | "agenda" | "pacientes" | "historia" | "odontograma" | "recetas"
  | "recordatorios" | "comunicaciones" | "equipo" | "presupuestos" | "facturacion"
  | "reportes" | "estadisticas" | "estudios" | "inventario" | "rrhh"
  | "automatizaciones" | "ia" | "seguridad" | "documentacion" | "grupo" | "configuracion";

export type BgKey = "clinical" | "agenda" | "people" | "inventory" | "finance" | "tech" | "imaging";

export interface ModuleDef {
  id: ModuleId;
  label: string;
  path: string;
  icon: string;
  minPlan: PlanId;
  group: "Clínico" | "Operación" | "Administración" | "Inteligencia" | "Organización" | "Sistema";
  bg: BgKey;
  description: string;
  core?: boolean; // no se puede desactivar
}

export const PLAN_ORDER: PlanId[] = ["inicial", "profesional", "avanzada", "grupo"];
export const planLevel = (p: PlanId) => PLAN_ORDER.indexOf(p) + 1;

export const MODULES: ModuleDef[] = [
  { id: "dashboard", label: "Dashboard", path: "/app", icon: "LayoutDashboard", minPlan: "inicial", group: "Clínico", bg: "clinical", description: "Centro de operaciones diario de la clínica.", core: true },
  { id: "agenda", label: "Agenda y turnos", path: "/app/agenda", icon: "CalendarRange", minPlan: "inicial", group: "Clínico", bg: "agenda", description: "Planificación por odontólogo, consultorio y sede.", core: true },
  { id: "pacientes", label: "Pacientes", path: "/app/pacientes", icon: "Users", minPlan: "inicial", group: "Clínico", bg: "clinical", description: "Padrón, búsqueda avanzada y ficha integral.", core: true },
  { id: "historia", label: "Historia clínica", path: "/app/historia", icon: "ClipboardPlus", minPlan: "inicial", group: "Clínico", bg: "clinical", description: "Evolución, diagnóstico, antecedentes y firma digital." },
  { id: "odontograma", label: "Odontograma y 3D", path: "/app/odontograma", icon: "Grid2x2Check", minPlan: "inicial", group: "Clínico", bg: "imaging", description: "Mapa dental interactivo y modelo 3D conceptual." },
  { id: "recetas", label: "Recetas", path: "/app/recetas", icon: "Pill", minPlan: "profesional", group: "Clínico", bg: "clinical", description: "Prescripción digital con vista previa imprimible." },
  { id: "estudios", label: "Estudios y diagnóstico", path: "/app/estudios", icon: "ScanLine", minPlan: "avanzada", group: "Clínico", bg: "imaging", description: "Radiografías, tomografías, fotos clínicas y comparador." },

  { id: "recordatorios", label: "Recordatorios", path: "/app/recordatorios", icon: "BellRing", minPlan: "inicial", group: "Operación", bg: "tech", description: "Confirmaciones, ausencias y mensajería automática." },
  { id: "comunicaciones", label: "Comunicaciones", path: "/app/comunicaciones", icon: "Mails", minPlan: "profesional", group: "Operación", bg: "tech", description: "Plantillas, campañas y métricas de envío." },
  { id: "equipo", label: "Equipo profesional", path: "/app/equipo", icon: "Stethoscope", minPlan: "profesional", group: "Operación", bg: "people", description: "Odontólogos, asistentes y secretarias con agenda y comisiones." },
  { id: "inventario", label: "Inventario e insumos", path: "/app/inventario", icon: "Boxes", minPlan: "avanzada", group: "Operación", bg: "inventory", description: "Stock, lotes, vencimientos, movimientos y proveedores." },
  { id: "rrhh", label: "Recursos Humanos", path: "/app/rrhh", icon: "IdCard", minPlan: "avanzada", group: "Operación", bg: "people", description: "Legajos, asistencia, licencias, contratos y desempeño." },

  { id: "presupuestos", label: "Presupuestos", path: "/app/presupuestos", icon: "FileSpreadsheet", minPlan: "profesional", group: "Administración", bg: "finance", description: "Planes de tratamiento valorizados y seguimiento de conversión." },
  { id: "facturacion", label: "Facturación", path: "/app/facturacion", icon: "Receipt", minPlan: "profesional", group: "Administración", bg: "finance", description: "Facturas, cobros, deuda, ingresos y gastos." },
  { id: "reportes", label: "Reportes", path: "/app/reportes", icon: "FileBarChart", minPlan: "profesional", group: "Administración", bg: "finance", description: "Centro de reportes con filtros y exportación." },

  { id: "estadisticas", label: "Estadísticas y BI", path: "/app/estadisticas", icon: "ChartNoAxesCombined", minPlan: "profesional", group: "Inteligencia", bg: "tech", description: "KPIs, tendencias y tablero estilo Business Intelligence." },
  { id: "automatizaciones", label: "Automatizaciones", path: "/app/automatizaciones", icon: "Workflow", minPlan: "avanzada", group: "Inteligencia", bg: "tech", description: "Flujos visuales trigger → condición → acción." },
  { id: "ia", label: "Cloudster IA", path: "/app/ia", icon: "Sparkles", minPlan: "avanzada", group: "Inteligencia", bg: "tech", description: "Asistente que analiza, resume y sugiere acciones." },

  { id: "grupo", label: "Grupo odontológico", path: "/app/grupo", icon: "Building2", minPlan: "grupo", group: "Organización", bg: "clinical", description: "Consolidado multi-clínica y comparación entre sedes.", core: true },

  { id: "seguridad", label: "Seguridad y auditoría", path: "/app/seguridad", icon: "ShieldCheck", minPlan: "avanzada", group: "Sistema", bg: "tech", description: "Roles, permisos, sesiones y trazabilidad." },
  { id: "documentacion", label: "Documentos", path: "/app/documentacion", icon: "FolderOpen", minPlan: "avanzada", group: "Sistema", bg: "finance", description: "Consentimientos, plantillas y archivos exportables." },
  { id: "configuracion", label: "Configuración", path: "/app/configuracion", icon: "Settings", minPlan: "inicial", group: "Sistema", bg: "clinical", description: "Perfil, apariencia, módulos, integraciones y más.", core: true },
];

export const MODULE_BY_ID = Object.fromEntries(MODULES.map((m) => [m.id, m])) as Record<ModuleId, ModuleDef>;

export const availableIn = (m: ModuleDef, plan: PlanId) => planLevel(plan) >= planLevel(m.minPlan);

export const PLAN_HIGHLIGHTS: Record<PlanId, string[]> = {
  inicial: ["Dashboard operativo", "Agenda y turnos", "Pacientes e historia clínica", "Odontograma", "Recordatorios automáticos", "Configuración"],
  profesional: ["Todo Clínica Inicial", "Presupuestos", "Facturación y cobros", "Reportes automatizados", "Estadísticas", "Equipo profesional", "Comunicaciones y plantillas", "Recetas"],
  avanzada: ["Todo Clínica Profesional", "Inventario e insumos", "Recursos Humanos", "Estudios y diagnóstico por imagen", "Automatizaciones", "Cloudster IA", "Seguridad y auditoría", "Documentos"],
  grupo: ["Todo Clínica Avanzada", "Multi-clínica y multi-sede", "Dashboard corporativo", "Facturación consolidada", "Comparativa entre sedes", "RRHH global", "IA corporativa", "Automatizaciones globales", "Integraciones"],
};
