import React, { useEffect, useState } from "react";
import { IconMenu2 } from "@tabler/icons-react";
import styled from "styled-components";
import {
  Button,
  Box,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Input,
  DrawerFooter,
  Text,
  Divider,
} from "@chakra-ui/react";
import { ChevronDownIcon, MoonIcon } from "@chakra-ui/icons";
import { useDisclosure, IconButton } from "@chakra-ui/react";
import { useRef } from "react";
import NavWithLogin from "./Nav_with_Login";
import NavWithoutLogin from "./Nav_with_out_Login";
import { setLightMode, setDarkMode } from "../../Redux/themeMode/action";
import { Modal, ModalOverlay, ModalContent } from "@chakra-ui/react";

import { Link } from "react-router-dom";
import CityModal from "../CityModal";

import { useDispatch, useSelector } from "react-redux";
import ProfileMenu from "../Login/ProfileMenu";

function Navbar(props) {

    const [selectedCity, setSelectedCity] = useState("Bangalore")


    const isUserLoggedIn = useSelector((storeData) => {
        return storeData.LoginSignupRed.isLoggedIn

    })
    

    const { isOpen, onOpen, onClose } = useDisclosure();
    const { isOpen: isModalOpen, onOpen: onModalOpen, onClose: onModalClose } = useDisclosure({ defaultIsOpen: true });

    // useEffect(() => { onModalClose(true) }, [])

    const btnRef = React.useRef()

    const isDark = useSelector(state => state.themeReducer.dark);
    const dispatchTheme = useDispatch();

    function updateTheme() {
        // console.log(isDark)
        if (isDark) {
            dispatchTheme(setLightMode());
        } else {
            dispatchTheme(setDarkMode());
        }
    }
    console.log("Checking login auth",isUserLoggedIn)

  return (
    <Container isDark={isDark}>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>

          <DrawerBody>
            {/* <Input placeholder='Type here...' /> */}
            <DrawerButtons>
              <DrawerCard>
              <Link to="/tarrif">Tarrif</Link>
                </DrawerCard>
              <DrawerCard>
              <Link to="/search">Search</Link>
              </DrawerCard>
              <DrawerCard>
                <Link to="/blogs">Blog</Link>
              </DrawerCard>
              <DrawerCard>Partner With You</DrawerCard>
              <DrawerCard><Link to='/biketour'>Bike Tour</Link></DrawerCard>
              <DrawerCard>Indian Bike Routes</DrawerCard>
              <DrawerCard>About Us</DrawerCard>
              <DrawerCard>Terms & Condition</DrawerCard>
              <DrawerCard>Privacy Policy</DrawerCard>
              <DrawerCard>FAQ</DrawerCard>
              <DrawerCard>Reach Us</DrawerCard>
            </DrawerButtons>
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
      {/* Modal */}

      {/* <Modal isOpen={isModalOpen} onClose={onModalClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalContainer>
                        <ModalNavbar>
                            
                            <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/landing_page/royal_brothers_logo-229959d7727f356b2e4fc3bd9c0c527c60127d009c93989a93e2daa0b1c2d556.svg" alt="" />
                                                      
                            <Box borderLeft="1px solid #000000" height="100%" />
                            <Text>Bike Rentals</Text>
                        </ModalNavbar>
                        <ModalSearch>ssearch</ModalSearch>
                        <ModalBody>Body</ModalBody>
                    </ModalContainer>
                </ModalContent>
            </Modal> */}
            <CityModal isOpen={isModalOpen} setIsOpen={onModalClose} setSelectedCity={setSelectedCity} />
            {/* <Modal isOpen={isModalOpen} onClose={onModalClose}>
                Hello Modal
            </Modal> */}
            <Left>
                <MenuBtn ref={btnRef} onClick={onOpen}>
                    <IconMenu2 size={"32px"} color={isDark ? 'white' : 'black'} />
                </MenuBtn>
                <Link to='/'><img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/landing_page/royal_brothers_logo-229959d7727f356b2e4fc3bd9c0c527c60127d009c93989a93e2daa0b1c2d556.svg" alt="" /></Link>
            </Left>
            <Center>
                <CustomButton>
                    <Link to={"/tarrif"}>Tarrif</Link>
                </CustomButton>
                <CustomButton>What's New?</CustomButton>
                <CustomButton><Link to='/offers'>Offers</Link></CustomButton>
                <CustomButton>Partner with us</CustomButton>
            </Center>
            <Right isDark={isDark}>
                <Button rightIcon={<ChevronDownIcon />} leftIcon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                } bg={"#fed250"} colorScheme="#fed250" variant='outline' onClick={onModalOpen}>
                    {selectedCity}
                </Button>
                <Box className="divider" borderLeft="1px solid rgba(0,0,0,0.2)" height="100%" />
                <Box>
                   {
                    isUserLoggedIn ? <ProfileMenu/> : <NavWithoutLogin/>
                   }
                </Box>
                {/* <IconButton
                    colorScheme={!isDark ? 'blackAlpha' : 'whiteAlpha'}
                    aria-label='Search database'
                    icon={<MoonIcon />}
                    onClick={updateTheme}
                /> */}
            </Right>
        </Container >
    );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: ${(props) => (props.isDark ? "#2C3333" : "white")};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

const ModalContainer = styled.div``;
const ModalNavbar = styled.div`
  & > img {
    width: 100px;
  }
`;
const ModalSearch = styled.div``;
const ModalBody = styled.div``;

const DrawerButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const DrawerCard = styled.div`
  width: 100%;
  background-color: white;
  padding: 10px 0 10px 5px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 0.9rem;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  img {
    width: 120px;
  }
`;

const MenuBtn = styled.div``;

const Center = styled.div`
  display: flex;
  gap: 20px;
  font-size: 0.8rem;
  color: black;

  @media (max-width: 850px) {
    display: none;
  }
`;

const Right = styled.div`
  display: flex;
  gap: 10px;

  .authButton {
    @media (max-width: 850px) {
      display: none;
    }
  }

  .loginButton {
    color: ${(props) => (props.isDark ? "white" : "#2C3333")};
  }

  .divider {
    @media (max-width: 850px) {
      display: none;
    }
  }
`;

const CustomButton = styled.button``;

export default Navbar;
