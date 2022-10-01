import "../../index.css";

import { Button, Flex, Img } from "@chakra-ui/react";
import React from "react";

export default function PaymentBtn(props) {
  return (
    <Button
      w="220px"
      h="180px"
      bg="#F3F5F8"
      border="1px solid #fff"
      columnGap="100px"
      flexWrap="wrap"
      fontStyle="normal"
      fontWeight="400"
      fontSize="20px"
      color="#586268"
      p="10px 16px 15px"
      position="relative"
      _after={{
        content: "''",
        width: "112px",
        height: "1px",
        backgroundColor: " #44BC82",
        bottom: "-13px",
        position: "absolute",
      }}
      _hover={{
        boxShadow: "0px 4px 37px rgba(29, 78, 216, 0.1)",
        bg: "#F9FAFB",
        border: "1px solid #ffff",
      }}
      onClick={props.url}
    >
      <Flex
        w="70px"
        h="70px"
        bg={props.iconBg}
        borderRadius="16px"
        alignItems="center"
        justifyContent="center"
      >
        <Img src={props.icon} alt="icon" />
      </Flex>
      {props.heading}
    </Button>
  );
}
