import { z } from "zod";

const productsValidationSchema = z.object({
  body: z.object({
    image: z.string({ message: "Image URL is required" }),
    title: z.string({ message: "Title is required" }),
    brand: z.string({ message: "Brand is required" }),
    availableQuantity: z.number().int().nonnegative({
      message: "Available quantity must be a non-negative integer",
    }),
    price: z
      .number()
      .nonnegative({ message: "Price must be a non-negative number" }),
    rating: z
      .number()
      .min(0, { message: "Rating must be at least 0" })
      .max(5, { message: "Rating must be at most 5" }),
    description: z.string({ message: "Description is required" }),
  }),
});

export const validationSchema = {
  productsValidationSchema,
};
