import "../../index.css";

import { Flex, Stack } from "@chakra-ui/react";
import React from "react";

import PageContainer from "../../components/Container";
import PaymentInfo from "./Info/PaymentInfo";
import PaymentList from "./PaymentList";
import PaymentSearch from "./PaymentSearch";

const Payment = () => {
  return (
    <Stack spacing={9} py={4}>
      <PageContainer bg="#F9FAFB">
        <Flex
          w={{ base: "80%", md: "1512px" }}
          h={"677px"}
          bg="#F9FAFB"
          flexDirection="column"
          rowGap={6}
        >
          <PaymentSearch />
          <PaymentList />
        </Flex>
      </PageContainer>
      <PaymentInfo />
    </Stack>
  );
};
export default Payment;
