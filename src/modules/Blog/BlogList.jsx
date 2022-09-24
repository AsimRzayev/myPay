import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { generatePath } from "react-router-dom";

import BlogItem from "../../components/BlogItem/BlogItem";
import { useItem } from "../../components/BlogProvider";
import SectionHeading from "../../components/SectionHeading";
import { ROUTES } from "../../routes";

function BlogList() {
  const itemData = useItem();
  return (
    <Box margin="80px 96px">
      <Flex justifyContent={"space-between"} height="56px" alignItems={"end"}>
        <SectionHeading />
      </Flex>
      <Flex justifyContent="space-between" flexWrap={"wrap"} mt={4} rowGap={4}>
        {itemData?.map((blog) => (
          <BlogItem
            key={blog.id}
            data={blog}
            moreLink={generatePath(ROUTES.BLOG.DETAILS, { id: blog.id })}
          />
        ))}
      </Flex>
    </Box>
  );
}

export default BlogList;
