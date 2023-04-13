import {
  Box,
  Flex,
  Image,
  Text,
  Select,
  Input,
  Button,
} from "@chakra-ui/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  StackDivider,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Summary({ model, price, img, location, total, setTotal, rentalData }) {
  const duration = useSelector((store) => store.searchReducer.duration);
  const [prices, setPrice] = useState(price);
  const [selectedOption, setSelectedOption] = useState("1");

   console.log(duration);
  useEffect(() => {
    setTotal(price*duration.hours);
    setPrice(price);
  }, [price]);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    if (option === "1") {
      setPrice((prev) => {
        return prev - 50;
      });
      setTotal((prev) => {
        return prev - 100;
      });

      console.log("hi harsh");
    }
    if (option === "2") {
      setPrice((prev) => {
        return prev + 50;
      });
      setTotal((prev) => {
        return prev + 100;
      });

      console.log("hi harsh");
    } else {
      // setPrices(price);
    }
  };

  const handleApplyCoupon = () => {
    const couponInput = document.getElementById("couponInput");
    if (couponInput.value === "masai10") {
      console.log("hello harsh");
      setTotal((prev) => {
        return prev - 100;
      });
      couponInput.value = "";
    } else if (couponInput.value === "free") {
      console.log("hello harsh");
      setTotal((prev) => {
        return 0;
      });
      couponInput.value = "";
    } else {
      alert("Coupon not valid");
    }
    setTotal((prev) => {
        if(prev<0) return 0
        return prev
      });
  };
  
  const options = ["1", "2"];

  return (
    <Card
      p={"20px"}
      m={"20px"}
      boxShadow={
        " rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
      }
    >
      <Heading size="md" p={"20px"}>
        {" "}
        Summary
      </Heading>
      <Flex
        flexDirection={{ sm: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
      >
        <Box mb="2" p={8}>
          <Image src={img} alt="Product image" w={"350px"} h={"200px"} />
          <Text align={"center"} p={"10px"} fontWeight="bold">
            {model}
          </Text>
        </Box>
        <Box w="100%">
          {/* <CardHeader>
                        <Heading size="md">Card header</Heading>
                    </CardHeader> */}

          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              <Box
                my={4}
                display="flex"
                justifyContent="space-between"
                w="100%"
              >
                <Text>
                  {rentalData.pickupTime}
                  <br />
                  {rentalData.pickupDate}
                </Text>
                <Text>to</Text>
                <Text>
                  {rentalData.dropoffTime}
                  <br />
                  {rentalData.dropoffDate}
                </Text>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  {/* Address */}
                </Heading>
                <Text pt="2" fontSize="sm">
                  {location}
                  Metro station, Cafe coffee day basement, #560/1, Rooby Arcade,
                  4th Cross, Chinmaya Mission Hospital Rd, next to Indiranagar,
                  <br />
                  Indira Nagar 1st Stage, Bengaluru, Karnataka 560038
                </Text>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  {/* Hours */}
                </Heading>
                <Text pt="2" fontSize="sm">
                  <Box
                    my={4}
                    display="flex"
                    justifyContent="space-between"
                    w="100%"
                  >
                    <Text>Weekday - 70.5 hrs * rupee18.0/hr </Text>
                    <Text>₹ {prices} </Text>
                  </Box>
                  <Box
                    my={4}
                    display="flex"
                    justifyContent="space-between"
                    w="100%"
                  >
                    <Text>Weekend - 72 hrs * rupee18.0/hr </Text>
                    <Text>₹ {prices} </Text>
                  </Box>
                  <Box
                    my={4}
                    display="flex"
                    justifyContent="space-between"
                    w="100%"
                  >
                    <Text>Total</Text>
                    <Text>₹ {total}</Text>
                  </Box>

                  <Box
                    my={4}
                    display="flex"
                    justifyContent="space-between"
                    w="100%"
                  >
                    <Text>Number of Helmets (?)</Text>
                    {/* <Select size='sm' w={20} >
                                            {options.map(option => (
                                                <option key={option} value={option}>{option}</option>
                                            ))}
                                        </Select> */}
                    <Select
                      size="sm"
                      w={20}
                      value={selectedOption}
                      onChange={(e) => handleOptionChange(e.target.value)}
                    >
                      {options.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </Select>
                  </Box>

                  <Box
                    my={4}
                    display="flex"
                    justifyContent="space-between"
                    w="100%"
                  >
                    <Input
                      type="text"
                      mr={2}
                      borderBottom={"1px"}
                      placeholder={"Apply Coupon"}
                      outline={"none"}
                      focusBorderColor={"transparent"}
                      id="couponInput"
                      onChange={(e) => {}}
                    />
                    <Button
                      bg="brand.500"
                      colorScheme={"brand.500"}
                      color={"black"}
                      w={200}
                      onClick={handleApplyCoupon}
                      _hover={{
                        background: "yellow.400",
                        boxShadow:
                          "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
                      }}
                    >
                      Apply
                    </Button>
                  </Box>
                </Text>
              </Box>
              <Box>
                <Box
                  my={4}
                  display="flex"
                  justifyContent="space-between"
                  w="100%"
                >
                  <Text>Km limit (?) </Text>
                  <Text>713 km</Text>
                </Box>
                <Box
                  my={4}
                  display="flex"
                  justifyContent="space-between"
                  w="100%"
                >
                  <Text>Excess km charges (?) </Text>
                  <Text>4.0/km</Text>
                </Box>
                {/* <Heading size="xs" textTransform="uppercase">
                                    Analysis
                                </Heading>
                                <Text pt="2" fontSize="sm">
                                    See a detailed analysis of all your business clients.
                                </Text> */}
              </Box>
            </Stack>
          </CardBody>
        </Box>
      </Flex>
    </Card>
  );
}

export default Summary;
