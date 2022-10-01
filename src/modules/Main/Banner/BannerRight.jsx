import { Box, Img } from "@chakra-ui/react";
import React from "react";

import imageCard from "../../../assets/bannerImage/card.svg";
import inputImg from "../../../assets/bannerImage/input.svg";
import servicesCard from "../../../assets/bannerImage/services.svg";

export default function BannerRight() {
  return (
    <Box position="relative" w="full" h="100%">
      <Img
        src={servicesCard}
        alt="Services image"
        position="absolute"
        left="0px"
        top="0px"
      />

      <Img
        src={imageCard}
        alt="Card image"
        position="absolute"
        top={1}
        left="136px"
        zIndex="2"
      />

      <Img
        src={inputImg}
        alt="Search"
        position="absolute"
        right={0}
        bottom="-60px"
        transform="translateX(25%)"
      />
    </Box>
  );
}
