import { Box, Flex } from "@chakra-ui/react";
import React from "react";

import { useItem } from "../../../components/BlogProvider";
import { ROUTES } from "../../../routes";
import HeaderTitle from "../BlogHeader/HeaderTitle";
import BlogItem from "../BlogItem/BlogItem";

function MoreItems() {
  const itemData = useItem();
  return (
    <Box margin="80px 96px">
      <Flex justifyContent={"space-between"} height="56px" alignItems={"end"}>
        <HeaderTitle />
      </Flex>
      <Flex justifyContent="space-between" flexWrap={"wrap"}>
        <BlogItem
          data={itemData[0]}
          moreLink={ROUTES.BLOG_DETAILS.ITEM_DETAILS1}
        />
        <BlogItem
          data={itemData[1]}
          moreLink={ROUTES.BLOG_DETAILS.ITEM_DETAILS2}
        />
        <BlogItem
          data={itemData[2]}
          moreLink={ROUTES.BLOG_DETAILS.ITEM_DETAILS3}
        />
        <BlogItem
          data={itemData[3]}
          moreLink={ROUTES.BLOG_DETAILS.ITEM_DETAILS4}
        />
        <BlogItem
          data={itemData[0]}
          moreLink={ROUTES.BLOG_DETAILS.ITEM_DETAILS1}
        />
        <BlogItem
          data={itemData[1]}
          moreLink={ROUTES.BLOG_DETAILS.ITEM_DETAILS2}
        />
        <BlogItem
          data={itemData[2]}
          moreLink={ROUTES.BLOG_DETAILS.ITEM_DETAILS3}
        />
        <BlogItem
          data={itemData[3]}
          moreLink={ROUTES.BLOG_DETAILS.ITEM_DETAILS4}
        />
      </Flex>
    </Box>
  );
}

export default MoreItems;
