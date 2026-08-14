import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { MODULES, availableIn, type ModuleId } from "./modules";
import type { PlanId } from "./mock";

export type ThemeId = "violeta" | "azul" | "verde" | "ambar" | "cian" | "grafito";
export type RoleId = "super" | "grupo" | "clinica" | "odontologo" | "asistente" | "secretaria";

export const THEMES: { id: ThemeId; label: string; swatch: string }[] = [
  { id: "violeta", label: "Violeta (marca)", swatch: "oklch(0.52 0.19 295)" },
  { id: "azul", label: "Azul clínico", swatch: "oklch(0.53 0.15 245)" },
  { id: "verde", label: "Verde salud", swatch: "oklch(0.52 0.12 165)" },
  { id: "cian", label: "Cian estéril", swatch: "oklch(0.55 0.12 205)" },
  { id: "ambar", label: "Ámbar cálido", swatch: "oklch(0.62 0.14 65)" },
  { id: "grafito", label: "Grafito", swatch: "oklch(0.34 0.015 285)" },
];

export const ROLES: { id: RoleId; label: string; scope: string }[] = [
  { id: "super", label: "Super admin", scope: "Plataforma Cloudster" },
  { id: "grupo", label: "Administrador del grupo", scope: "Todas las clínicas" },
  { id: "clinica", label: "Administrador de clínica", scope: "Una clínica" },
  { id: "odontologo", label: "Odontólogo", scope: "Sus pacientes y agenda" },
  { id: "asistente", label: "Asistente", scope: "Apoyo clínico" },
  { id: "secretaria", label: "Secretaria", scope: "Agenda, pacientes y cobros" },
];

interface State {
  plan: PlanId;
  setPlan: (p: PlanId) => void;
  clinic: string; // "all" | clinicId
  setClinic: (c: string) => void;
  theme: ThemeId;
  setTheme: (t: ThemeId) => void;
  role: RoleId;
  setRole: (r: RoleId) => void;
  disabled: ModuleId[];
  toggleModule: (id: ModuleId) => void;
  isActive: (id: ModuleId) => boolean;
}

const Ctx = createContext<State | null>(null);
const KEY = "cloudster.prefs";

export function CloudsterProvider({ children }: { children: ReactNode }) {
  const [plan, setPlan] = useState<PlanId>("avanzada");
  const [clinic, setClinic] = useState("centro");
  const [theme, setTheme] = useState<ThemeId>("violeta");
  const [role, setRole] = useState<RoleId>("clinica");
  const [disabled, setDisabled] = useState<ModuleId[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const p = JSON.parse(raw);
        if (p.plan) setPlan(p.plan);
        if (p.clinic) setClinic(p.clinic);
        if (p.theme) setTheme(p.theme);
        if (p.role) setRole(p.role);
        if (Array.isArray(p.disabled)) setDisabled(p.disabled);
      }
    } catch {
      /* prototipo sin backend */
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem(KEY, JSON.stringify({ plan, clinic, theme, role, disabled }));
    } catch {
      /* noop */
    }
  }, [plan, clinic, theme, role, disabled]);

  const toggleModule = useCallback((id: ModuleId) => {
    setDisabled((d) => (d.includes(id) ? d.filter((x) => x !== id) : [...d, id]));
  }, []);

  const isActive = useCallback(
    (id: ModuleId) => {
      const m = MODULES.find((x) => x.id === id);
      if (!m) return false;
      return availableIn(m, plan) && !disabled.includes(id);
    },
    [plan, disabled],
  );

  const setPlanSafe = useCallback((p: PlanId) => {
    setPlan(p);
    if (p !== "grupo") setClinic("centro");
    setRole(p === "grupo" ? "grupo" : "clinica");
  }, []);

  const value = useMemo<State>(
    () => ({ plan, setPlan: setPlanSafe, clinic, setClinic, theme, setTheme, role, setRole, disabled, toggleModule, isActive }),
    [plan, setPlanSafe, clinic, theme, role, disabled, toggleModule, isActive],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useCloudster() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useCloudster debe usarse dentro de CloudsterProvider");
  return ctx;
}
