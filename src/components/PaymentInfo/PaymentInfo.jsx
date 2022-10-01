import { Flex, Img } from "@chakra-ui/react";
import React from "react";

import bgImage from "./img/Group 9581.png";
import PaymentInfoCards from "./PaymentInfoCards/PaymentInfoCards";

export default function PaymentInfo() {
  return (
    <Flex
      w="1512px"
      h="284px"
      flex="none"
      order="1"
      flecGrow="0"
      alignItems="center"
      justifyContent="center"
      m="10% auto"
    >
      <Img src={bgImage} />
      <PaymentInfoCards />
    </Flex>
  );
}
