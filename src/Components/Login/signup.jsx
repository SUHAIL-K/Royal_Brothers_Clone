import React from "react";
import {
    Box, Center, FormLabel, Input, Flex,

    InputLeftAddon, InputGroup, VStack, InputRightElement,FormControl,
    Button, Checkbox, Spacer, Image, Heading, Wrap, WrapItem, useAccordion, Toast, useToast, FormHelperText, FormErrorMessage, Alert, AlertIcon, Text,

} from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";
import { useDispatch } from 'react-redux'
function SignUP() {

    const dispatch = useDispatch();

    const toast = useToast()
    // states for collecting data 

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [nameError, setNameError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [isCaptchCheckedIn, setIsCaptchaCheckedIn] = useState(false);

    const EmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/


    const UserDetailsObj = { name, email, phone, password }

    const SaveUserDetails = () => {
        // console.log(UserDetailsObj)
        if (name, email, phone, password) {
            dispatch({
                type: "SIGNUP",
                payload: UserDetailsObj
            })
        }
    }

    const Registered = () => {
        if (name.length >= 3 && email.match(EmailRegex) &&
            phone.length == 10 && password.length >= 6 && (isCaptchCheckedIn)) {

            return toast({
                position: 'top',
                title: 'Registered successfully.',
                description: "Welcome to RoyalBrothers.com.",
                status: 'success',
                duration: 2000,
                isClosable: true,
            })

        } else if (name.length >= 3 && email.match(EmailRegex) &&
            phone.length == 10 && password.length >= 6 && (!isCaptchCheckedIn)) {
            return toast({
                position: 'top-right',
                title: 'Please verify capthca',
                // description: "Welcome to RoyalBrothers.com.",
                status: 'warning',
                duration: 2000,
                isClosable: true,
            })
        } else if (name.length == 0 || email.length == 0 ||
            phone.length == 0 || password.length == 0 || (!isCaptchCheckedIn)) {
            return toast({
                position: 'top',
                title: 'Please fill all the details',
                // description: "Welcome to RoyalBrothers.com.",
                status: 'warning',
                duration: 2000,
                isClosable: true,
            })
        }
    }

    // it is for hide and show password
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    // it is for capthca implementation
    function onChange(value) {
        // console.log("Captcha value:", value);
        setIsCaptchaCheckedIn(true)
    }
    // it is for validation
    const handleName = (e) => {
        let name = e.target.value;
        if (name.length < 3) {
            setNameError(true)
        } else {
            setNameError(false)
        }
        setName(name);
    }

    const handlePhone = (e) => {
        let phone = e.target.value
        if (phone.length == 10) {
            setPhoneError(false)
        } else {
            setPhoneError(true)
        }
        setPhone(phone)
    }

    const handlePassword = (e) => {
        let password = e.target.value
        if (password.length < 5) {
            setPasswordError(true)
        } else {
            setPasswordError(false)
        }
        setPassword(password)
    }

    const handleEmail = (e) => {
        let email = e.target.value
        if (!email.match(EmailRegex)) {
            setEmailError(true)
        } else {
            setEmailError(false)
        }
        setEmail(email)
    }



    return (
        <Center>
            <Box w={'375px'} h={'520px'} boxShadow='2xl' >

                <FormControl>

                    <Flex direction='column' p='0px 25px 0px 25px'>
                        <Input mt='32px' variant='filled'
                            placeholder='Name as per Aadhaar/Passport'
                            value={name} onChange={handleName}
                        />
                        {/* it is for showing name error */}
                        <Box mb='32px'>{
                            (nameError) ? <Text fontSize='xs' color='red'>Name must be greater than 2 characters</Text> : ""
                        }
                        </Box>

                        <Input variant='filled' placeholder='Email'
                            value={email} onChange={handleEmail} />
                        {/* it is for showing email error */}
                        <Box mb='5px'>
                            {
                                (emailError) ? <Text fontSize='xs' color='red'>Invalid E-mail</Text> : ""
                            }
                        </Box>
                        <FormLabel>
                            <Box pl='5px' justify='right'>Mobile</Box>
                        </FormLabel>
                        <InputGroup>
                            <Flex >
                                <InputLeftAddon children='+91' />
                                <Input type="tle" placeholder='As per Aadhaar' width='263px'
                                    value={phone} onChange={handlePhone} />
                            </Flex>
                        </InputGroup>
                        {/* it is for showing phone error */}
                        <Box mb='32px'>
                            {
                                (phoneError) ? <Text fontSize='xs' color='red'>Phone number must have 10 digits</Text> : ""
                            }
                        </Box>
                        <InputGroup size='md'>
                            <Input
                                pr='4.5rem'
                                type={show ? 'text' : 'password'}
                                variant='filled'
                                placeholder='Enter password'
                                value={password} onChange={handlePassword}
                            />

                            <InputRightElement width='4.5rem'>
                                <Button h='1.75rem' size='lg' onClick={handleClick}>
                                    {show ? <ViewOffIcon /> : <ViewIcon />}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                        {/* it is for showing password error */}
                        <Box mb='32px'>
                            {
                                (passwordError) ? <Text fontSize='xs' color='red'>Password must be greater than 5 digits</Text> : ""
                            }
                        </Box>
                        <Center mb='28px'>
                            <Box h='75px' w='300px' borderRadius='3px' border='1px solid #DCDCDC'>
                                <ReCAPTCHA
                                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                                    onChange={onChange}
                                />
                            </Box>
                        </Center>
                        <Box mb='8px' as='button' h='50px' w='325px'
                             bg='#fed250' borderRadius='4px' onClick={() => { SaveUserDetails(); Registered()}}>
                            <Center h='50px'><Heading size='sm' >Sign Up</Heading></Center>

                        </Box>
                    </Flex>
                </FormControl>
            </Box>
        </Center>
    )
}
export default SignUP;
