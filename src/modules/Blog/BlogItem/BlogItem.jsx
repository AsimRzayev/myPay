import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

import ClickPay from "../../../assets/blogImages/clickpay.svg";
import readMore from "../../../assets/blogImages/readMore.png";
import BlogInfo from "./BlogInfo";

function BlogItem(props) {
  return (
    <Box
      width="calc(100% / 4 - 20px)"
      height="340px"
      rowGap="20px"
      bg="#FFFFFF"
      boxShadow="0px 4px 20px rgba(54, 64, 224, 0.1)"
      borderRadius="6px 6px 0px 0px"
      marginTop="32px"
      padding="12px 12px 24px 12px"
    >
      <BlogInfo item={props.data} />
      <Flex justifyContent="space-between" paddingTop="12px">
        <Image
          src={ClickPay}
          width={"68px"}
          height="28px"
          alignItems="end"
        ></Image>
        <Flex gap="5px" alignItems={"center"}>
          <Link
            as={RouterLink}
            to={props.moreLink}
            _visited={{ textDecorationColor: "#93C5FD" }}
          >
            <Text fontSize={"14px"} fontWeight="400">
              Ətraflı
            </Text>
          </Link>
          <Image src={readMore} alt="readmore" width="12px" height="8px" />
        </Flex>
      </Flex>
    </Box>
  );
}

export default BlogItem;
