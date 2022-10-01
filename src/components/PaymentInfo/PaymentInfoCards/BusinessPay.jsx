import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

import businessIcon from "../../../../src/image/Group 9569.png";

export default function BusinessPay() {
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
      <img src={businessIcon} />
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
        İstənilən biznes üçün ödənişlər
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
        Voluptatibus nisi maxime quia voluptatem. Dolores cum libero dolorem
        exercitationem o dolorem exercitationem o dolorem exercitationem o
        dolorem exercitationem
      </Text>
    </Flex>
  );
}
