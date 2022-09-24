import { Text } from "@chakra-ui/react";
import React from "react";

function HeaderTitle() {
  return (
    <Text
      width="86px"
      height="56px"
      fontFamily="Montserrat"
      fontSize="36px"
      fontWeight={500}
      lineHeight="56px"
      color="#2E3131"
      position="relative"
      _after={{
        content: '""',
        width: "143px",
        height: "4px",
        bgGradient:
          "linear-gradient(90deg, #1510FF 0%, rgba(217, 217, 217, 0) 92.66%)",
        borderRadius: "19px",
        transform: "rotate(-180deg)",
        position: "absolute",
        bottom: "0px",
        left: "0px",
      }}
    >
      Blog
    </Text>
  );
}

export default HeaderTitle;
