import { type FC } from "react";
import Logo from "../../../assets/images/layout/logo.png";
import { Outlet, useLocation } from "react-router-dom";
import { AuthRouteTitles } from "./AuthLayout.config";

const AuthLayout: FC = () => {
  const location = useLocation();
  const pageTitle: string =
    AuthRouteTitles[location.pathname.replace("/auth", "")];
  return (
    <div className="row w-100 h-100 justify-content-center align-items-center">
      <div className="col-md-9 col-11 d-flex h-75">
        <div className="card bg-light w-100 d-flex align-items-center p-4 shadow-lg">
          <img src={Logo} width="400" />
          <h1 className="my-5">{pageTitle}</h1>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
