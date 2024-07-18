"use server";

import { z } from "zod";

const schema = z.object({
  email: z.string().email().min(5),
});

export async function validateEmail(prevState: any, formData: FormData) {
  console.log(formData.get("email"));
  if (formData.get("email") === "") {
    return {
      validationMessage: "Oops. Please Enter Your Email",
      emailValidated: false,
    };
  } else {
    const validateEmail = schema.safeParse({
      email: formData.get("email"),
    });

    if (!validateEmail.success) {
      return {
        validationMessage: "Oops, Please Check Your Email",
        emailValidated: false,
      };
    } else {
      return {
        validationMessage: "Thank You For Your Access Request!",
        emailValidated: true,
      };
    }
  }
}
