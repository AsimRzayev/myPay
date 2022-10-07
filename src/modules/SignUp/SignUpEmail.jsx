import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";

import Login from "../../assets/icons/arrowlogin.svg";
import simpleLogin from "../../assets/icons/asanImza.svg";
import Eye from "../../assets/icons/eye.svg";
import LoginAndEmail from "../UserRegister";

function SignUpEmail() {
  return (
    <>
      <LoginAndEmail />
      <Box
        width="520px"
        minHeight="540px"
        mt="28px"
        p="28px"
        bg="#FFFFFF"
        borderRadius="8px"
        boxShadow=" 0px 4px 60px rgba(54, 64, 224, 0.08)"
        position="relative"
        left="45%"
        bottom="230px"
      >
        <Text fontSize="28px" fontWeight={700} color="#2E3131">
          Qeydiyyat
        </Text>
        <Text fontSize="15px" lineHeight="24px" color="#849097">
          Email hesabınızı və parolunuzu yazaraq giriş edə bilərsiz
        </Text>
        <Box w="224px" height="24px" m="28px auto">
          <Box width="224px" height="3px" borderRadius="4px" bg="#F3F6FD"></Box>
          <Flex fontSize="16px">
            <Box padding="8px 31px">
              <Link color="#959FA5" textDecoration="none">
                Telefon
              </Link>
            </Box>
            <Box padding="8px 31px">
              <Link fontWeight={500} color="#1E3A8A" textDecoration="none">
                E-mail
              </Link>
            </Box>
          </Flex>
        </Box>
        <FormControl mt="20px">
          <FormLabel fontSize="14px" color="#2D3131" lineHeight="24px">
            E-mail ünvanınız
          </FormLabel>
          <Input
            type="email"
            placeholder="Omars@gmail.com"
            _placeholder={{
              color: "#BDC3C7",
              fontSize: "14px",
              fontWeight: "400",
            }}
            padding="12px 16px 12px 12px"
            border="1px solid #E6ECFA"
            borderRadius="6px"
          />
          <FormLabel
            fontSize="14px"
            color="#2D3131"
            lineHeight="24px"
            mt="16px"
          >
            Şifrə
          </FormLabel>
          <InputGroup>
            <Input
              type="password"
              placeholder="**************"
              _placeholder={{
                color: "#BDC3C7",
                fontSize: "14px",
                fontWeight: "400",
              }}
              padding="12px 35px 12px 12px"
              border="1px solid #E6ECFA"
              borderRadius="6px"
            />
            <InputRightElement>
              <Image src={Eye} cursor="pointer" bg="white" pl="5px" />
            </InputRightElement>
          </InputGroup>
          <FormLabel
            fontSize="14px"
            color="#2D3131"
            lineHeight="24px"
            mt="16px"
          >
            Təkrar şifrə
          </FormLabel>
          <InputGroup>
            <Input
              type="password"
              placeholder="**************"
              _placeholder={{
                color: "#BDC3C7",
                fontSize: "14px",
                fontWeight: "400",
              }}
              padding="12px 35px 12px 12px"
              border="1px solid #E6ECFA"
              borderRadius="6px"
            />
            <InputRightElement>
              <Image src={Eye} cursor="pointer" bg="white" pl="5px" />
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Text mt="24px" fontSize="14px" textAlign="center">
          “Davam et” düyməsini sıxaraq, siz ClickPay -in{" "}
          <Link color="#0D52FF" textDecorationLine="underline">
            İstifadəçi Müqaviləsi
          </Link>{" "}
          şərtlərini qəbul edəcəksiniz
        </Text>
        <Button
          width="full"
          height="48px"
          color="white"
          mt="16px"
          colorScheme="telegram"
        >
          <Image
            src={Login}
            alt="icon"
            width="16px"
            mr="10px"
            fontWeight={600}
          />
          Daxil ol
        </Button>
        <Button width="full" height="48px" color="#1E293B" mt="8px">
          <Image
            src={simpleLogin}
            alt="icon"
            width="37px"
            mr="10px"
            color="white"
          />
          Asan imza ilə giriş
        </Button>
        <Text fontSize="14px" mt="12px">
          Hesabınız yoxdur?
          <Link
            fontSize="14px"
            fontWeight="500"
            color="#0D52FF"
            textDecoration="none"
            ml="6px"
          >
            Qeydiyyat
          </Link>
        </Text>
      </Box>
    </>
  );
}

export default SignUpEmail;
