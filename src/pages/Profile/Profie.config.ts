import { type InputFieldProps } from "./profile.model";

export const fields: InputFieldProps[] = [
  {
    id: "name",
    label: "Full Name",
    placeholder: "Ex: Mirna Milad",
    type: "text",
  },
  { id: "skills", label: "Skills", placeholder: "Ex: Software", type: "text" },
  {
    id: "experience",
    label: "Experience",
    placeholder: "Ex: Engineering",
    type: "text",
  },
];
