import { Flex } from "@chakra-ui/react";
import React from "react";

import { CARD_INFOS } from "../../../../consts";
import PaymentInfoItem from "./PaymentInfoItem";

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
      {CARD_INFOS.map((cardInfo, idx) => (
        <PaymentInfoItem
          key={idx}
          image={cardInfo.image}
          header={cardInfo.header}
          desc={cardInfo.desc}
        />
      ))}
    </Flex>
  );
}
