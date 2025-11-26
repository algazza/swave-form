import z from "zod";

export const FormSchema = z.object({
  name: z.string("This field is required"),
  number: z
    .string("This field is required")
    .regex(/^\+62\d+$/, { message: "Number begin with +62" }),
  classes: z.string("This field is required"),
  11: z.string().optional(),
  12: z.string().optional(),
  13: z.string().optional(),
  21: z.string().optional(),
  22: z.string().optional(),
  23: z.string().optional(),
  31: z.string().optional(),
  32: z.string().optional(),
  33: z.string().optional(),
  41: z.string().optional(),
  42: z.string().optional(),
  43: z.string().optional(),
  51: z.string().optional(),
  52: z.string().optional(),
  53: z.string().optional(),
});

export const ProductSchema = z.object({
  id: z.number(),
  name: z.string(),
  img: z.string(),
  stock: z.number(),
  entry: z.string(),
  qty: z.number()
});

export const VariantSchema = z.object({
  Pick: z.array(ProductSchema),
  Keychain: z.array(ProductSchema),
  Necklace: z.array(ProductSchema),
});

export type formType = z.infer<typeof FormSchema>;
export type productType = z.infer<typeof ProductSchema>;
export type variantType = z.infer<typeof VariantSchema>;
