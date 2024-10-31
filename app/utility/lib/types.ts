import { z } from "zod";

export const GuestSchema = z.object({
  first_name: z.string().trim().min(1, {message: "Campo obbligatorio"}),
  last_name: z.string().trim().min(1, {message: "Campo obbligatorio"}),
  children_0_3: z.number({message: "Campo obbligatorio", required_error: "Campo obbligatorio"}).nonnegative({message: "Inserire un numero positivo"}),
  children_3_9: z.number({message: "Campo obbligatorio", required_error: "Campo obbligatorio"}).nonnegative({message: "Inserire un numero positivo"}),
  children_9: z.number({message: "Campo obbligatorio", required_error: "Campo obbligatorio"}).nonnegative({message: "Inserire un numero positivo"}),
  is_present: z.boolean({message: "Campo obbligatorio", required_error: "Campo obbligatorio"}),
  allergies: z.string(),
  notes: z.string(),
});

export type Guest = z.infer<typeof GuestSchema>;

export const UserSchema = z.object({
  username: z.string().trim().min(1, {message: "Campo obbligatorio"}),
  password: z.string().trim().min(1, {message: "Campo obbligatorio"}),
});

export type User = z.infer<typeof UserSchema>;

export type UserAuth = {
  name: string;
  token: string;
};