import React, { type FC } from "react";
import Button from "../Button";

const SearchInput: FC = () => {
  return (
    <form className="d-flex mb-4" role="search">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <Button></Button>
    </form>
  );
};

export default SearchInput;
