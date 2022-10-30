import { Flex, Img, Text } from "@chakra-ui/react";
import React from "react";

function BlogInfo({ item }) {
  const { image, heading, desc } = item;
  return (
    <Flex flexDirection="column" gap="8px">
      <Img
        src={image}
        alt="items"
        width="full"
        borderRadius="4px 4px 0px 0px"
      />
      <Text
        fontWeight=" 500"
        fontSize=" 16px"
        lineHeight=" 24px"
        paddingTop="5px"
        color="#2E3131"
      >
        {heading}
      </Text>
      <Text
        color="#959FA5"
        fontWeight=" 400"
        fontSize=" 14px"
        lineHeight=" 24px"
      >
        {desc}
      </Text>
    </Flex>
  );
}

export default BlogInfo;
