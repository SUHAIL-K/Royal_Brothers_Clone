import { Box, Center, Flex, Heading, PinInput, PinInputField, Text } from "@chakra-ui/react";
import React from "react";
function LoginByOtp() {
    return (
        <Center>
            <Box h='355px' w='420px' border='1px'>
                <Center mb='30px' pt='15px' border='1px solid gray'> <Heading mb='15px' size='md'>Login with OTP</Heading></Center>
                <Center mb='30px'>
                    <Flex direction='column'>
                        <Text>Please enter the OTP sent to</Text>
                        <Text> +91 9720237940</Text>
                    </Flex>
                </Center>
                <Center>
                    <PinInput size='lg' otp>
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                    </PinInput>
                </Center>
                <Center>
                    <Box h='50px' w='380px' border='1px' as="button" borderRadius='md'>Verify</Box>
                </Center>
            </Box>
        </Center>
    )
}
export default LoginByOtp;