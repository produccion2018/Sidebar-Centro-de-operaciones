/** Datos ficticios de demostración. Ningún dato real. */

export type PlanId = "inicial" | "profesional" | "avanzada" | "grupo";

export const PLANS: Record<
  PlanId,
  { id: PlanId; name: string; tagline: string; price: string; level: number; audience: string }
> = {
  inicial: { id: "inicial", name: "Clínica Inicial", tagline: "Odontólogo independiente", price: "$39", level: 1, audience: "Consultorio de 1 a 3 personas" },
  profesional: { id: "profesional", name: "Clínica Profesional", tagline: "Clínica en crecimiento", price: "$89", level: 2, audience: "Clínica con administración propia" },
  avanzada: { id: "avanzada", name: "Clínica Avanzada", tagline: "Clínica integral", price: "$179", level: 3, audience: "Clínica con múltiples consultorios" },
  grupo: { id: "grupo", name: "Grupo Odontológico", tagline: "Organización multi-sede", price: "$429", level: 4, audience: "Varias clínicas bajo una misma dirección" },
};

export const CLINICS = [
  { id: "centro", name: "Clínica Centro", city: "CABA · Microcentro", chairs: 8, staff: 24, patients: 3120, revenue: 18420000, expenses: 9200000, occupancy: 87, nps: 71 },
  { id: "norte", name: "Clínica Norte", city: "Vicente López", chairs: 5, staff: 15, patients: 1980, revenue: 11250000, expenses: 6400000, occupancy: 78, nps: 64 },
  { id: "palermo", name: "Clínica Palermo", city: "CABA · Palermo", chairs: 6, staff: 19, patients: 2410, revenue: 14980000, expenses: 7100000, occupancy: 91, nps: 76 },
  { id: "belgrano", name: "Clínica Belgrano", city: "CABA · Belgrano", chairs: 4, staff: 11, patients: 1340, revenue: 7860000, expenses: 4900000, occupancy: 69, nps: 58 },
];

export const DENTISTS = [
  { id: "d1", name: "Dra. Ana Martínez", specialty: "Ortodoncia", clinic: "centro", color: "var(--color-chart-1)", initials: "AM", productivity: 94 },
  { id: "d2", name: "Dr. Carlos López", specialty: "Implantología", clinic: "centro", color: "var(--color-chart-2)", initials: "CL", productivity: 88 },
  { id: "d3", name: "Dra. Sofía Gómez", specialty: "Endodoncia", clinic: "palermo", color: "var(--color-chart-3)", initials: "SG", productivity: 91 },
  { id: "d4", name: "Dr. Martín Ruiz", specialty: "Odontopediatría", clinic: "norte", color: "var(--color-chart-4)", initials: "MR", productivity: 82 },
  { id: "d5", name: "Dra. Lucía Ibarra", specialty: "Periodoncia", clinic: "belgrano", color: "var(--color-chart-5)", initials: "LI", productivity: 79 },
];

export type ApptStatus = "confirmado" | "pendiente" | "cancelado" | "reprogramado" | "ausente" | "atendido";

export const APPOINTMENTS = [
  { id: "t1", start: "08:00", end: "08:45", patient: "María González", patientId: "p1", dentist: "d1", room: "Consultorio 1", treatment: "Control de ortodoncia", status: "confirmado" as ApptStatus },
  { id: "t2", start: "08:45", end: "09:30", patient: "Carlos Rodríguez", patientId: "p2", dentist: "d2", room: "Consultorio 2", treatment: "Implante · fase 2", status: "confirmado" as ApptStatus },
  { id: "t3", start: "09:30", end: "10:15", patient: "Laura Fernández", patientId: "p3", dentist: "d1", room: "Consultorio 1", treatment: "Colocación de brackets", status: "pendiente" as ApptStatus },
  { id: "t4", start: "10:15", end: "11:00", patient: "Juan Pérez", patientId: "p4", dentist: "d3", room: "Consultorio 3", treatment: "Endodoncia pieza 26", status: "confirmado" as ApptStatus },
  { id: "t5", start: "11:00", end: "11:30", patient: "Valeria Sosa", patientId: "p5", dentist: "d2", room: "Consultorio 2", treatment: "Consulta de urgencia", status: "reprogramado" as ApptStatus },
  { id: "t6", start: "11:30", end: "12:15", patient: "Diego Álvarez", patientId: "p6", dentist: "d3", room: "Consultorio 3", treatment: "Limpieza + flúor", status: "ausente" as ApptStatus },
  { id: "t7", start: "13:00", end: "13:45", patient: "Paula Medina", patientId: "p7", dentist: "d1", room: "Consultorio 1", treatment: "Blanqueamiento", status: "confirmado" as ApptStatus },
  { id: "t8", start: "13:45", end: "14:30", patient: "Ricardo Núñez", patientId: "p8", dentist: "d2", room: "Consultorio 2", treatment: "Extracción cordal", status: "cancelado" as ApptStatus },
  { id: "t9", start: "14:30", end: "15:15", patient: "Florencia Díaz", patientId: "p9", dentist: "d3", room: "Consultorio 3", treatment: "Corona de porcelana", status: "confirmado" as ApptStatus },
  { id: "t10", start: "15:15", end: "16:00", patient: "Tomás Herrera", patientId: "p10", dentist: "d1", room: "Consultorio 1", treatment: "Control post-quirúrgico", status: "pendiente" as ApptStatus },
  { id: "t11", start: "16:00", end: "17:00", patient: "María González", patientId: "p1", dentist: "d2", room: "Consultorio 2", treatment: "Sobreturno · urgencia", status: "confirmado" as ApptStatus },
];

