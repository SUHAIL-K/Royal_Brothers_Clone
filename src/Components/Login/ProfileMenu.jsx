import { ChevronDownIcon } from "@chakra-ui/icons";
import { Box, Flex, Image, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import React from "react";
import NavWithLogin from "../Navbar/Nav_with_Login";
import { BiCalendarPlus } from "react-icons/bi";
import { CgProfile } from "react-icons/cg"
import { GrPower } from "react-icons/gr"
import ProfilePage from "./ProfilePage";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
function ProfileMenu() {
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const logout = () =>{
        dispatch({
            type:"LOGOUT",
            payload:false
        })
    }
    return (
        <Menu >
            <MenuButton>
                <NavWithLogin />
            </MenuButton>
            <MenuList>
                <Flex gap='10px' direction='column' p='8px'  >
                    <MenuItem>
                        <Flex gap='15px'>
                            <BiCalendarPlus fontSize='20px' />
                            <Text as='button' onClick={() =>{navigate('/myrides')}}>My Rides</Text>
                        </Flex>
                    </MenuItem>
                    <MenuItem>
                        <Flex gap='15px'>
                            <CgProfile fontSize='20px' />
                            <Text as='button' onClick={() =>{navigate('/profile')}}>My Profile</Text>
                        </Flex>
                    </MenuItem>
                    <MenuItem>
                        <Flex gap='15px'>
                            <GrPower fontSize='20px' />
                            <Text onClick={logout}>Logout</Text>
                        </Flex>
                    </MenuItem>
                </Flex>
            </MenuList>
        </Menu>
    )
}
export default ProfileMenu;
