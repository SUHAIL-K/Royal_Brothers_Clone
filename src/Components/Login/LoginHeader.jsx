import React from "react";
import { Center, Text, Box, Heading, Flex, Spacer, Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react'
import Login from "./login";
import SignUP from "./signup";
import { useState } from "react";
import './LoginHeader.css'
function LoginHeader() {

    return (
        <Center>
            <Box boxShadow='xl' h='700px' w='375px' >
                <Center>
                    <Box>
                        <Flex direction='column'>
                            <Center mb='16px'><Text fontSize='3xl'>Rent . Ride . Explore</Text></Center>
                            <Box  pt='12px' mb='16px' w={'375px'} h={'50px'} >
                                <Flex>
                                    <Box w='375px'>
                                        <Tabs variant='unstyled'>
                                            <Center>
                                                <TabList >
                                                    <Tab _selected={{ borderBottom: '4px solid #fed250' }}>
                                                        <Box w='150px' h='36px'>
                                                            <Center>
                                                                <Heading as='button' size='sm'>LOGIN</Heading>
                                                            </Center>
                                                        </Box>
                                                    </Tab>
                                                    <Tab _selected={{ borderBottom: '4px solid #fed250' }}>
                                                        <Box w='150px' h='36px'>
                                                            <Center>
                                                                <Heading as='button' size='sm'>SIGN UP</Heading>
                                                            </Center>
                                                        </Box>
                                                    </Tab>
                                                </TabList>
                                            </Center>
                                            <TabPanels>
                                                <TabPanel>
                                                    <Login />
                                                </TabPanel>
                                                <TabPanel>
                                                    <SignUP />
                                                </TabPanel>
                                            </TabPanels>
                                        </Tabs>

                                    </Box>
                                </Flex>
                            </Box>
                        </Flex>
                    </Box>
                </Center>
            </Box>
        </Center>
    )
}
export default LoginHeader;