export const PATIENTS = [
  { id: "p1", name: "María González", dni: "32.541.998", phone: "+54 11 4455-2211", email: "maria.gonzalez@mail.com", age: 34, lastVisit: "12/07/2026", nextAppt: "14/08/2026 08:00", status: "En tratamiento", dentist: "d1", clinic: "centro", balance: 148000, insurance: "OSDE 310", risk: "Alérgica a penicilina" },
  { id: "p2", name: "Carlos Rodríguez", dni: "28.114.502", phone: "+54 11 6677-1120", email: "c.rodriguez@mail.com", age: 47, lastVisit: "02/08/2026", nextAppt: "14/08/2026 08:45", status: "En tratamiento", dentist: "d2", clinic: "centro", balance: 620000, insurance: "Swiss Medical", risk: "Hipertensión controlada" },
  { id: "p3", name: "Laura Fernández", dni: "35.902.771", phone: "+54 11 5533-8890", email: "laura.f@mail.com", age: 29, lastVisit: "28/06/2026", nextAppt: "14/08/2026 09:30", status: "Presupuesto pendiente", dentist: "d1", clinic: "palermo", balance: 0, insurance: "Particular", risk: "—" },
  { id: "p4", name: "Juan Pérez", dni: "20.445.113", phone: "+54 11 4012-7788", email: "jperez@mail.com", age: 58, lastVisit: "30/07/2026", nextAppt: "14/08/2026 10:15", status: "En tratamiento", dentist: "d3", clinic: "centro", balance: 92000, insurance: "Galeno", risk: "Diabetes tipo 2" },
  { id: "p5", name: "Valeria Sosa", dni: "38.221.640", phone: "+54 11 3344-9021", email: "vsosa@mail.com", age: 24, lastVisit: "10/08/2026", nextAppt: "—", status: "Alta", dentist: "d2", clinic: "norte", balance: 0, insurance: "Particular", risk: "—" },
  { id: "p6", name: "Diego Álvarez", dni: "31.008.442", phone: "+54 11 7788-3312", email: "d.alvarez@mail.com", age: 36, lastVisit: "05/05/2026", nextAppt: "21/08/2026 09:00", status: "Inactivo", dentist: "d3", clinic: "palermo", balance: 35000, insurance: "OSDE 210", risk: "—" },
  { id: "p7", name: "Paula Medina", dni: "40.117.223", phone: "+54 11 2299-4410", email: "paula.medina@mail.com", age: 21, lastVisit: "01/08/2026", nextAppt: "14/08/2026 13:00", status: "En tratamiento", dentist: "d1", clinic: "centro", balance: 210000, insurance: "Particular", risk: "—" },
  { id: "p8", name: "Ricardo Núñez", dni: "25.660.912", phone: "+54 11 4471-2280", email: "rnunez@mail.com", age: 51, lastVisit: "18/07/2026", nextAppt: "—", status: "Deuda vencida", dentist: "d2", clinic: "belgrano", balance: 480000, insurance: "Medifé", risk: "Anticoagulado" },
  { id: "p9", name: "Florencia Díaz", dni: "37.442.108", phone: "+54 11 6690-1123", email: "flor.diaz@mail.com", age: 27, lastVisit: "09/08/2026", nextAppt: "14/08/2026 14:30", status: "En tratamiento", dentist: "d3", clinic: "norte", balance: 74000, insurance: "OSDE 410", risk: "—" },
  { id: "p10", name: "Tomás Herrera", dni: "33.775.019", phone: "+54 11 5521-6674", email: "therrera@mail.com", age: 41, lastVisit: "07/08/2026", nextAppt: "14/08/2026 15:15", status: "Post-quirúrgico", dentist: "d1", clinic: "centro", balance: 0, insurance: "Swiss Medical", risk: "Bruxismo" },
];

