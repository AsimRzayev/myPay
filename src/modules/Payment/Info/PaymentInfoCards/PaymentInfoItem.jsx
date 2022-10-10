import { Flex, Heading, Img, Text } from "@chakra-ui/react";
import React from "react";

export default function PaymentInfoItem({ image, header, desc }) {
  return (
    <Flex
      alignItems="flex-start"
      flexWrap="Wrap"
      p="44px 4px 46px 28px"
      gap="28px"
      w="330px"
      // h="284px"
      position="relative"
      _after={{
        content: '""',
        position: "absolute",
        w: "2px",
        h: "88px",
        bg: "#e6ecfa",
        right: "0",
        top: "44px",
      }}
    >
      <Img src={image} />
      <Heading
        as="h1"
        w="265px"
        h="32px"
        fontStyle="normal"
        fontWeight="500"
        fontSize="20px"
        lineHeight="32px"
        color="#2e3131"
        flex="none"
        order="0"
        flexGrow="0"
      >
        {header}
      </Heading>
      <Text
        widths="273px"
        height="96px"
        fontStyle="normal"
        fontWeight="400"
        fontSize="14px"
        lineHeight="24px"
        justifyContent="center"
        color="#586268"
        mt="8px"
      >
        {desc}
      </Text>
    </Flex>
  );
}
