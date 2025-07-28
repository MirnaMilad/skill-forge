import React, { type FC } from "react";
import SearchInput from "../../shared/SearchInput";
import ProjectList from "./components/ProjectLIst";
import Button from "../../shared/Button";

const Projects: FC = () => {
  return (
    <div>
      <SearchInput></SearchInput>
      <ProjectList></ProjectList>
    </div>
  );
};

export default Projects;