export const REMINDERS = [
  { id: "r1", patient: "María González", channel: "WhatsApp", type: "Recordatorio 24h", status: "entregado", sentAt: "13/08 09:12", template: "Turno mañana", response: "Confirmó" },
  { id: "r2", patient: "Carlos Rodríguez", channel: "Email", type: "Confirmación de turno", status: "abierto", sentAt: "13/08 09:12", template: "Confirmación", response: "Confirmó" },
  { id: "r3", patient: "Laura Fernández", channel: "WhatsApp", type: "Recordatorio 24h", status: "enviado", sentAt: "13/08 09:13", template: "Turno mañana", response: "Sin respuesta" },
  { id: "r4", patient: "Diego Álvarez", channel: "SMS", type: "Ausencia", status: "fallido", sentAt: "12/08 18:40", template: "No asistió", response: "—" },
  { id: "r5", patient: "Ricardo Núñez", channel: "Email", type: "Deuda vencida", status: "pendiente", sentAt: "Programado 14/08 08:00", template: "Cobranza", response: "—" },
  { id: "r6", patient: "Florencia Díaz", channel: "WhatsApp", type: "Reprogramación", status: "entregado", sentAt: "12/08 15:02", template: "Reprogramar", response: "Aceptó nueva fecha" },
  { id: "r7", patient: "Paula Medina", channel: "WhatsApp", type: "Recordatorio 2h", status: "entregado", sentAt: "14/08 11:00", template: "Turno hoy", response: "Confirmó" },
  { id: "r8", patient: "Juan Pérez", channel: "Email", type: "Post-tratamiento", status: "abierto", sentAt: "11/08 10:20", template: "Cuidados", response: "—" },
];

export const INVENTORY = [
  { id: "i1", sku: "ANE-001", name: "Anestesia Lidocaína 2%", category: "Anestesia", stock: 24, min: 40, unit: "cajas", supplier: "DentalSur", batch: "L-2291", expiry: "11/2026", clinic: "centro", price: 18400 },
  { id: "i2", sku: "GUA-013", name: "Guantes nitrilo M", category: "Descartables", stock: 6, min: 25, unit: "cajas", supplier: "MediPack", batch: "L-8841", expiry: "03/2028", clinic: "centro", price: 9200 },
  { id: "i3", sku: "COM-220", name: "Composite A2 fotocurable", category: "Restauración", stock: 52, min: 20, unit: "jeringas", supplier: "OdontoLab", batch: "L-1140", expiry: "07/2027", clinic: "palermo", price: 31500 },
  { id: "i4", sku: "END-045", name: "Limas endodónticas K", category: "Endodoncia", stock: 0, min: 15, unit: "sets", supplier: "DentalSur", batch: "L-5520", expiry: "—", clinic: "norte", price: 47800 },
  { id: "i5", sku: "STE-007", name: "Bolsas de esterilización", category: "Bioseguridad", stock: 130, min: 60, unit: "unidades", supplier: "MediPack", batch: "L-3390", expiry: "01/2029", clinic: "centro", price: 4300 },
  { id: "i6", sku: "IMP-311", name: "Silicona de impresión", category: "Prótesis", stock: 11, min: 10, unit: "cartuchos", supplier: "OdontoLab", batch: "L-7702", expiry: "09/2026", clinic: "belgrano", price: 26900 },
  { id: "i7", sku: "BLA-090", name: "Gel blanqueador 35%", category: "Estética", stock: 8, min: 12, unit: "kits", supplier: "WhiteCo", batch: "L-4418", expiry: "10/2026", clinic: "palermo", price: 52000 },
  { id: "i8", sku: "RAD-002", name: "Placas radiográficas", category: "Diagnóstico", stock: 74, min: 30, unit: "cajas", supplier: "ImagenDent", batch: "L-6612", expiry: "05/2028", clinic: "norte", price: 15600 },
];

