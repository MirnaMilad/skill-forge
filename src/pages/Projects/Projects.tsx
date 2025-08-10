import React, { type FC } from "react";
import SearchInput from "../../shared/SearchInput";
import ProjectList from "./components/ProjectList";

const Projects: FC = () => {
  return (
    <div>
      <SearchInput></SearchInput>
      <ProjectList></ProjectList>
    </div>
  );
};

export default Projects;
