import React, { type FC } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { routeTitles } from "./ContentLayout.config";
import Button from "../../../shared/Button";

const ContentLayout: FC = () => {
  const location = useLocation();
  const pageTitle: string = routeTitles[location.pathname].title;
  const action = routeTitles[location.pathname].action;
  const navigate = useNavigate();
  return (
    <div className="container-fluid h-100">
      <div className="row h-100">
        <div className="col-3 h-100">
          <div className="h-25">
            <Header />
          </div>
          <div className="h-75">
            <Sidebar />
          </div>
        </div>
        <div className="col-9 bg-light h-100 shadow-lg">
          <div className="container d-flex flex-column">
            <div className="py-3 border-bottom d-flex justify-content-between align-items-center">
              <h1 className="mb-0">{pageTitle}</h1>

              {action?.to && (
                <Button onClick={() => navigate(action?.to ?? "/")}>
                  {action?.buttonLabel}
                </Button>
              )}
            </div>
            <div className="flex-grow-1 overflow-auto py-3">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentLayout;
