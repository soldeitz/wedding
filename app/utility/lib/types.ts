import { z } from "zod";

export const GuestSchema = z.object({
  first_name: z.string().trim().min(1, {message: "Campo obbligatorio"}),
  last_name: z.string().trim().min(1, {message: "Campo obbligatorio"}),
  children: z.number({message: "Campo obbligatorio", required_error: "Campo obbligatorio"}).nonnegative({message: "Inserire un numero positivo"}),
  is_present: z.boolean({message: "Campo obbligatorio", required_error: "Campo obbligatorio"}),
  allergies: z.string(),
  notes: z.string(),
});

export type Guest = z.infer<typeof GuestSchema>;