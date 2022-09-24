import { Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

function ItemDetails({ item }) {
  const { image, title, desc } = item;
  return (
    <Stack
      width="700px"
      alignItems="center"
      justifyContent={"center"}
      margin="80px auto"
    >
      <Image src={image} width="full" borderRadius=" 4px 4px 0px 0px" />
      <Text
        fontStyle="normal"
        fontWeight="500"
        fontSize="20px"
        padding="20px 0px"
      >
        {title}
      </Text>
      <Text color="#959FA5" fontStyle="normal" fontWeight="400" fontSize="16px">
        {desc.moreDesc}
      </Text>
    </Stack>
  );
}

export default ItemDetails;
