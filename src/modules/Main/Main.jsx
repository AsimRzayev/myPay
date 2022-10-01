import { Box } from "@chakra-ui/react";
import React from "react";


import Banner from "../../components/Banner/Banner";
import Payment from "../Payment/Payment";
import BlogList from "./Blog/BlogList";

export default function Main() {
  return (
    <Box py={6}>
      <Banner desc="Repellat deserunt eos vero est necessitatibus quia. Repellendus voluptatem reprehenderit maiores et. Velit vero accusantium quaerat tempore animi porro."></Banner>
      <BlogList />
      <Payment />
    </Box>
  );
}
