import "../../index.css";

import { Flex, Img } from "@chakra-ui/react";
import React from "react";
import { generatePath, Link } from "react-router-dom";

import { ROUTES } from "../../routes";

export default function PaymentBtn({ payment }) {
  return (
    <Flex
      as={Link}
      to={generatePath(ROUTES.PAYMENTS_FORM, { type: payment.type })}
      w="full"
      h="full"
      d="flex"
      flexDirection="column"
      rowGap={4}
      fontSize="20px"
      color="#586268"
      alignItems="center"
      textAlign="center"
    >
      <Flex
        w="50%"
        p={4}
        bg={payment.iconBg}
        borderRadius="16px"
        alignItems="center"
        justifyContent="center"
      >
        <Img src={payment.icon} alt="icon" />
      </Flex>
      {payment.heading}
    </Flex>
  );
}
