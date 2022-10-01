import { Flex, Heading, Img, Text } from "@chakra-ui/react";
import React from "react";

import simpleinterface2icon from "../../../image/Group 9571.png";

export default function SimpleInterface2() {
  return (
    <Flex
      alignItems="flex-start"
      flexWrap="wrap"
      p="44px 4px 4px 28px"
      gap="28px"
      w="330px"
      // h="284px"
      position="relative"
      // _after={{
      //   content: '""',
      //   position: "absolute",
      //   w: "2px",
      //   h: "88px",
      //   bg: "#e6ecfa",
      //   right: "0",
      //   top: "44px",
      // }}
    >
      <Img src={simpleinterface2icon} mr="50px" />
      <Heading
        as="h1"
        w="265px"
        h="32px"
        fontFamily="SF Pro Display"
        fontStyle="normal"
        fontWeight="500"
        fontSize="20px"
        lineHeight="32px"
        color="#2e3131"
        flex="none"
        order="0"
        flexGrow="0"
      >
        Sadə və rahat interfeys
      </Heading>
      <Text
        fontFamily="SF Pro Display"
        widths="273px"
        height="96px"
        fontStyle="normal"
        fontWeight="400"
        fontSize="14px"
        lineHeight="24px"
        justifyContent="center"
        color="#586268"
        mt="8px"
        order="0"
        flexGrow="0"
      >
        Voluptatibus nisi maxime quia voluptatem. Dolores cum libero dolorem
        exercitationem o dolorem exercitationem o dolorem exercitatione
      </Text>
    </Flex>
  );
}
