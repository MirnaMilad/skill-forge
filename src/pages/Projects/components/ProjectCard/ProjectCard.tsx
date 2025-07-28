import React, { type FC } from "react";

const ProjectCard: FC = () => {
  return (
    <div className="card mb-3 w-100 p-3 shadow-sm">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h3 className="card-title fw-bold">Project Title</h3>

          <p className="text-muted">
            Category: <strong>E-commerce</strong>
          </p>
        </div>
        <i className="bi bi-pencil-fill"></i>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <p className="text-muted">
          Deadline: <strong>August 15, 2025</strong>
        </p>
        <p>$2000</p>
      </div>
    </div>
  );
};

export default ProjectCard;
