import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Img,
  Input,
  InputGroup,
  List,
  ListItem,
  Select,
  Text,
} from "@chakra-ui/react";
import React from "react";

import mobilGreen from "../../../assets/paymentImages/mobilGreen.png";

export default function MobilePage() {
  return (
    <Flex
      w="100%"
      alignItems="center"
      justifyContent="space-around"
      flexWrap="wrap"
      bg="#F9FAFB"
      position="relative"
    >
      <Flex
        w="648px"
        h="452px"
        bg="#fff"
        boxShadow="0px 4px 60px rgba(54, 64, 224, 0.08)"
        borderRadius="8px"
        alignItems="center"
        justifyContent="center"
      >
        <Flex w="592px" h="396px" flexWrap="wrap">
          <Box
            w="592px"
            h="72px"
            gap="12px"
            display="flex"
            alignItems="start"
            position="relative"
            py="6px"
          >
            <Flex
              w="36px"
              h="36px"
              borderRadius="50%"
              bg="rgba(68, 188, 130, 0.1)"
              alignItems="center"
              justifyContent="center"
            >
              <Img w="13.5px" h="19.5px" src={mobilGreen} alt="mob" />
            </Flex>
            <Heading
              as="h2"
              fontFamily="Montserrat"
              fontStyle="normal"
              fontWeight="700"
              lineHeight="48px"
              fontSize="28px"
              color="#2E3131"
              position="absolute"
              left="48px"
              bottom="23px"
            >
              Bakcell
            </Heading>
            <Text
              as="p"
              position="absolute"
              bottom="0px"
              fontStyle="normal"
              fontWeight="400"
              lineHeight="24px"
              fontSize="14px"
              color="#849097"
            >
              Məlumatları əlavə edin
            </Text>
          </Box>
          <FormControl w="100%" h="324px" pt="24px">
            <FormLabel
              color=" #2D3131"
              bottom="0px"
              fontStyle="normal"
              fontWeight="400"
              lineHeight="24px"
              fontSize="14px"
            >
              Prefiks
            </FormLabel>
            <Select
              w="100%"
              h="48px"
              bg="#F3F6FD"
              outline="none"
              borderColor="#E6ECFA"
              display="flex"
              flexDirection="row"
              alignItems="center"
              gap="12px"
            >
              <option>050</option>
              <option>051</option>
              <option>055</option>
              <option>070</option>
              <option>077</option>
              <option>055</option>
            </Select>
            <FormLabel
              color=" #2D3131"
              bottom="0px"
              fontStyle="normal"
              fontWeight="400"
              lineHeight="24px"
              fontSize="14px"
              mt="16px"
            >
              Nömrə
            </FormLabel>
            <Input
              type="number"
              w="100%"
              h="48px"
              bg="#F3F6FD"
              outline="none"
              borderColor="#E6ECFA"
              display="flex"
              flexDirection="row"
              alignItems="center"
              gap="12px"
            />
            <Button
              w="100%"
              h="48px"
              bg="#0D52FF"
              color="#fff"
              mt="16px"
              fontStyle="normal"
              fontWeight="500"
              fontSize="16px"
              lineHeight="16px"
              transition=".2s"
              _hover={{
                bg: "#110CDF",
                boxShadow: "0px 4px 19px rgba(48, 46, 150, 0.25)",
              }}
            >
              Davam et
            </Button>
            <Button
              w="100%"
              h="48px"
              bg="#F3F5F8"
              color="#586268"
              mt="12px"
              transition=".2s"
              fontStyle="normal"
              fontWeight="500"
              fontSize="16px"
              lineHeight="16px"
              _hover={{
                bg: "#0D52FF",
                color: "#fff",
                boxShadow: "0px 4px 19px rgba(48, 46, 150, 0.25)",
              }}
            >
              Geri qayıt
            </Button>
          </FormControl>
        </Flex>
      </Flex>

      <Flex
        w="648px"
        h="452px"
        bg="#fff"
        boxShadow="0px 4px 60px rgba(54, 64, 224, 0.08)"
        borderRadius="8px"
        alignItems="center"
        justifyContent="center"
      >
        <Flex w="592px" h="396px" flexWrap="wrap">
          <Box
            w="592px"
            h="72px"
            gap="12px"
            display="flex"
            alignItems="start"
            position="relative"
            py="6px"
          >
            <Flex
              w="36px"
              h="36px"
              borderRadius="50%"
              bg="rgba(68, 188, 130, 0.1)"
              alignItems="center"
              justifyContent="center"
            >
              <Img w="13.5px" h="19.5px" src={mobilGreen} alt="mob" />
            </Flex>
            <Heading
              as="h2"
              fontFamily="Montserrat"
              fontStyle="normal"
              fontWeight="700"
              lineHeight="48px"
              fontSize="28px"
              color="#2E3131"
              position="absolute"
              left="48px"
              bottom="23px"
            >
              Bakcell
            </Heading>
            <Text
              as="p"
              position="absolute"
              bottom="0px"
              fontStyle="normal"
              fontWeight="400"
              lineHeight="24px"
              fontSize="14px"
              color="#849097"
            >
              Məlumatları əlavə edin
            </Text>
          </Box>
          <FormControl w="100%" h="324px" pt="24px" position="relative">
            <InputGroup w="284px" h="96px" position="relative" left="0">
              <FormLabel
                color=" #2D3131"
                bottom="0px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="24px"
                fontSize="14px"
                position="relative"
              >
                Prefiks
              </FormLabel>
              <Input
                value="055"
                position="absolute"
                top="28px"
                type="number"
                w="100%"
                h="48px"
                bg="#F3F6FD"
                outline="none"
                borderColor="#E6ECFA"
                disabled
              />
            </InputGroup>
            <InputGroup
              w="284px"
              h="96px"
              position="absolute"
              right="0"
              top="24px"
            >
              <FormLabel
                color=" #2D3131"
                top="0px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="24px"
                fontSize="14px"
                position="relative"
              >
                Nömrə
              </FormLabel>
              <Input
                value="87587237777"
                position="absolute"
                top="28px"
                type="number"
                w="100%"
                h="48px"
                bg="#F3F6FD"
                outline="none"
                borderColor="#E6ECFA"
                disabled
              />
            </InputGroup>
            <FormLabel
              color=" #2D3131"
              top="0px"
              fontStyle="normal"
              fontWeight="400"
              lineHeight="24px"
              fontSize="14px"
              position="relative"
            >
              Məbləğ
            </FormLabel>
            <Select
              w="100%"
              h="48px"
              bg="#F3F6FD"
              outline="none"
              borderColor="#E6ECFA"
              display="flex"
              flexDirection="row"
              position="relative"
            >
              <option selected>Kart növünü seçin</option>
              <option>MasterCard / Maestro</option>
              <option>Visa / Visa Electron</option>
              <option>Albalı / Albalı+</option>
              <option>Bolkart</option>
            </Select>
            <Button
              w="100%"
              h="48px"
              bg="#0D52FF"
              color="#fff"
              mt="16px"
              fontStyle="normal"
              fontWeight="500"
              fontSize="16px"
              lineHeight="16px"
              transition=".2s"
              _hover={{
                bg: "#110CDF",
                boxShadow: "0px 4px 19px rgba(48, 46, 150, 0.25)",
              }}
            >
              Davam et
            </Button>
            <Button
              w="100%"
              h="48px"
              bg="#F3F5F8"
              color="#586268"
              mt="12px"
              transition=".2s"
              fontStyle="normal"
              fontWeight="500"
              fontSize="16px"
              lineHeight="16px"
              _hover={{
                bg: "#0D52FF",
                color: "#fff",
                boxShadow: "0px 4px 19px rgba(48, 46, 150, 0.25)",
              }}
            >
              Geri qayıt
            </Button>
          </FormControl>
        </Flex>
      </Flex>

      <Flex
        w="648px"
        h="452px"
        bg="#fff"
        boxShadow="0px 4px 60px rgba(54, 64, 224, 0.08)"
        borderRadius="8px"
        alignItems="center"
        justifyContent="center"
      >
        <Flex w="592px" h="396px" flexWrap="wrap">
          <Box
            w="592px"
            h="72px"
            gap="12px"
            display="flex"
            alignItems="start"
            position="relative"
            py="6px"
          >
            <Flex
              w="36px"
              h="36px"
              borderRadius="50%"
              bg="rgba(68, 188, 130, 0.1)"
              alignItems="center"
              justifyContent="center"
            >
              <Img w="13.5px" h="19.5px" src={mobilGreen} alt="mob" />
            </Flex>
            <Heading
              as="h2"
              fontFamily="Montserrat"
              fontStyle="normal"
              fontWeight="700"
              lineHeight="48px"
              fontSize="28px"
              color="#2E3131"
              position="absolute"
              left="48px"
              bottom="23px"
            >
              Bakcell
            </Heading>
            <Text
              as="p"
              position="absolute"
              bottom="0px"
              fontStyle="normal"
              fontWeight="400"
              lineHeight="24px"
              fontSize="14px"
              color="#849097"
            >
              Məlumatları əlavə edin
            </Text>
          </Box>
          <FormControl w="100%" h="324px" pt="24px" position="relative">
            <InputGroup
              w="592px"
              h="96px"
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
            >
              <FormLabel
                color=" #2D3131"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="24px"
                fontSize="14px"
              >
                Kart
              </FormLabel>
              <Input
                type="number"
                w="100%"
                h="48px"
                bg="#fff"
                outline="none"
                borderColor="#E6ECFA"
                display="flex"
                flexDirection="row"
                alignItems="center"
                gap="12px"
                placeholder="xxxx xxxx xxxx xxxx"
                _placeholder={{
                  color: "#BDC3C7",
                }}
              />
            </InputGroup>
            <InputGroup
              w="284px"
              h="96px"
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              position="relative"
            >
              <FormLabel
                color=" #2D3131"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="24px"
                fontSize="14px"
              >
                Bitmə tarixi
              </FormLabel>
              <Input
                value="00/00"
                position="absolute"
                bottom="16px"
                type="number"
                w="100%"
                h="48px"
                bg="#F3F6FD"
                outline="none"
                borderColor="#E6ECFA"
              />
            </InputGroup>
            <InputGroup
              w="284px"
              h="96px"
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              position="absolute"
              right="0"
              top="120"
            >
              <FormLabel
                color=" #2D3131"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="24px"
                fontSize="14px"
              >
                CVV / CVV2
              </FormLabel>
              <Input
                value="000"
                position="absolute"
                bottom="16px"
                type="number"
                w="100%"
                h="48px"
                bg="#F3F6FD"
                outline="none"
                borderColor="#E6ECFA"
              />
            </InputGroup>
            <Button
              w="100%"
              h="48px"
              bg="#0D52FF"
              color="#fff"
              fontStyle="normal"
              fontWeight="500"
              fontSize="16px"
              lineHeight="16px"
              transition=".2s"
              _hover={{
                bg: "#110CDF",
                boxShadow: "0px 4px 19px rgba(48, 46, 150, 0.25)",
              }}
            >
              Davam et
            </Button>
            <Button
              w="100%"
              h="48px"
              bg="#F3F5F8"
              color="#586268"
              mt="12px"
              transition=".2s"
              fontStyle="normal"
              fontWeight="500"
              fontSize="16px"
              lineHeight="16px"
              _hover={{
                bg: "#0D52FF",
                color: "#fff",
                boxShadow: "0px 4px 19px rgba(48, 46, 150, 0.25)",
              }}
            >
              Geri qayıt
            </Button>
          </FormControl>
        </Flex>
      </Flex>

      <Flex
        w="536px"
        h="549px"
        p="28px"
        bg="#fff"
        boxShadow="0px 4px 60px rgba(54, 64, 224, 0.08)"
        borderRadius="8px"
        alignItems="flex-start"
        justifyContent="stretch"
        flexDirection="row"
        flexWrap="wrap"
      >
        <Flex
          flexDirection="row"
          alignItems="center"
          p="24px 20px"
          gap="16px"
          w="480px"
          h="96px"
          bg="#081125"
          borderRadius="6px"
          alignSelf="start"
        ></Flex>
        <List
          spacing={3}
          color="#849097"
          w="536px"
          fontStyle="normal"
          fontWeight="400"
          fontSize="16px"
          lineHeight="24px"
        >
          <ListItem
            borderBottom="1px solid #F3F5F8"
            position="relative"
            py="16px"
          >
            Xidmət
            <Text>Bakcell</Text>
          </ListItem>
          <ListItem
            borderBottom="1px solid #F3F5F8"
            position="relative"
            py="16px"
          >
            Məbləğ
            <Text></Text>
          </ListItem>
          <ListItem
            borderBottom="1px solid #F3F5F8"
            position="relative"
            py="16px"
          >
            Kart nömrəsi
            <Text></Text>
          </ListItem>
          <ListItem
            borderBottom="1px solid #F3F5F8"
            position="relative"
            py="16px"
          >
            Kart növü
            <Text></Text>
          </ListItem>
          <ListItem
            borderBottom="1px solid #F3F5F8"
            position="relative"
            py="16px"
          >
            Tranzaksiya ID
            <Text></Text>
          </ListItem>
        </List>
      </Flex>
    </Flex>
  );
}
