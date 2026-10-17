import { z } from "zod";

const taskSchema = z.object({
  titulo: z.string().min(3, "El título debe tener al menos 3 caracteres"),
  prioridad: z.enum(["baja", "media", "alta"]),
});

export function validarTarea(datosCrudos: unknown) {
  return taskSchema.safeParse(datosCrudos);
}