export const EMPLOYEES = [
  { id: "e1", name: "Dra. Ana Martínez", role: "Odontóloga", area: "Ortodoncia", clinic: "centro", status: "Activo", since: "03/2019", hours: "L-V 08:00-16:00", vacationDays: 7, attendance: 98, salary: 2450000, contract: "Monotributo", phone: "+54 11 4455-1100" },
  { id: "e2", name: "Dr. Carlos López", role: "Odontólogo", area: "Implantología", clinic: "centro", status: "Activo", since: "07/2020", hours: "L-V 09:00-18:00", vacationDays: 12, attendance: 95, salary: 2890000, contract: "Monotributo", phone: "+54 11 4455-1101" },
  { id: "e3", name: "Dra. Sofía Gómez", role: "Odontóloga", area: "Endodoncia", clinic: "palermo", status: "Licencia", since: "01/2021", hours: "L-J 10:00-19:00", vacationDays: 0, attendance: 88, salary: 2610000, contract: "Relación de dependencia", phone: "+54 11 4455-1102" },
  { id: "e4", name: "Rocío Benítez", role: "Asistente dental", area: "Clínica", clinic: "centro", status: "Activo", since: "05/2022", hours: "L-V 08:00-16:00", vacationDays: 14, attendance: 97, salary: 980000, contract: "Relación de dependencia", phone: "+54 11 4455-1103" },
  { id: "e5", name: "Julián Cabrera", role: "Asistente dental", area: "Clínica", clinic: "norte", status: "Activo", since: "09/2023", hours: "L-V 12:00-20:00", vacationDays: 21, attendance: 92, salary: 940000, contract: "Relación de dependencia", phone: "+54 11 4455-1104" },
  { id: "e6", name: "Mariana Costa", role: "Secretaria", area: "Recepción", clinic: "centro", status: "Activo", since: "02/2018", hours: "L-V 08:00-17:00", vacationDays: 5, attendance: 99, salary: 1120000, contract: "Relación de dependencia", phone: "+54 11 4455-1105" },
  { id: "e7", name: "Nadia Ferreyra", role: "Secretaria", area: "Recepción", clinic: "palermo", status: "Ausente hoy", since: "11/2022", hours: "L-V 10:00-19:00", vacationDays: 10, attendance: 90, salary: 1080000, contract: "Relación de dependencia", phone: "+54 11 4455-1106" },
  { id: "e8", name: "Esteban Rivas", role: "Administración", area: "Finanzas", clinic: "centro", status: "Activo", since: "06/2017", hours: "L-V 09:00-18:00", vacationDays: 3, attendance: 96, salary: 1780000, contract: "Relación de dependencia", phone: "+54 11 4455-1107" },
];

export const INVOICES = [
  { id: "F-0001-00184", patient: "Carlos Rodríguez", date: "12/08/2026", due: "26/08/2026", total: 620000, paid: 0, status: "pendiente", method: "Transferencia", clinic: "centro" },
  { id: "F-0001-00183", patient: "María González", date: "11/08/2026", due: "25/08/2026", total: 148000, paid: 148000, status: "pagada", method: "Tarjeta débito", clinic: "centro" },
  { id: "F-0001-00182", patient: "Ricardo Núñez", date: "02/07/2026", due: "16/07/2026", total: 480000, paid: 120000, status: "vencida", method: "Efectivo", clinic: "belgrano" },
  { id: "F-0001-00181", patient: "Paula Medina", date: "09/08/2026", due: "23/08/2026", total: 210000, paid: 105000, status: "parcial", method: "Mercado Pago", clinic: "centro" },
  { id: "F-0001-00180", patient: "Florencia Díaz", date: "08/08/2026", due: "22/08/2026", total: 74000, paid: 74000, status: "pagada", method: "Tarjeta crédito", clinic: "norte" },
  { id: "F-0001-00179", patient: "Juan Pérez", date: "30/07/2026", due: "13/08/2026", total: 92000, paid: 0, status: "vencida", method: "Transferencia", clinic: "centro" },
];

export const BUDGETS = [
  { id: "PR-2026-0142", patient: "Laura Fernández", date: "28/07/2026", expires: "28/08/2026", total: 1840000, status: "enviado", items: 5, dentist: "d1" },
  { id: "PR-2026-0141", patient: "Carlos Rodríguez", date: "20/07/2026", expires: "20/08/2026", total: 3120000, status: "aprobado", items: 8, dentist: "d2" },
  { id: "PR-2026-0140", patient: "Diego Álvarez", date: "02/06/2026", expires: "02/07/2026", total: 640000, status: "vencido", items: 3, dentist: "d3" },
  { id: "PR-2026-0139", patient: "Paula Medina", date: "01/08/2026", expires: "01/09/2026", total: 420000, status: "borrador", items: 2, dentist: "d1" },
  { id: "PR-2026-0138", patient: "Ricardo Núñez", date: "15/07/2026", expires: "15/08/2026", total: 980000, status: "rechazado", items: 4, dentist: "d2" },
  { id: "PR-2026-0137", patient: "Tomás Herrera", date: "10/08/2026", expires: "10/09/2026", total: 1275000, status: "pendiente", items: 6, dentist: "d1" },
];

