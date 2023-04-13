import {
  Box,
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
  Flex,
  Button,
  CardFooter,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";

function TariffCard({onOpen,data}) {
  return (
    <Card>
      <CardBody p={0}>
        <Stack alignItems={"center"} p={5}>
          <Heading fontSize={"sm"} fontWeight={700}  fontFamily={'Mulish'}>
            {data.vehicle}
          </Heading>
          <Image
            w={"80%"}
            src={data.image}
          ></Image>
        </Stack>
        <Box>
          <Tabs color={"black"} isFitted variant='line' colorScheme='yellow'>
            <TabList boxShadow={"base"}>
              <Tab
                fontSize={"12px"} fontFamily={'Mulish'}
                // color={"black"}
                // _selected={{ color: "black", bg: "#ffe0e0" }}
              >
                HOURLY
              </Tab>
              <Tab
              fontSize={"12px"} fontFamily={'Mulish'}
                // color={"black"}
                // _selected={{ color: "black", bg: "#ffe0e0" }}
              >
                7 DAYS
              </Tab>
              <Tab
              fontSize={"12px"} fontFamily={'Mulish'}
                // color={"black"}
                // _selected={{ color: "black", bg: "#ffe0e0" }}
              >
                15 DAYS
              </Tab>
              <Tab
              fontSize={"12px"} fontFamily={'Mulish'}
                // color={"black"}
                // _selected={{ color: "black", bg: "#ffe0e0" }}
              >
                30 DAYS
              </Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Stack textAlign={"left"} spacing={1}>
                  <Stack spacing={.5}>
                    <Text fontSize={"13px"} fontWeight={500}>
                      Mon-Thu
                    </Text>
                    <Text  m={0} fontSize={"12px"} fontWeight={300}>
                      (Min 10 hrs booking)
                    </Text>
                    <Flex 
                      px={5}
                      columnGap={10}
                      justifyContent={"space-between"}
                    >
                      <Text width={"50%"} fontSize={"12px"} fontWeight={400}>
                        Booking Time (0- 24 hrs)
                      </Text>

                      <Text width={"50%"} fontSize={"12px"} fontWeight={400}>
                        ₹  <Text as={'span'} width={"50%"} fontSize={"12px"} fontWeight={700}>
                        {data.hourly.btime}
                      </Text>
                      </Text>
                    </Flex>
                    <Flex
                      px={5}
                      columnGap={10}
                      justifyContent={"space-between"}
                    >
                      <Text width={"50%"} fontSize={"12px"} fontWeight={400}>
                       {`Booking Time (>24 hrs)`}
                      </Text>

                      <Text width={"50%"} fontSize={"12px"} fontWeight={400}>
                        ₹  <Text as={'span'} width={"50%"} fontSize={"12px"} fontWeight={700}>
                        {data.hourly.btimeabove}
                      </Text>/hr
                      </Text>
                    </Flex>
                  </Stack>
                  <Stack spacing={1}>
                    <Text fontSize={"13px"} fontWeight={500}>
                      Fri-Sun
                    </Text>
                    <Text fontSize={"12px"} fontWeight={300}>
                      (Min 24hrs booking)
                    </Text>
                    <Flex
                      px={5}
                      columnGap={10}
                      justifyContent={"space-between"}
                    >
                      <Text
                        width={"50%"}
                        fontSize={"12px"}
                        fontWeight={400}
                      >{`Booking Time (>24hrs)`}</Text>

                      <Text width={"50%"} fontSize={"12px"} fontWeight={400}>
                        ₹  <Text as={'span'} width={"50%"} fontSize={"12px"} fontWeight={700}>
                        {data.hourly.btimeabove}
                      </Text>/hr
                      </Text>
                    </Flex>
                  </Stack>
                  <Stack spacing={.5}>
                    <Text fontSize={"13px"} fontWeight={500}>
                      Extras
                    </Text>
                   
                    <Flex
                      px={5}
                      columnGap={10}
                      justifyContent={"space-between"}
                    >
                      <Text width={"50%"} fontSize={"12px"} fontWeight={400}>
                        Km limit
                      </Text>

                      <Text width={"50%"} fontSize={"12px"} fontWeight={400}>
                      <Text as={'span'} width={"50%"} fontSize={"12px"} fontWeight={700}>
                      {data.hourly.kmlimit}
                      </Text>/hr
                      </Text>
                    </Flex>
                    <Flex
                      px={5}
                      columnGap={10}
                      justifyContent={"space-between"}
                    >
                      <Text width={"50%"} fontSize={"12px"} fontWeight={400}>
                        Excess km charges
                      </Text>

                      <Text width={"50%"} fontSize={"12px"} fontWeight={400}>
                        ₹   <Text as={'span'} width={"50%"} fontSize={"12px"} fontWeight={700}>
                        {data.hourly.excess}
                      </Text>
                      /km
                      </Text>
                    </Flex>
                  </Stack>
                </Stack>
              </TabPanel>
              <TabPanel>
                <Stack textAlign={"left"} spacing={1}>
                  <Stack spacing={.5}>
                    <Text fontFamily={'Mulish'} fontSize={"13px"} fontWeight={500}>
                    Rental Charges
                    </Text>
                   
                    <Flex 
                      px={5}
                      columnGap={10}
                      justifyContent={"space-between"}
                    >
                      <Text fontFamily={'Mulish'} width={"60%"} fontSize={"12px"} fontWeight={400}>
                      Price for 7 days
                      </Text>

                      <Text fontFamily={'Mulish'} width={"40%"} fontSize={"12px"} fontWeight={400}>
                        ₹  <Text fontFamily={'Mulish'} as={'span'} fontSize={"12px"} fontWeight={700}>
                        {data.seven.rental}
                      </Text>
                      </Text>
                    </Flex>
                    
                  </Stack>
                  <Stack spacing={1}>
                    <Text fontFamily={'Mulish'} fontSize={"13px"} fontWeight={500}>
                    Km Limit
                    </Text>
                    
                    <Flex
                      px={5}
                      columnGap={10}
                      justifyContent={"space-between"}
                    >
                      <Text fontFamily={'Mulish'}
                        width={"60%"}
                        fontSize={"12px"}
                        fontWeight={400}
                      >{`No of kms in 7 days that can be travelled without extra charges`}</Text>

                      <Text fontFamily={'Mulish'} width={"40%"} fontSize={"12px"} fontWeight={400}>
                         <Text as={'span'} width={"50%"} fontSize={"12px"} fontWeight={700}>
                         {data.seven.kmlimit}
                      </Text> Km
                      </Text>
                    </Flex>
                  </Stack>
                  <Stack spacing={.5}>
                    <Text fontFamily={'Mulish'} fontSize={"13px"} fontWeight={500}>
                    Excess Km Charges
                    </Text>
                   
                    <Flex
                      px={5}
                      columnGap={10}
                      justifyContent={"space-between"}
                    >
                      <Text fontFamily={'Mulish'} width={"60%"} fontSize={"12px"} fontWeight={400}>
                      Charges beyond the km limit
                      </Text>

                      <Text fontFamily={'Mulish'} width={"40%"} fontSize={"12px"} fontWeight={400}>
                        ₹   <Text fontFamily={'Mulish'} as={'span'} width={"50%"} fontSize={"12px"} fontWeight={700}>
                        {data.seven.excess}
                      </Text>
                      /km
                      </Text>
                    </Flex>
                    
                  </Stack>
                </Stack>
              </TabPanel>
              <TabPanel>
              <Stack textAlign={"left"} spacing={1}>
                  <Stack spacing={.5}>
                    <Text fontFamily={'Mulish'} fontSize={"13px"} fontWeight={500}>
                    Rental Charges
                    </Text>
                   
                    <Flex 
                      px={5}
                      columnGap={10}
                      justifyContent={"space-between"}
                    >
                      <Text fontFamily={'Mulish'} width={"60%"} fontSize={"12px"} fontWeight={400}>
                      Price for 15 days
                      </Text>

                      <Text fontFamily={'Mulish'} width={"40%"} fontSize={"12px"} fontWeight={400}>
                        ₹  <Text fontFamily={'Mulish'} as={'span'} fontSize={"12px"} fontWeight={700}>
                        {data.fifteen.rental}
                      </Text>
                      </Text>
                    </Flex>
                    
                  </Stack>
                  <Stack spacing={1}>
                    <Text fontFamily={'Mulish'}fontSize={"13px"} fontWeight={500}>
                    Km Limit
                    </Text>
                    
                    <Flex
                      px={5}
                      columnGap={10}
                      justifyContent={"space-between"}
                    >
                      <Text fontFamily={'Mulish'}
                        width={"60%"}
                        fontSize={"12px"}
                        fontWeight={400}
                      >{`No of kms in 15 days that can be travelled without extra charges`}</Text>

                      <Text fontFamily={'Mulish'} width={"40%"} fontSize={"12px"} fontWeight={400}>
                         <Text fontFamily={'Mulish'} as={'span'} width={"50%"} fontSize={"12px"} fontWeight={700}>
                         {data.fifteen.kmlimit}
                      </Text> Km
                      </Text>
                    </Flex>
                  </Stack>
                  <Stack spacing={.5}>
                    <Text fontFamily={'Mulish'} fontSize={"13px"} fontWeight={500}>
                    Excess Km Charges
                    </Text>
                   
                    <Flex
                      px={5}
                      columnGap={10}
                      justifyContent={"space-between"}
                    >
                      <Text fontFamily={'Mulish'} width={"60%"} fontSize={"12px"} fontWeight={400}>
                      Charges beyond the km limit
                      </Text>

                      <Text fontFamily={'Mulish'} width={"40%"} fontSize={"12px"} fontWeight={400}>
                        ₹   <Text fontFamily={'Mulish'} as={'span'} width={"50%"} fontSize={"12px"} fontWeight={700}>
                        {data.fifteen.excess}
                      </Text>
                      /km
                      </Text>
                    </Flex>
                    
                  </Stack>
                </Stack>
              </TabPanel>
              <TabPanel>
              <Stack textAlign={"left"} spacing={1}>
                  <Stack spacing={.5}>
                    <Text fontFamily={'Mulish'} fontSize={"13px"} fontWeight={500}>
                    Rental Charges
                    </Text>
                   
                    <Flex 
                      px={5}
                      columnGap={10}
                      justifyContent={"space-between"}
                    >
                      <Text fontFamily={'Mulish'} width={"60%"} fontSize={"12px"} fontWeight={400}>
                      Price for 30 days
                      </Text>

                      <Text fontFamily={'Mulish'} width={"40%"} fontSize={"12px"} fontWeight={400}>
                        ₹  <Text fontFamily={'Mulish'} as={'span'} fontSize={"12px"} fontWeight={700}>
                        {data.thirty.rental}
                      </Text>
                      </Text>
                    </Flex>
                    
                  </Stack>
                  <Stack spacing={1}>
                    <Text fontFamily={'Mulish'} fontSize={"13px"} fontWeight={500}>
                    Km Limit
                    </Text>
                    
                    <Flex
                      px={5}
                      columnGap={10}
                      justifyContent={"space-between"}
                    >
                      <Text fontFamily={'Mulish'}
                        width={"60%"}
                        fontSize={"12px"}
                        fontWeight={400}
                      >{`No of kms in 30 days that can be travelled without extra charges`}</Text>

                      <Text fontFamily={'Mulish'} width={"40%"} fontSize={"12px"} fontWeight={400}>
                         <Text fontFamily={'Mulish'} as={'span'} width={"50%"} fontSize={"12px"} fontWeight={700}>
                         {data.thirty.kmlimit}
                      </Text> Km
                      </Text>
                    </Flex>
                  </Stack>
                  <Stack spacing={.5}>
                    <Text fontFamily={'Mulish'} fontSize={"13px"} fontWeight={500}>
                    Excess Km Charges
                    </Text>
                   
                    <Flex
                      px={5}
                      columnGap={10}
                      justifyContent={"space-between"}
                    >
                      <Text fontFamily={'Mulish'} width={"60%"} fontSize={"12px"} fontWeight={400}>
                      Charges beyond the km limit
                      </Text>

                      <Text fontFamily={'Mulish'} width={"40%"} fontSize={"12px"} fontWeight={400}>
                        ₹   <Text fontFamily={'Mulish'} as={'span'} width={"50%"} fontSize={"12px"} fontWeight={700}>
                        {data.thirty.excess}
                      </Text>
                      /km
                      </Text>
                    </Flex>
                    
                  </Stack>
                </Stack>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
        
      </CardBody>
      <CardFooter mt={16} p={0}>
      <Box  width={'100%'} >
      <Link  to={`/search/${data.id}`}>
      <Button fontFamily={'Mulish'} borderRadius={0} colorScheme={'yellow'} bg={'#fed969'} width={'100%'} onClick={onOpen} >BOOK NOW</Button>
      </Link>
      </Box>
      </CardFooter>
    </Card>
    
  );
}

export default TariffCard;
