import React, { type FC } from "react";
import { ProjectFields } from "./Project.config";
import FormField from "../../../../shared/FormField/FormField";
import Button from "../../../../shared/Button";

const ProjectForm: FC = () => {
  return (
    <form>
      {ProjectFields.map((field) => (
        <FormField
          key={field.id}
          id={field.id}
          label={field.label}
          type={field.type}
          placeholder={field.placeholder}
        />
      ))}
      <Button></Button>
    </form>
  );
};

export default ProjectForm;
