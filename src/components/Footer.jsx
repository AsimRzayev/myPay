//
import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

import Logo from "../assets/logo/ClickPayLogo.svg";
import Fb from "../assets/logo/FbLogo.svg";
import Tweet from "../assets/logo/TweetLogo.svg";
import { ROUTES } from "../routes";
import PageContainer from "./Container";

export default function Footer() {
  return (
    <Flex w="full" bg="#081125" color="#ACB3B8" py="40px" alignItems="center">
      <PageContainer>
        <Flex justifyContent="space-between" textAlign="center">
          <Flex mb={4}>
            <img src={Logo} alt="ClickPay" />
            <Box w="1px" height="56px" bg="#2E3131" ml={4}></Box>
          </Flex>
          <Flex gap={7} mr={3} mt={4} fontSize="16px">
            <RouterLink
              to={ROUTES.ABOUT}
              color="black"
              _hover={{
                color: "white",
              }}
            >
              Haqqımızda
            </RouterLink>
            <RouterLink
              style={{
                ":hover": {
                  color: "black",
                },
              }}
              to="/service"
            >
              Xidmətlər
            </RouterLink>
            <RouterLink to="/customers">Bizim Müştərilərimiz</RouterLink>
            <RouterLink to="/news">Xəbərlər</RouterLink>
            <RouterLink to="/apii">API</RouterLink>
          </Flex>
        </Flex>
        <Flex
          justifyContent="space-between"
          borderTop="1px solid #2E3131"
          pt={4}
        >
          <Box>Bütün hüquqlar qorunur 2022 © ClickPay</Box>
          <Flex gap={4}>
            <img src={Fb} alt="FB" />
            <img src={Tweet} alt="Tweet" />
          </Flex>
        </Flex>
      </PageContainer>
    </Flex>
  );
}
