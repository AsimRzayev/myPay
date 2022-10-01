import { Box, Button, Flex, Heading, Img, Text } from "@chakra-ui/react";
import React from "react";

//** Images */
import SignInIcon from "../../../assets/logo/SignInIcon.svg";
import PageContainer from "../../../components/Container";
import BannerRight from "./BannerRight";

export default function Banner() {
  return (
    <Box bg="white" py={6} h="60vh">
      <PageContainer h="100%">
        <Flex alignItems="center" h="100%" justifyContent="space-between">
          <Flex
            w="full"
            h="80%"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Box>
              <Heading
                as="h2"
                fontWeight="bold"
                fontSize="40px"
                color="#586268"
              >
                <Text as="span" color="#44bc82">
                  Online ödəniş&nbsp;
                </Text>
                etməyin <br /> ən asan yolu
              </Heading>
              <Text as="p" fontWeight="normal" mt={5} color="#586268">
                Repellat deserunt eos vero est necessitatibus quia. Repellendus
                voluptatem reprehenderit <br /> maiores et. Velit vero
                accusantium quaerat tempore animi porro.
              </Text>
            </Box>
            <Button w="150px" colorScheme="blue" size="lg">
              <Img
                src={SignInIcon}
                alt="sign-in"
                fontSize={"14px"}
                mr={"8px"}
              />
              İndi başla
            </Button>
          </Flex>
          <BannerRight />
        </Flex>
      </PageContainer>
    </Box>
  );
}
