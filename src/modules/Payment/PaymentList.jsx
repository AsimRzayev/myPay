import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";

import { PAYMENT_BUTTONS } from "../../consts";
import PaymentBtn from "./PaymentBtn";

export default function PaymentList() {
  return (
    <Grid templateColumns="repeat(6, 1fr)" gap={10} alignContent="stretch">
      {PAYMENT_BUTTONS.map((payment) => (
        <GridItem
          minHeight="160px"
          key={payment.id}
          p={6}
          py={4}
          bg="#F3F5F8"
          border="1px solid #fff"
          position="relative"
          _after={{
            content: "''",
            width: "112px",
            height: "1px",
            backgroundColor: " #44BC82",
            bottom: "-13px",
            left: "25%",
            position: "absolute",
          }}
          _hover={{
            boxShadow: "0px 4px 37px rgba(29, 78, 216, 0.1)",
            bg: "#F9FAFB",
            border: "1px solid #ffff",
          }}
        >
          <PaymentBtn key={payment.id} payment={payment} />
        </GridItem>
      ))}
    </Grid>
  );
}
