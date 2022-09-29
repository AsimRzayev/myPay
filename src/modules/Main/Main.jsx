import { Box } from "@chakra-ui/react";
import React from "react";

import BlogList from "./Blog/BlogList";

export default function Main() {
  return (
    <Box py={6}>
      <BlogList />
    </Box>
  );
}
