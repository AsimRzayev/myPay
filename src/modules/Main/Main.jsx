import { Box } from "@chakra-ui/react";
import React from "react";

import Payment from "../Payment/Payment";
import Banner from "./Banner/Banner";
import BlogList from "./Blog/BlogList";

export default function Main() {
  return (
    <Box pb={6}>
      <Banner />
      <BlogList />
      <Payment />
    </Box>
  );
}
