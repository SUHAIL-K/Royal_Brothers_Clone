import { Box, Button, Center, Flex, Heading, HStack, Image, List, ListIcon, ListItem, Radio, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { MdOutlineModeEditOutline, MdOutlineAddCircle, MdAdd } from 'react-icons/md';
import { ImRadioChecked } from 'react-icons/im';
import { useEffect } from "react";
import { useSelector } from "react-redux";


function ProfilePage() {

    const storedData = useSelector((storeData) => { return storeData.LoginSignupRed })

    useEffect(() => { getUserDetails() }, [])

    const getUserDetails = () => {
        console.log(storedData)
    }
    return (
        <Center>
            <Stack direction={['column', 'row']} spacing='35px'>
                <Box>
                    <Flex direction='column' gap='15px'>
                        <Box pl='15px' h='270px' w='280px' boxShadow='xl' borderRadius='md'>
                            <Heading color='#A9A9A9' fontSize='lg'>PROFILE</Heading>
                            <Center mb='15px'>
                                <Image src="https://d36g7qg6pk2cm7.cloudfront.net/assets/profile-f17aa1dfbd0cb562142f1dcb10bb7ad33e1ac8417ad29a1cdab7dfbfbbfe2f15.png"
                                    boxSize='90px' />
                            </Center>
                            <Flex direction='column'>
                                <Heading mb='15px' size='sm' color='#696969'>{storedData.name}</Heading>
                                <Text mb='10px' fontSize='sm'>+91 {storedData.phone}</Text>
                                <Flex mb='10px' gap='20px'>
                                    <Text fontSize='sm'>{storedData.email}</Text>
                                    <MdOutlineModeEditOutline />
                                </Flex>
                                <Text fontSize='sm'>Available Travel Credits : 0</Text>
                            </Flex>

                        </Box>
                        <Box pt='20px' h='100px' w='280px' boxShadow='xl' borderRadius='md'>
                            <Heading pl='20px' mb='10px' size='xs' color='#808080'>My Wallet Balance :0.0</Heading>
                            <Center><Box as="button" h='40px' w='250px'
                                bg='#fed250' borderRadius='md' >Check My Wallet</Box></Center>
                        </Box>
                    </Flex>
                </Box>
                <Box pl='20px' pt='15px' w='610px' h='720px' borderRadius='md' boxShadow='2xl' >

                    <Heading mb='15px' fontSize='lg' color='#A9A9A9'>UPLOAD DOCUMENTS</Heading>
                    <Text fontSize='sm' mb='10px' color='#A9A9A9'>Driving License</Text>

                    <Flex mb='15px' direction='column' gap='8px'>
                        <Flex gap='40px'>
                            <Flex direction='column'>
                                <Box h='65px' w='65px' border='1px' borderRadius='md' borderColor='#C0C0C0'>
                                    <Center pt='15px'><MdOutlineAddCircle size='32px' color='#A9A9A9' /></Center>
                                </Box>
                                <Text fontSize='xs' color='#C0C0C0'>Front Side</Text>
                            </Flex>
                            <Flex direction='column'>
                                <Box h='65px' w='65px' border='1px' borderRadius='md' borderColor='#C0C0C0'>
                                    <Center pt='15px'><MdOutlineAddCircle size='32px' color='#A9A9A9' /></Center>
                                </Box>
                                <Text fontSize='xs' color='#C0C0C0'>Back Side</Text>
                            </Flex>
                            <Box h='65px' w='65px' border='1px' borderRadius='md' borderColor='#C0C0C0'>
                                <Center pt='15px'><MdAdd size='32px' color='#A9A9A9' /></Center>
                            </Box>
                        </Flex>
                        <Text fontSize='sm' color='#A9A9A9'>ID Proofs</Text>
                        <Flex gap='40px'>
                            <Flex direction='column'>
                                <Box h='65px' w='65px' border='1px' borderRadius='md' borderColor='#C0C0C0'>
                                    <Center pt='15px'><MdOutlineAddCircle size='32px' color='#A9A9A9' /></Center>
                                </Box>
                                <Text fontSize='xs' color='#C0C0C0'>Front Side</Text>
                            </Flex>
                            <Flex direction='column'>
                                <Box h='65px' w='65px' border='1px' borderRadius='md' borderColor='#C0C0C0'>
                                    <Center pt='15px'><MdOutlineAddCircle size='32px' color='#A9A9A9' /></Center>
                                </Box>
                                <Text fontSize='xs' color='#C0C0C0'>Back Side</Text>
                            </Flex>
                            <Box h='65px' w='65px' border='1px' borderRadius='md' borderColor='#C0C0C0'>
                                <Center pt='15px'><MdAdd size='32px' color='#A9A9A9' /></Center>
                            </Box>
                        </Flex>
                    </Flex>
                    <Button mb='25px' bg='#DCDCDC' color='#A9A9A9'>UPLOAD</Button>
                    <Heading size='md' color='#A9A9A9' mb='10px'>Account Status</ Heading>
                    <Flex mb='30px' gap='10px'>
                        <ImRadioChecked color="#A9A9A9" />
                        <Text color='#A9A9A9'>Awaiting document upload</Text>
                    </Flex>
                    <Box bg='#f2f2f2' w='580px' h='250px'>
                        <Heading mb='10px' size='sm' color='#A9A9A9'>Guidelines to Follow</Heading>
                        <Flex lineHeight='16px' color='#696969' direction='column'>
                            <Text fontSize='xs'>* Upload both sides of the DL in appropriate fields.</Text>
                            <Text fontSize='xs'>* Please upload the picture of the original DL and Aadhar card.</Text>
                            <Text fontSize='xs'>* ID and Address proof can be an Adhaar card or Passport.</Text>
                            <Text fontSize='xs'>* Please ensure that the uploaded images of the documents are clear and visible for faster approval.</Text>
                            <Text fontSize='xs'>* Passport is mandatory for hiring superbikes.</Text>
                            <Text fontSize='xs'>* If you have signed up on the Royal brothers platform from a different phone number than the phone number used for your Aadhaar card, then please upload any of the following documents additionally - PAN and Passport.</Text>
                            <Text fontSize='xs'>* Except Bangalore, customers will have to submit the original driving license at the time of pickup, it will be returned at the time of returning the vehicle..</Text>
                            <Text fontSize='xs'>* Learner License, Photocopy, Color Xerox, Screenshots, Scanned Copies are not Applicable.</Text>
                            <Text fontSize='xs'>* Please carry the Original documents for verification at the time of pickup..</Text>
                            <Text fontSize='xs'>* Vehicle will be issued only as per the Driving license eligibility.</Text>
                        </Flex>
                    </Box>

                </Box>
            </Stack>
        </Center>
    )
}
export default ProfilePage;
// added navigation