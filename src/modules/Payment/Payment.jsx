import "../../index.css";

import {
  Button,
  Flex,
  Heading,
  Image,
  Img,
  Input,
  Stack,
} from "@chakra-ui/react";
import React from "react";

import checkIcon from "../../assets/paymentImages/check.svg";
import searchIcon from "../../assets/paymentImages/search.png";
import PaymentList from "./PaymentList";

const Payment = () => {
  return (
    <Flex
      w={{ base: "80%", md: "1920px" }}
      h={"990px"}
      mt="30px"
      bg="#000"
      position="relative"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        w={{ base: "80%", md: "1512px" }}
        h={"677px"}
        bg=" #F9FAFB"
        border="1px solid"
        position="relative"
        padding="80px 96px"
      >
        <Flex
          w={{ base: "80%", md: "1318px" }}
          h="140px"
          flexDirection="column"
          gap="32px"
          position="relative"
        >
          <Heading
            w="130px"
            height="60px"
            fontFamily={"Montserrat, sans-serif"}
            fontStyle="normal"
            fontWeight="500"
            lineHeight="56px"
            fontSize="36px"
            color="#2E3131"
            position="relative"
            _after={{
              content: "''",
              width: "143px",
              height: "4px",
              bg: "linear-gradient(90deg, #1510FF 0%, rgba(217, 217, 217, 0) 92.66%)",
              transform: "rotate(-180deg)",
              borderRadius: "19px",
              position: "absolute",
              bottom: "0",
              left: "0",
            }}
          >
            Ödəniş
          </Heading>
          <Stack
            width={{ base: "70%", md: "1315px" }}
            h={"48px"}
            bottom="0"
            position="relative"
            justifyContent="center"
            _before={{
              content: "''",
              width: "1px",
              height: "20px",
              backgroundColor: "#E8ECF1",
              position: "absolute",
              zIndex: "10",
              bottom: "14px",
              left: "52px",
            }}
          >
            <Image
              w="15px"
              h="15px"
              left={"1.5%"}
              position="absolute"
              zIndex="2"
              src={searchIcon}
              alt="search"
            />
            <Input
              w="100%"
              height="48px"
              bg="#fff"
              position="absolute"
              zIndex="1"
              border="none"
              bottom="0"
              placeholder="Axtar"
              paddingLeft="69px"
              fontSize="16px"
              _placeholder={{
                color: "#ACB3B8",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "24px",
              }}
            />
            <Button
              type="submit"
              alignItems="center"
              justifyContent="center"
              color="#fff"
              bg="#44BC82"
              position="absolute"
              zIndex="3"
              flexDirection="row"
              p="4px 10px"
              gap="4px"
              w="44px"
              h="32px"
              borderRadius="6px"
              right="8px"
              bottom="8px"
            >
              <Img
                w="15.75px"
                h="10.5px"
                src={checkIcon}
                alt="check"
                position={"relative"}
              />
            </Button>
          </Stack>
        </Flex>
        <PaymentList />
      </Flex>
    </Flex>
  );
};
export default Payment;
