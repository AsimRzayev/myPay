import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import React from "react";

import ClickPayIconHeader from "../assets/logo/ClickPayLogoHeader.svg";
import PageContainer from "../components/Container";
import Language from "../components/Header/Language";

function UserRegister() {
  return (
    <>
      <Box
        backgroundImage="url('/login/background.svg')"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        w="53%"
        height="990px"
        position="absolute"
        top="0px"
        zIndex="-1"
      ></Box>
      <PageContainer mt="24px">
        <Flex justifyContent="space-between">
          <Link href="https://clickpay.com">
            <Image src={ClickPayIconHeader} />
          </Link>
          <Language />
        </Flex>
        <Flex>
          <Box width="480px">
            <Text
              fontSize="48px"
              color="#F3F6FD"
              lineHeight="60px"
              fontWeight={700}
              mt="92px"
            >
              Xoş Gəldiniz
            </Text>
            <Text fontSize="15px" color="#E4E8EE" pr="40px" pt="10px">
              Accusamus tenetur ratione omnis temporibus praesentium est
              dolores. Soluta occaecati iusto dignissimos ut expedita. Quasi
              mollitia aut id doloremque placeat.
            </Text>
          </Box>
        </Flex>
      </PageContainer>
    </>
  );
}

export default UserRegister;
