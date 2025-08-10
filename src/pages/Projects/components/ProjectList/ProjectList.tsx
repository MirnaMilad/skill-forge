import React, { type FC } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";

const ProjectList: FC = () => {
  return (
    <div>
      {Array.from({ length: 3 }).map((_, index) => (
        <ProjectCard key={index} />
      ))}
    </div>
  );
};

export default ProjectList;
