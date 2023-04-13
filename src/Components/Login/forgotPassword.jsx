import { Box, Center, Flex, Heading, Input, InputGroup, InputLeftAddon, LightMode, Text, useToast } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";


function ForgetPassword() {

    const navigate = useNavigate();

    const OTP = 5376;

    useEffect(() => { showPhoneNo() }, [])

    const toast = useToast()

    const storedData = useSelector((storeData) => {
        return storeData.LoginSignupRed.userDetails.phone
    })
    const showPhoneNo = () => {
        console.log(storedData)
        console.log('Your OTP is : ' + OTP)
    }
    const sendOtp = () => {
        // navigate('/resetpassword');
        return toast({
            position: 'top',
            title: 'Your OTP is : ' + OTP,
            description: "Don't share your OTP with anyone",
            status: 'success',
            duration: 4000,
            isClosable: true,
        })

    }
    return (
        <Center>
            <Box boxShadow='2xl' p='15px' w='450px' h='285px'>
                <Center mb='15px' borderBottom='1px solid #C0C0C0'><Heading mb='15px' fontSize='xl'>Forgot Password</Heading></Center>
                <Text mb='10px'>Enter Your Registered Mobile Number</Text>
                <Heading size='xs' mb='10px'>Mobile</Heading>
                <InputGroup mb='30px'>
                    <Flex>
                        <InputLeftAddon children='+91' />
                        <Input type="tle" width='263px'
                            value={storedData}
                        />
                    </Flex>
                </InputGroup>
                <Center>
                    <Link  to='/resetpassword'>
                        <Box onClick={sendOtp} borderRadius='md' as='button' bg='#fed250' h='50px' w='420px'>
                            <Heading size='xs'>Send</Heading>
                        </Box>
                    </Link>
                </Center>
            </Box>
        </Center>
    )
}
export default ForgetPassword;