import { Box, Flex, Link } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";

import { ROUTES } from "../../routes";
import Container from "../Container";
import Language from "./Language";

export default function Navbar() {
  const [isFixed, setFixed] = React.useState(false);
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <Box
      bg={isFixed ? "black" : "#F9FAFB"}
      position={isFixed ? "sticky" : "static"}
      top={0}
      zIndex={2}
      transition="0.5s"
      color={isFixed ? "white" : "#586268"}
    >
      <Container py={3}>
        <Flex>
          <Flex gap={5} mr={3} w="full">
            <Link as={RouterLink} to={ROUTES.ABOUT} fontSize="14px">
              Haqqımızda
            </Link>
            <Link as={RouterLink} to={ROUTES.SERVICES} fontSize="14px">
              Xidmətlər
            </Link>
            <Link as={RouterLink} to={ROUTES.CUSTOMERS} fontSize="14px">
              Bizim Müştərilərimiz
            </Link>
            <Link as={RouterLink} to={ROUTES.NEWS} fontSize="14px">
              Xəbərlər
            </Link>
            <Link as={RouterLink} to={ROUTES.API} fontSize="14px">
              API
            </Link>
            <Link as={RouterLink} to={ROUTES.CONTACT} fontSize="14px">
              Əlaqə
            </Link>
          </Flex>
          <Language />
        </Flex>
      </Container>
    </Box>
  );
}
