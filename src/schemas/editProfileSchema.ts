import { z } from "zod";

export const editProfileSchema = z.object({
  first_name: z.string().optional(),
  last_name: z.string().optional(),
  national_code: z
    .string()
    .length(10, "کد ملی باید ۱۰ رقم باشد")
    .regex(/^\d+$/, "کد ملی فقط باید شامل ارقام باشد")
    .optional(),
  email: z.string().email("ایمیل معتبر وارد کنید").optional(),
});

export type EditProfileFormValues = z.infer<typeof editProfileSchema>;
