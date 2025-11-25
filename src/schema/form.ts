import z from "zod";

export const FormSchema = z.object({
  name: z.string("This field is required"),
  number: z.string("This field is required").regex(/^\+62\d+$/, {
    message: "Number begin with +62",
  }),
  classes: z.string('This field is required'),
  product: z.string(),
  pick: z.number(),
  keychain: z.number(),
  necklace: z.number(),
});

export type formType = z.infer<typeof FormSchema>