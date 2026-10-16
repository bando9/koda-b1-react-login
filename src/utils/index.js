import * as yup from "yup";

export const registerSchema = yup.object({
  name: yup
    .string()
    .matches(/^[^0-9]*$/, "Input tidak boleh mengandung angka")
    .required(),
  email: yup.string().email().required("Masukkan email"),
  password: yup.string().required().min(8, "Password minimal 8 karakter"),
});
