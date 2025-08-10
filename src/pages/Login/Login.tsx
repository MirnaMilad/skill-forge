import { type FC } from "react";
import Button from "../../shared/Button";
import { fields } from "./login.config";
import FormField from "../../shared/FormField/FormField";
import { Link } from "react-router-dom";

const Login: FC = () => {
  return (
    <form className="w-100">
      {fields.map((field) => (
        <FormField
          key={field.id}
          id={field.id}
          label={field.label}
          type={field.type}
        />
      ))}
      <Button className="btn bg-primary text-white fw-bold w-100 mt-5">
        Login
      </Button>
      <p className="text-center my-4">
        Don’t have an account?{" "}
        <Link to="/auth/register" className="text-decoration-none">
          Sign Up
        </Link>
      </p>
    </form>
  );
};

export default Login;
