import { Flex, Img } from "@chakra-ui/react";
import React from "react";

import bgImage from "../../../assets/blogImages/Group 9581.png";
import PaymentInfoCards from "./PaymentInfoCards/PaymentInfoCards";

export default function PaymentInfo() {
  return (
    <Flex
      w="full"
      h="284px"
      flex="none"
      order="1"
      alignItems="center"
      justifyContent="center"
      py={6}
    >
      <Img src={bgImage} width="full" />
      <PaymentInfoCards />
    </Flex>
  );
}
