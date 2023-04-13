import React, { useEffect } from "react";
import {
    Box, Center, FormControl, FormLabel, Input, Flex,
    InputLeftAddon, InputGroup, VStack, InputRightElement,
    Button, Checkbox, Spacer, Image, Heading, Wrap, WrapItem, useToast, Text,
} from '@chakra-ui/react'
import ReCAPTCHA from "react-google-recaptcha";
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function Login() {

    // states for collecting data 
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [phoneError, setPhoneError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [isCaptchCheckedIn, setIsCaptchaCheckedIn] = useState(false);

    const nav = useNavigate()

    // const [isLoggedIn, setIsLoggedIn] = useState(false);

    // useEffect(() => {
    //     setIsLoggedIn(true)

    // }, [Login])





    const dispatch = useDispatch();

    const toast = useToast()

    const storedData = useSelector((storeData) => { return storeData.LoginSignupRed })
    const login = useSelector((store)=> store.LoginSignupRed.userDetails.isLoggedIn)
    console.log("checking login value",login)
    // it is for hide and show password
    const [show, setShow] = React.useState(false)

//<<<<<<<<< Trying redirecting to last path >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// const navigate = useNavigate();
// const location = useLocation();
// const fromPathname = location?.state?.from?.pathname || '/';

    
//<<<<<<<<< Ending Trying redirecting to last path >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    const handleClick = () => setShow(!show)

    // it is for captcha implementation
    function onChange(value) {
        // console.log("Captcha value:", value);
        setIsCaptchaCheckedIn(true)
    }
    // it is for forget passowrd functioanality
    const FogetPassword = () => {
        // nav('/forgetPage')
        if (phone.length == 10 && (!isCaptchCheckedIn)) {
            return toast({
                position: 'top-right',
                title: 'Please verify capthca',
                // description: "Welcome to RoyalBrothers.com.",
                status: 'warning',
                duration: 2000,
                isClosable: true,
            })
        } if (phone.length == 0) {
            return toast({
                position: 'top-right',
                title: 'Enter phone number',
                // description: "Welcome to RoyalBrothers.com.",
                status: 'warning',
                duration: 2000,
                isClosable: true,
            })
        } if (phone.length == 10 && isCaptchCheckedIn) {   
            
        }
    }


    const CheakUserDetails = () => {
        if (phone === storedData.phone && password === storedData.password
            && (isCaptchCheckedIn)) {

            // console.log(storedData.isLoggedIn)
            dispatch({
                type: "ISLOGGEDIN",
                payload: !login
            })
            nav('/')
            return toast({
                position: 'top',
                title: 'LoggedIn successfully.',
                // description: "Welcome to RoyalBrothers.com.",
                status: 'success',
                duration: 2000,
                isClosable: true,
            })

        } else if (phone.length == 10 && password.length < 6 && (!isCaptchCheckedIn)) {
            return toast({
                position: 'top-right',
                title: 'Please verify capthca',
                // description: "Welcome to RoyalBrothers.com.",
                status: 'warning',
                duration: 2000,
                isClosable: true,
            })
        } else if (phone.length == 0 && password.length == 0 && (!isCaptchCheckedIn)) {

            return toast({
                position: 'top-right',
                title: 'Enter user details',
                // description: "Welcome to RoyalBrothers.com.",
                status: 'info',
                duration: 2000,
                isClosable: true,

            })
        }
        else {
            return toast({
                position: 'top-right',
                title: 'Invalid phone/password combination',
                // description: "Welcome to RoyalBrothers.com.",
                status: 'error',
                duration: 2000,
                isClosable: true,

            })
        }


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
        if (password.length < 6) {
            setPasswordError(true)
        } else {
            setPasswordError(false)
        }
        setPassword(password);
    }

    // it is for login by using otp functionality
    const LoginWithOtp = () => {

    }
    return (
        <Center >

            <Box w={'375px'} h={'515px'} boxShadow='2xl'>

                <FormControl>

                    <FormLabel>
                        <Box mt='20px' pl='25px' justify='right'>Phone</Box>
                    </FormLabel>

                    <Flex direction='column' p='0px 25px 0px 25px'>

                        <InputGroup>
                            <Flex>
                                <InputLeftAddon children='+91' />
                                <Input type="tel" width='263px'
                                    value={phone} onChange={handlePhone}
                                />
                            </Flex>
                        </InputGroup>
                        {/* it is for showing phone number error */}
                        <Box mb='30px'>
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
                        <Box mb='13px'>
                            {
                                (passwordError) ? <Text fontSize='xs' color='red'>Password must be greater than 5 digits</Text> : ""
                            }
                        </Box>

                        <Flex mb='27px'>
                            <Box><Checkbox>Remember password?</Checkbox></Box>
                            <Spacer />
                            <Link to='/forgetpage'><Box as='button' onClick={FogetPassword} fontSize='sm' color='blue'>Forgot Password?</Box></Link>
                        </Flex>

                        <Center mb='28px'>
                            <Box h='75px' w='300px' borderRadius='3px' border='1px solid #DCDCDC'>
                                <ReCAPTCHA
                                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                                    onChange={onChange}
                                />
                            </Box>
                        </Center>

                        <Box mb='8px' as='button' h='50px' w='325px'
                            bg='#fed250' borderRadius='4px'
                            onClick={CheakUserDetails}
                        >
                            <Center h='50px'><Heading size='sm'>Login with Password</Heading></Center>
                        </Box>

                    </Flex>
                    <Center mb='8px'>OR</Center>
                    <Center>
                        <Link to='/loginwithotp'>
                            <Box bg='#E8E8E8' as='button' h='50px' w='325px' >
                                <Center h='50px'><Heading size='sm' onClick={() => {
                            toast({
                                title: 'an OTP has been sent to you phone!',
                                description: "Chill man",
                                status: 'success',
                                duration: 3000,
                                isClosable: true,
                            });
                            setTimeout(() => {
                                return nav("/forgetpage")

                            }, 3000); // Redirect after 3 seconds
                        }}>Login with OTP</Heading></Center>
                            </Box>
                        </Link>
                    </Center>
                </FormControl>

            </Box>

        </Center >
    )
}
export default Login;