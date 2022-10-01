import { Box, Button, Flex, Img, Link } from "@chakra-ui/react";
import React from "react";

import ClickPayIconHeader from "../../assets/logo/ClickPayLogoHeader.svg";
import SignInIcon from "../../assets/logo/SignInIcon.svg";
import PageContainer from "../Container";

export default function HeaderBottom() {
  return (
    <Box bg="white">
      <PageContainer py={3}>
        <Flex justifyContent="space-between" alignItems="center">
          <Link href="https://clickpay.com">
            <Img src={ClickPayIconHeader} />
          </Link>
          <Box>
            <Button
              py={6}
              px={6}
              bg="#F3F5F8"
              colorScheme="gray"
              fontSize="16px"
              _hover={{
                background: " #0D52FF",
                color: "#FFFFFF",
              }}
            >
              Qeydiyyatdan keç
            </Button>
            <Button py={6} px={6} colorScheme="blue" fontSize="16px" ml={4}>
              <Img src={SignInIcon} mr={1} />
              Daxil ol
            </Button>
          </Box>
        </Flex>
      </PageContainer>
    </Box>
  );
}
