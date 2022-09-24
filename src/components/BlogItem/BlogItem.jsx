import { Box, Flex, Image, Link } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

import ClickPay from "../../assets/blogImages/clickpay.svg";
import readMore from "../../assets/blogImages/readMore.png";
import BlogInfo from "./BlogInfo";

function BlogItem({ data, moreLink }) {
  return (
    <Box
      width={{ base: "full", md: "24%" }}
      bg="#FFFFFF"
      boxShadow="0px 4px 20px rgba(54, 64, 224, 0.1)"
      borderRadius="6px 6px 0px 0px"
      padding="12px 12px 24px 12px"
    >
      <BlogInfo item={data} />
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
            to={moreLink}
            _visited={{ textDecorationColor: "#93C5FD" }}
            fontSize="14px"
            fontWeight="400"
          >
            Ətraflı
          </Link>
          <Image src={readMore} alt="readmore" width="12px" height="8px" />
        </Flex>
      </Flex>
    </Box>
  );
}

export default BlogItem;
