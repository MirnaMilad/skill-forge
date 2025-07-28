import { type InputFieldProps } from "../../../Profile/profile.model";

export const ProjectFields: InputFieldProps[] = [
  {
    id: "title",
    label: "Project Title",
    placeholder: "Ex: ProjectHub",
    type: "text",
  },
  {
    id: "category",
    label: "Category",
    placeholder: "Ex: Software",
    type: "text",
  },
  {
    id: "deadline",
    label: "Deadline",
    placeholder: "Ex: August 15, 2025",
    type: "date",
  },
];
