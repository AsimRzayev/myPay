import { Box, Button, Flex, Heading, Img, Text } from "@chakra-ui/react";
import React from "react";

//** Images */
import imageCard from "./images/card.svg";
import inputImg from "./images/input.svg";
import servicesCard from "./images/services.svg";
import signIn from "./images/sign-in.svg";

export default function Banner({ desc }) {
  return (
    <>
      <Flex
        className="Banner-container"
        w={"1512px"}
        h={"608px"}
        p={"80px 10px 80px 96px"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"flex-start"}
        gap={"4px"}
      >
        <Flex
          className="Banner"
          w={"1406px"}
          h={"448px"}
          flexDirection={"row"}
          alignItems={"center"}
          p={"0px"}
          gap={"105px"}
        >
          <Flex
            className="Banner-left"
            w={"529px"}
            h={"358px"}
            flexDirection={"column"}
            alignItems={"flex-start"}
            p={"0px"}
            position={"relative"}
          >
            <Heading
              as={"h2"}
              fontWeight={"700"}
              fontStyle={"normal"}
              fontFamily={"Montserrat"}
              w={"536px"}
              h={"112px"}
              fontSize={"40px"}
              lineHeight={"56px"}
              color={"#44bc82"}
            >
              Online ödəniş{" "}
              <Text as={"span"} color={"#586268"}>
                etməyin ən asan yolu
              </Text>
            </Heading>
            <Text
              as={"p"}
              w={"536px"}
              h={"48px"}
              fontStyle={"normal"}
              fontWeight={"400"}
              fontSize={"14px"}
              lineHeight={"24px"}
              mt={"20px"}
              color={"#586268"}
            >
              {desc}
            </Text>

            <Button
              h={"48px"}
              w={"137px"}
              borderRadius={"8px"}
              p={"16px 20px 16px 20px"}
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"center"}
              alignItems={"center"}
              position={"absolute"}
              left={"-7.08px"}
              bottom={"0%"}
              backgroundColor={"#0d52ff"}
              color={"#f8fafc"}
              boxShadow={"0px 4px 19px rgba(48, 46, 150, 0.25)"}
              transition={"all"}
              transitionDuration={"0.2s"}
              transitionTimingFunction={"ease"}
              _hover={{
                bgColor: "#110cdf",
              }}
            >
              <Img src={signIn} alt="sign-in" fontSize={"14px"} mr={"8px"} />
              İndi başla
            </Button>
          </Flex>

          <Box
            className="Banner-right"
            w={"772px"}
            h={"448px"}
            position={"relative"}
          >
            <Box>
              <Img
                src={servicesCard}
                alt="Services image"
                className="services-img"
                position={"absolute"}
                right={"398px"}
                bottom={"-43px"}
                filter={"drop-shadow(0px 4px 60px rgba(54, 64, 224, 0.08))"}
              />
            </Box>
            <Box className="card-img">
              <Img
                src={imageCard}
                alt="Card image"
                position={"absolute"}
                top={"4px"}
                left={"136px"}
                filter={"drop-shadow(0px 4px 60px rgba(54, 64, 224, 0.08))"}
                zIndex={"2"}
              />
            </Box>
            <Box className="input-img">
              <Img
                src={inputImg}
                alt="Search"
                position={"absolute"}
                right={"-10px"}
                bottom={"-60px"}
                filter={"drop-shadow(0px 4px 60px rgba(54, 64, 224, 0.08))"}
              />
            </Box>
          </Box>
        </Flex>
      </Flex>
    </>
  );
}
