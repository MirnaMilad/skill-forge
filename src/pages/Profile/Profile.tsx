import React, { type FC } from "react";
import { fields } from "./Profie.config";
import Button from "../../shared/Button";
import FormField from "../../shared/FormField/FormField";

const Profile: FC = () => {
  return (
    <div>
      <div>
        <form>
          {fields.map((field) => (
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
      </div>
    </div>
  );
};

export default Profile;
