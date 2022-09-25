import { Box } from "@chakra-ui/react";
import React from "react";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header";
import BlogList from "./Blog/BlogList";

export default function Main() {
  return (
    <Box>
      <Header />
      <BlogList />
      <Footer />
    </Box>
  );
}
