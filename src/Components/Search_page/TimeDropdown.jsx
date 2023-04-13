import React from "react";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";

export default function TimeDropdown() {
  return (
    <Menu>
      <MenuButton
        as={Button}
        variant="flushed"
        borderBottom="1px solid"
        borderRadius="none"
        fontSize={'12px'}
      >
        8:30 am
      </MenuButton>
      <MenuList h="100px" overflow="auto" fontSize={'12px'} w='50px'>
        <MenuItem>8:30 AM</MenuItem>
        <MenuItem>8:30 AM</MenuItem>
        <MenuItem>8:30 AM</MenuItem>
        <MenuItem>8:30 AM</MenuItem>
        <MenuItem>8:30 AM</MenuItem>
      </MenuList>
    </Menu>
  );
}
