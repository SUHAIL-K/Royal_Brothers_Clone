import {
  Flex,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Text,
  Stack,
} from "@chakra-ui/react";
import React,{useState} from "react";
import Filter from "./Filter";
import HighToLow from "./HighToLow";
import LowToHigh from "./LowToHigh";
import Relevance from "./Relevance";
import { useSelector } from "react-redux";
import { Box,CloseButton } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import Banner from "../Banner/Banner";


export default function Search() {
  const [display,setDisplay] = useState(false);

  const isDark = useSelector(state => state.themeReducer.dark);
  console.log(isDark);
  const handleDisplay = ()=>{
    setDisplay(!display)
}
  return (
    <Stack>
      {/* <Flex bg={"#fed250"} justify='space-between' alignItems={'center'} display={(!display) ? "flex" : "none"}>
      <Box ml={'500px'}>
        <Text fontFamily={'Mulish'} fontSize='12px' fontWeight={'bold'} color='blackAlpha.700' display={['none','none','block']}>Now rent two wheelers for 7 days at a lower special price.<Link color={'blue.600'}> Click here for modified search.</Link></Text>
      </Box>
      <Box>
        <CloseButton onClick={handleDisplay} display={['none','none','block']}/>
      </Box>
      </Flex> */}
      <Banner title="Now rent two wheelers for 7 days at a lower special price." />
    <Flex pr={'30px'} >
      <Filter />
      <Tabs w={"100%"} variant='unstyled' mt={'5px'}>
        <Flex alignItems={"center"}>
          <Text fontSize={"14px"} fontWeight='bold' fontFamily={'Mulish'}>Sort by</Text>
          <TabList>
            <Tab fontSize={"14px"}  fontFamily={'Mulish'} _selected={{borderBottom:'2px solid #fed250',fontWeight:'bold'}}>Relevance</Tab>
            <Tab fontSize={"14px"}  fontFamily={'Mulish'} _selected={{borderBottom:'2px solid #fed250',fontWeight:'bold'}}>Price - Low to High</Tab>
            <Tab fontSize={"14px"}  fontFamily={'Mulish'} _selected={{borderBottom:'2px solid #fed250',fontWeight:'bold'}}>Price - High to Low</Tab>
          </TabList>
        </Flex>
        <hr color={'grey'}/>
        <TabPanels>
          <TabPanel>
            <Relevance />
          </TabPanel>
          <TabPanel>
            <LowToHigh />
          </TabPanel>
          <TabPanel>
            <HighToLow/>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
    </Stack>
  );
}
