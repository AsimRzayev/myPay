import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";

export default function Language() {
  const [lang, setLang] = React.useState("AZ");
  return (
    <Menu>
      <MenuButton as={Button}>{lang}</MenuButton>
      <MenuList minW="60px" zIndex="2">
        <MenuItem onClick={() => setLang("AZ")}>AZ</MenuItem>
        <MenuItem onClick={() => setLang("EN")}>EN</MenuItem>
        <MenuItem onClick={() => setLang("RU")}>RU</MenuItem>
      </MenuList>
    </Menu>
  );
}
