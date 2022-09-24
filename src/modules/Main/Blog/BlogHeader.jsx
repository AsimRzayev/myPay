import { Flex } from "@chakra-ui/react";
import React from "react";

import ReadMore from "../../../components/ReadMore";
import SectionHeading from "../../../components/SectionHeading";

export default function BlogHeader() {
  return (
    <Flex justifyContent={"space-between"} height="56px" alignItems={"end"}>
      <SectionHeading />
      <ReadMore />
    </Flex>
  );
}
