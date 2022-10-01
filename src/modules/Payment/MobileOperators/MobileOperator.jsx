import { Flex } from "@chakra-ui/react";
import React from "react";

import MobilePage from "./MobilePage";

export default function MobileOperator() {
  return (
    <Flex
      w="100%"
      h="970px"
      color="#444"
      bg="#999"
      bottom="0"
      position="relative"
      px="96px"
    >
      <MobilePage />
    </Flex>
  );
}
