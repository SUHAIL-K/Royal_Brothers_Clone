import React, { useState } from "react";
import { Box, CloseButton, Flex, Text,Link } from "@chakra-ui/react";
import styled from "styled-components";

export default function Banner({title}) {
    const [display,setDisplay] = useState(false);

    const handleDisplay = ()=>{
        setDisplay(!display)
    }
  return (
    // <Flex bg={"#fed250"} justify='space-between' alignItems={'center'} display={(!display) ? "flex" : "none"} >
    //   <Box ml={'600px'}>
    //     <Text fontFamily={'Mulish'} fontSize='12px' fontWeight={'bold'} color='blackAlpha.700' display={['none','none','block']}>Our delay policy has been changed <Link color={'blue.600'}>Know more</Link></Text>
    //   </Box>
    //   <Box>
    //     <CloseButton onClick={handleDisplay} display={['none','none','block']}/>
    //   </Box>
    // </Flex>

    <Container display={display}>
      <p>{title} <Link color={'blue.600'}>Know more</Link></p>
      <CloseButton onClick={handleDisplay} display={['none','none','block']}/>
    </Container>

  );
}

const Container = styled.div`
  display: ${props=>!props.display?'flex':'none'};
  background-color: #fed250;
  align-items: center;

  p{
    flex-grow: 1;
    text-align: center;
    font-family: Mulish;
    font-size: 0.9rem;
    color: black;
    font-size:12px;
  }
`;
