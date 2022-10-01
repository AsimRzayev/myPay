import { Box } from "@chakra-ui/react";
import React from "react";

import Payment from "../Payment/Payment";
import BlogList from "./Blog/BlogList";

export default function Main() {
  return (
    <Box py={6}>
      <BlogList />
      <Payment />
    </Box>
  );
}
