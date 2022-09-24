import { Flex, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import { Link as ReadLink } from "react-router-dom";

import read from "../assets/blogImages/read.png";
import { ROUTES } from "../routes";

function ReadMore() {
  return (
    <Link
      as={ReadLink}
      to={ROUTES.BLOG.LIST}
      _visited={{ textDecorationColor: "#93C5FD" }}
    >
      <Flex columnGap="4px">
        <Text
          color="#2E3131"
          fontStyle="normal"
          fontWeight="400"
          fontSize="16px"
        >
          Daha çox
        </Text>
        <Image src={read} alt="readmore" />
      </Flex>
    </Link>
  );
}

export default ReadMore;
