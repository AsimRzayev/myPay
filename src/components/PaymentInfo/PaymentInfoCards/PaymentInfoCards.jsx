import { Flex } from "@chakra-ui/react";
import React from "react";

import BusinessPay from "./BusinessPay";
import SimpleInterface1 from "./SimpleInterface1";
import SimpleInterface2 from "./SimpleInterface2";
import SimplePayments from "./SimplePayments";

export default function PaymentInfoCards() {
  return (
    <Flex
      boxSizing="border-box"
      flexDirection="row"
      alignItems="flex-start"
      p="0"
      position="absolute"
      w="1320px"
      // h="284px"
      bg="#ffffff"
      border="1px solid #ffffffff"
      boxShadow="0px 0px 32px rgba(29, 78, 216, 0.1)"
      borderRadius="20px"
    >
      <BusinessPay />
      <SimplePayments />
      <SimpleInterface1 />
      <SimpleInterface2 />
    </Flex>
  );
}
