import { Flex, ListItem, UnorderedList } from "@chakra-ui/react";
import React from "react";
import { Link, useParams } from "react-router-dom";

import PageContainer from "../../../components/Container";
import PaymentType from "./PaymentType";

export default function PaymentForm() {
  const { type } = useParams();

  return (
    <PageContainer>
      <UnorderedList display="flex" listStyleType="none" columnGap={2}>
        <ListItem>
          <Link to="/home">Ana Sehife / </Link>
        </ListItem>
        <ListItem>
          <Link to="/home">{type}</Link>
        </ListItem>
      </UnorderedList>
      <Flex justifyContent="center" py={6}>
        <PaymentType type={type} />
      </Flex>
    </PageContainer>
  );
}