export const BUDGET_ITEMS = [
  { code: "D-201", tooth: "16", treatment: "Corona de porcelana", qty: 1, unit: 620000, discount: 0 },
  { code: "D-118", tooth: "26", treatment: "Endodoncia multirradicular", qty: 1, unit: 480000, discount: 10 },
  { code: "D-045", tooth: "36, 37", treatment: "Restauración composite", qty: 2, unit: 145000, discount: 0 },
  { code: "D-310", tooth: "—", treatment: "Limpieza y profilaxis", qty: 1, unit: 95000, discount: 0 },
  { code: "D-402", tooth: "11, 21", treatment: "Carilla estética", qty: 2, unit: 390000, discount: 15 },
];

export const REVENUE_SERIES = [
  { month: "Mar", ingresos: 9800000, gastos: 5400000, pacientes: 380 },
  { month: "Abr", ingresos: 10450000, gastos: 5600000, pacientes: 412 },
  { month: "May", ingresos: 11200000, gastos: 5900000, pacientes: 445 },
  { month: "Jun", ingresos: 12750000, gastos: 6100000, pacientes: 468 },
  { month: "Jul", ingresos: 13980000, gastos: 6450000, pacientes: 501 },
  { month: "Ago", ingresos: 15320000, gastos: 6720000, pacientes: 534 },
];

export const TREATMENT_MIX = [
  { name: "Ortodoncia", value: 32 },
  { name: "Implantes", value: 24 },
  { name: "Endodoncia", value: 18 },
  { name: "Estética", value: 15 },
  { name: "Preventiva", value: 11 },
];

export const ACTIVITY = [
  { time: "09:42", user: "Mariana Costa", action: "Confirmó el turno de María González", type: "agenda" },
  { time: "09:31", user: "Dra. Ana Martínez", action: "Actualizó la historia clínica de Paula Medina", type: "clinico" },
  { time: "09:18", user: "Automatización", action: "Envió 34 recordatorios de turno por WhatsApp", type: "auto" },
  { time: "08:55", user: "Esteban Rivas", action: "Emitió la factura F-0001-00184", type: "admin" },
  { time: "08:40", user: "Sistema", action: "Alerta de stock crítico: Guantes nitrilo M", type: "alerta" },
  { time: "08:12", user: "Dr. Carlos López", action: "Aprobó el presupuesto PR-2026-0141", type: "admin" },
];

export const TOOTH_STATES: Record<string, { state: string; note: string }> = {
  "16": { state: "corona", note: "Corona de porcelana · 03/2025" },
  "26": { state: "endodoncia", note: "Tratamiento de conducto en curso" },
  "36": { state: "caries", note: "Caries oclusal profunda" },
  "37": { state: "restaurado", note: "Composite A2 · 11/2025" },
  "11": { state: "carilla", note: "Carilla estética planificada" },
  "21": { state: "carilla", note: "Carilla estética planificada" },
  "46": { state: "ausente", note: "Extraída 2021 · candidata a implante" },
  "48": { state: "extraccion", note: "Indicación de extracción" },
};

export const STUDIES = [
  { id: "s1", patient: "María González", type: "Radiografía panorámica", date: "12/07/2026", size: "4.2 MB", tag: "RX", status: "Informado" },
  { id: "s2", patient: "Carlos Rodríguez", type: "Tomografía CBCT", date: "02/08/2026", size: "138 MB", tag: "3D", status: "Informado" },
  { id: "s3", patient: "Juan Pérez", type: "Periapical pieza 26", date: "30/07/2026", size: "1.1 MB", tag: "RX", status: "Pendiente" },
  { id: "s4", patient: "Paula Medina", type: "Fotografía intraoral", date: "01/08/2026", size: "2.8 MB", tag: "FOTO", status: "Informado" },
  { id: "s5", patient: "Tomás Herrera", type: "Escaneo intraoral 3D", date: "07/08/2026", size: "96 MB", tag: "3D", status: "Procesando" },
  { id: "s6", patient: "Florencia Díaz", type: "Laboratorio · hemograma", date: "09/08/2026", size: "220 KB", tag: "LAB", status: "Informado" },
];

export const currency = (n: number) =>
  new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS", maximumFractionDigits: 0 }).format(n);

export const compact = (n: number) =>
  new Intl.NumberFormat("es-AR", { notation: "compact", maximumFractionDigits: 1 }).format(n);
