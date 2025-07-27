import React, { type FC } from "react";
import { fields } from "./Profie.config";
import styles from "./Profile.module.css";
import Button from "../../shared/button/Button";

const Profile: FC = () => {
  return (
    <div>
      <h1>My Profile</h1>
      <form>
        {fields.map((field) => (
          <div className="mb-3">
            <label htmlFor={field.id} className="form-label">
              {field.label}
            </label>
            <input
              type={field.type}
              className="form-control"
              id={field.id}
              placeholder={field.placeholder}
            />
          </div>
        ))}
        <Button></Button>
      </form>
    </div>
  );
};

export default Profile;
