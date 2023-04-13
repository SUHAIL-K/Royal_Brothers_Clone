import React, { useEffect,useState } from "react";
import {
  Card,
  CardBody,
  Image,
  Text,
  Button,
  Flex,
  Box,
  Select,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { CHECKOUT_OBJECT } from "../../Redux/search/actionType";

export default function CardComp({
  id,
  img,
  price,
  name,
  location,
  pickupDate,
  pickupTime,
  dropoffDate,
  dropoffTime,
}) {
  const differenceInHours = useSelector(
    (store) => store.searchReducer.duration
  );
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  
  const takeLocation = (event) => {
    setSearchParams({
      id: id,
      location: event.target.value,
      price:price
    });
  };
  //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Resetting the url afet reloading >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // // Get the current URL
  // const currentUrl = window.location.href;

  // // Remove the search parameters from the URL
  // const newUrl = currentUrl.split("?")[0];

  // // Use history.replaceState() to modify the current URL
  // console.log(history.replaceState(null, null, newUrl));

  //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Ends resetting >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  useEffect(() => {
    const params = {
      location:searchParams.get("location"),
      id:searchParams.get('id'),
      price:searchParams.get('price'),
    }
    if(params.location!==null){
      console.log(params)
      dispatch({type:CHECKOUT_OBJECT,payload:params})
    }
   

  }, [searchParams]);

  return (
    <Card
      maxW="sm"
      boxShadow={
        "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
      }
      pb={0}
    >
      <Flex p={"2px 10px"} gap={2} alignItems="center">
        <Image
          src="https://d36g7qg6pk2cm7.cloudfront.net/assets/zero-deposit-8bf3350f651efc75cb1e263459707c81cdd271347d2ba925cd2eb740243474d5.png"
          width={"20px"}
          h="20px"
        />
        <Text fontSize={"12px"} fontFamily={"Mulish"}>
          Zero Deposit
        </Text>
      </Flex>
      <CardBody>
        <Text
          fontSize={"1rem"}
          mb="10px"
          fontWeight={"bold"}
          textAlign="center"
          fontFamily={"Mulish"}
        >
          {name}
        </Text>
        <Image
          h={"150px"}
          w="250px"
          src={img}
          textAlign={"center"}
          m="0px auto"
          mb="10px"
        ></Image>
        <hr
          style={{ height: "6px", backgroundColor: "#f6f6f6", border: "none" }}
        />
        <Text textAlign={"center"} fontSize="12px" fontFamily={"Mulish"}>
          Available at
        </Text>
        {/* Select */}
        <Select
          variant="flushed"
          placeholder="Location"
          borderBottom={"1px solid black"}
          mb="10px"
          fontSize="14px"
          pl={"8"}
          size={"xs"}
          fontFamily={"Mulish"}
          textAlign="center"
          onChange={takeLocation}
          styles={{
            option: {
              _hover: {
                background: "gray.200",
              },
            },
          }}
        >
          <option
            style={{
              color: "green",
              fontWeight: "bold",
              textAlign: "left",
              paddingLeft: "15px",
              fontFamily: "Mulish",
            }}
            disabled
          >
            Fully Available
          </option>
          {location &&
            location.map((ele, idx) => {
              return (
                <option
                  key={idx}
                  style={{ textAlign: "left", paddingLeft: "20px"}}
                >
                  {ele}
                </option>
              );
            })}
        </Select>
        <hr
          style={{ height: "6px", backgroundColor: "#f6f6f6", border: "none" }}
        />
        <Flex justify={"space-between"} mb="10px" mt={"20px"}>
          <Box>
            <Text fontWeight={"bold"} fontSize="14px" fontFamily={"Mulish"}>
              {pickupDate}
            </Text>
            <Text fontSize="12px" fontFamily={"Mulish"}>
              {pickupTime}
            </Text>
          </Box>
          <Box>
            <Button
              bg="black"
              color={"white"}
              width="15px"
              borderRadius="50%"
              fontSize={"14px"}
              _hover={{
                background: "black",
              }}
              fontFamily={"Mulish"}
            >
              to
            </Button>
          </Box>
          <Box>
            <Text fontWeight={"bold"} fontSize="14px" fontFamily={"Mulish"}>
              {dropoffDate}
            </Text>
            <Text fontSize="12px" fontFamily={"Mulish"}>
              {dropoffTime}
            </Text>
          </Box>
        </Flex>
        <hr
          style={{ height: "6px", backgroundColor: "#f6f6f6", border: "none" }}
        />
        <Flex justify={"space-between"} mt="10px">
          <Box>
            <Text
              fontWeight={"bold"}
              fontSize="14px"
              textAlign={"center"}
              fontFamily={"Mulish"}
            >
              ₹{" "}
              {!isNaN(differenceInHours.hours)
                ? price * differenceInHours.hours
                : price}
            </Text>
            <Text fontSize="12px" fontFamily={"Mulish"}>
              (50 km included)
            </Text>
          </Box>
          <Box>
            <Link to={`/search/${id}`}>
              <Button
                bg={"#fed250"}
                width={['80px','100px',"150px"]}
                _hover={{
                  background: "yellow.400",
                  boxShadow:
                    "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
                }}
                fontFamily={"Mulish"}
              >
                Book
              </Button>
            </Link>
          </Box>
        </Flex>
      </CardBody>
    </Card>
  );
}
