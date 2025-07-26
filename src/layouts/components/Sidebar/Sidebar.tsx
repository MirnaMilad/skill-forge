import React, { type FC } from "react";
import profile from "../../../assets/images/layout/profile.png";
import { links } from "./links.config";
import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";

const Sidebar: FC = () => {
  return (
    <>
      <aside className="container h-100 d-flex flex-column justify-content-between">
        <nav>
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `nav-link py-3 px-3 rounded ${isActive ? styles.activeLink : ""}`
              }
            >
              <h5 className="mb-0">{label}</h5>
            </NavLink>
          ))}
        </nav>
        <div className="d-flex flex-column align-items-center">
          <img src={profile} width="100" height="100" />
          <h4>Mirna</h4>
          <hr className="w-75" />
          <h5>Edit Profile</h5>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
