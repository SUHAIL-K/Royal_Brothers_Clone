import { Box, Center, Flex, Heading, Input, Text, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
function ResetPassword() {
    const [password, setPassword] = useState("");
    const [otp, setOtp] = useState();
    const [otpError, setOtpError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const GeneratedOtp = 5376;

    const toast = useToast()

    const handleOtp = (e) => {
        let otp = e.target.value
        if (otp.length < 4) {
            setOtpError(true)
        } else {
            setOtpError(false)
        }
        setOtp(otp);
    }

    const handlePassword = (e) => {
        let password = e.target.value
        if (password.length < 6) {
            setPasswordError(true)
        } else {
            setPasswordError(false)
        }
        setPassword(password);
    }

    const ChangePassword = () => {
        if (GeneratedOtp == otp && password.length >= 6) {
            return toast({
                position: 'top-right',
                title: 'Your password has been reset now',
                // description: "Welcome to RoyalBrothers.com.",
                status: 'success',
                duration: 2000,
                isClosable: true,

            })
        } else if (GeneratedOtp !== otp && password.length >= 6) {
            return toast({
                position: 'top-right',
                title: 'Invalid OTP',
                // description: "Welcome to RoyalBrothers.com.",
                status: 'error',
                duration: 2000,
                isClosable: true,

            })

        }
         else {
            return toast({
                position: 'top-right',
                title: 'Fill all details',
                // description: "Welcome to RoyalBrothers.com.",
                status: 'error',
                duration: 2000,
                isClosable: true,

            })
        }
    }
    return (
        <Center>
            <Box  p='15px' h='465px' w='470px' boxShadow='2xl'>
                <Center mb='20px' borderBottom='1px solid #C0C0C0'><Heading pt='15px' mb='20px' size='md'>Reset Password</Heading></Center>
                <Center mb='10px'><Text>Enter OTP and New Password</Text></Center>
                <Input variant='filled' placeholder='OTP'
                    value={otp} onChange={handleOtp} />
                {/* it is for shoeing otp error */}
                <Box mb='35px'>
                    {
                        (otpError) ? <Text fontSize='xs' color='red'>OTP must have 4 digits</Text> : ""
                    }
                </Box>
                <Input mb='15px' variant='filled' placeholder='New Password'
                    value={password} onChange={handlePassword} />
                {/* it is for showing password error */}
                <Box mb='13px'>
                    {
                        (passwordError) ? <Text fontSize='xs' color='red'>Password must be greater than 5 digits</Text> : ""
                    }
                </Box>

                <Text mb='40px'>*OTP Expires in 10 minutes</Text>
                <Center mb='15px'>
                    <Flex gap='10px'>
                        <Box h='50px' w='210px' pt='10px' borderRadius='md' bg='#dcdcdc'><Center>Resend</Center></Box>
                        <Box h='50px' w='210px' pt='10px' borderRadius='md' bg='#dcdcdc'><Center>Call Me</Center></Box>
                    </Flex>
                </Center>
                <Center>
                    <Box h='50px' w='430px' pt='10px' bg='#fed250' as='button'
                        borderRadius='md' onClick={ChangePassword} ><Center>Submit</Center></Box>
                </Center>
            </Box>
        </Center>
    )
}
export default ResetPassword;