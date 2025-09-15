import { IAuthFormData } from "@/types/auth.interface";
import Field from "@/component/ui/field/Field";
import { validateEmail } from "./email.regex";
import { Control } from "react-hook-form";
import { FC } from "react";

interface IAuthFields {
  control: Control<IAuthFormData>;
}

const AuthFields: FC<IAuthFields> = ({ control }) => {
  return (
    <>
      <Field<IAuthFormData>
        placeholder="Enter email"
        name="email"
        control={control}
        rules={{
          required: "Email is required",
          pattern: {
            value: validateEmail,
            message: "Please enter a valid email address",
          },
        }}
        keyboardType="email-address"
      />

      <Field<IAuthFormData>
        placeholder="Enter password"
        name="password"
        control={control}
        secureTextEntry
        rules={{
          required: "Password is required",
          minLength: {
            value: 6,
            message: "Password should be minimun 6 characters",
          },
        }}
      />
    </>
  );
};

export default AuthFields;
