import { type InputFieldProps } from "../../shared/models/InputFieldProps.model";

export const fields: InputFieldProps[] = [
  {
    id: "email",
    label: "Email Address",
    type: "email",
  },
  { id: "password", label: "Password", type: "password" },
];
