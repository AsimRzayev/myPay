import { Flex } from "@chakra-ui/react";
import React from "react";
import { generatePath } from "react-router-dom";

import BlogItem from "../../../components/BlogItem/BlogItem";
import PageContainer from "../../../components/Container";
import { ROUTES } from "../../../routes";
import { useServices } from "../../../services";
import BlogHeader from "./BlogHeader";

function BlogList() {
  const services = useServices();
  const [blogs, setBlogs] = React.useState();
  services.blogService.getBlogs().then((x) => setBlogs(x));

  return (
    <>
      <PageContainer py={4}>
        <BlogHeader />
        <Flex justifyContent="space-between" columnGap={2} mt={4}>
          {blogs?.map((blog) => (
            <BlogItem
              key={blog.id}
              data={blog}
              moreLink={generatePath(ROUTES.BLOG.DETAILS, { id: blog.id })}
            />
          ))}
        </Flex>
      </PageContainer>
    </>
  );
}

export default BlogList;
