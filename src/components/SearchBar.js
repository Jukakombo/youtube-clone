import React from "react";
import { IconButton, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
const SearchBar = () => {
  return (
    <Paper
      components="form"
      onSubmit={() => {}}
      sx={{
        borderRadius: 20,

        border: "1px solid #e3e3e3",
        pl: 2,
        mr: { sm: 5 },
        boxShadow: "none",
      }}
    >
      <input
        placeholder="Search ..."
        onChange={() => {}}
        value=""
        className="search-bar"
      />
      <IconButton type="submit" sx={{ color: "red", p:"10px" }}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
