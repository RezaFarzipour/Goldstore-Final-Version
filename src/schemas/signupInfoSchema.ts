import { z } from "zod";

export const signupSchema = z.object({
  first_name: z.string().min(1, "وارد کردن نام اجباری است"),
  last_name: z.string().min(1, "وارد کردن نام خانوادگی اجباری است"),
  national_code: z
    .string()
    .length(10, "کد ملی باید ۱۰ رقم باشد")
    .regex(/^\d+$/, "کد ملی فقط باید شامل ارقام باشد"),
  email: z.string().email("ایمیل معتبر وارد کنید"),
});

export type SignupFormValues = z.infer<typeof signupSchema>;
