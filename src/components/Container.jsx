import { Box } from "@chakra-ui/react";
import React from "react";

export default function PageContainer(props) {
  return (
    <Box
      width={{ base: "100%", md: "80%" }}
      px={{ base: 2, md: 0 }}
      mx="auto"
      {...props}
    >
      {props.children}
    </Box>
  );
}
