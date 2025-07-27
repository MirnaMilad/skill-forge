import React, { type FC } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { Outlet } from "react-router-dom";

const ContentLayout: FC = () => {
  return (
    <div className="container-fluid h-100">
      <Header />
      <div className="row h-75">
        <div className="col-3">
          <Sidebar />
        </div>
        <div className="col-9 bg-light">
          <div className="container py-3 h-100">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentLayout;
