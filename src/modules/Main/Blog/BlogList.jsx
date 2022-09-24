import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { generatePath } from "react-router-dom";

import BlogItem from "../../../components/BlogItem/BlogItem";
import { useItem } from "../../../components/BlogProvider";
import { ROUTES } from "../../../routes";
import BlogHeader from "./BlogHeader";

function BlogList() {
  const itemData = useItem();
  return (
    <>
      <Box margin="80px 96px">
        <BlogHeader />
        <Flex justifyContent="space-between" columnGap={2} mt={4}>
          {itemData?.slice(0, 4).map((blog) => (
            <BlogItem
              key={blog.id}
              data={blog}
              moreLink={generatePath(ROUTES.BLOG.DETAILS, { id: blog.id })}
            />
          ))}
        </Flex>
      </Box>
    </>
  );
}

export default BlogList;
