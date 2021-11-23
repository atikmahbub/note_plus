import { Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <Stack
      height="100vh"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </Stack>
  );
};

export default NoMatch;
