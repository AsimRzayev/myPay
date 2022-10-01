import "../../index.css";

import { Button, Flex } from "@chakra-ui/react";
import React from "react";

export default function PaymentBtn(props) {
  return (
    <Button
      w="200px"
      h="160px"
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
      to={props.url}
    >
      <Flex
        w="64px"
        h="64px"
        bg={props.iconBg}
        borderRadius="16px"
        alignItems="center"
        justifyContent="center"
      ></Flex>
      {props.heading}
    </Button>
  );
}
