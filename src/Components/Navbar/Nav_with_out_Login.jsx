import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
function NavWithoutLogin() {
    return (
        <Box>
            <Box className="divider" borderLeft="1px solid rgba(0,0,0,0.2)" height="100%" />
            <Link to='/login'>
                <Button className="authButton" borderColor={"transparent"} color="gray.500" colorScheme='brand.500' variant='outline'>
                    LogIn
                </Button>
            </Link>

            <Link to='/signUp'>
                <Button className="authButton" bg={"brand.500"} color="black" colorScheme='brand.500' variant='solid'>

                    SignUp
                </Button>
            </Link>
        </Box>
    )
}
export default NavWithoutLogin;