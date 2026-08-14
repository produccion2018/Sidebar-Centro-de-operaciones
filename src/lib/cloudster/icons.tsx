import {
  LayoutDashboard, CalendarRange, Users, ClipboardPlus, Grid2x2Check, Pill, ScanLine,
  BellRing, Mails, Stethoscope, Boxes, IdCard, FileSpreadsheet, Receipt, FileBarChart,
  ChartNoAxesCombined, Workflow, Sparkles, Building2, ShieldCheck, FolderOpen, Settings,
} from "lucide-react";
import type { ComponentType } from "react";

export const ICONS: Record<string, ComponentType<{ className?: string }>> = {
  LayoutDashboard, CalendarRange, Users, ClipboardPlus, Grid2x2Check, Pill, ScanLine,
  BellRing, Mails, Stethoscope, Boxes, IdCard, FileSpreadsheet, Receipt, FileBarChart,
  ChartNoAxesCombined, Workflow, Sparkles, Building2, ShieldCheck, FolderOpen, Settings,
};

export function ModuleIcon({ name, className }: { name: string; className?: string }) {
  const Cmp = ICONS[name] ?? LayoutDashboard;
  return <Cmp className={className} />;
}
