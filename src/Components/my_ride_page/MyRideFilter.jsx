import {
  Stack,
  Box,
  Text,
  Divider,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Tag,
  TagLabel,
  TagCloseButton,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { GrSearch } from "react-icons/gr";
import MyRideOverflow from "./MyRideOverflow";
import TagComp from "./TagComp";
import { useDispatch, useSelector } from "react-redux";
import BikeOptions from "./BikeOptions";
import BikeTags from "./BikeTags";
import {
  ADD_MYRIDES,
  BIKE_TAG_CLEAR,
  LOCATION_TAG_CLEAR,
  STATUS_ALL,
  STATUS_CANCEL,
  STATUS_COMPLETE,
  STATUS_PENDING,
} from "../../Redux/myrides/actiontype";
import { useSearchParams } from "react-router-dom";
import { getMyRide } from "../../Redux/myrides/actionmyride";

export default function MyRideFilter() {
  const locationTags = useSelector((store) => store.myRideReducer.locationTags);
  const bikeTags = useSelector((store) => store.myRideReducer.bikeTags);
  const fStatus = useSelector((store) => store.myRideReducer.fstatus);
  const data = useSelector((store) => store.myRideReducer.vehicles);
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const filterStatus = (st) => {
    dispatch({ type: st });
    setSearchParams({
      location: locationTags,
      vehicle: bikeTags,
      status: fStatus,
    });
  };

  const sortLowToHigh = () => {
    //  dispatch(getMyRide(`?_sort=amount&_order=asc`));
    setSearchParams({
      location: locationTags,
      vehicle: bikeTags,
      status: fStatus,
      _sort: "amount",
      _order: "asc",
    });
  };
  const sortHighToLow = () => {
    //  dispatch(getMyRide(`?_sort=amount&_order=desc`));
    setSearchParams({
      location: locationTags,
      vehicle: bikeTags,
      status: fStatus,
      _sort: "amount",
      _order: "desc",
    });
  };
  const sortAll = () => {
    dispatch(getMyRide(``));
  };

  const handleClick = () => {
    // dispatch({ type: ADD_MYRIDES, payload: locationFilterData });
    setSearchParams({
      location: locationTags,
      vehicle: bikeTags,
    });
  };

  useEffect(() => {
    //  setSLocation(locationTags)
    // filterlocation();
  }, [locationTags, bikeTags, fStatus]);

  return (
    <Stack
      fontFamily={"Mulish"}
      p="5px 15px"
      // display={["none", "none", "none", "block"]}
    >
      <Box pl={2}>
        <Flex justify={"space-between"}>
          <Text fontSize={"20px"} fontWeight="bold" fontFamily={"Mulish"}>
            Sort
          </Text>
        </Flex>
        <Flex gap={5} wrap={"wrap"} >
          <Button
            fontSize={"sm"}
            colorScheme={"yellow"}
            height={8}
            onClick={() => {
              sortLowToHigh();
            }}
          >
            Price low to high
          </Button>
          <Button
            fontSize={"sm"}
            colorScheme={"yellow"}
            height={8}
            onClick={() => {
              sortHighToLow();
            }}
          >
            Price hight to low
          </Button>
        </Flex>
      </Box>

      <Divider />
      <Stack
        textAlign={"left"}
        p={"0px 15px"}
        height={"500px"}
        overflow="auto"
        gap={2}
      >
        <Text mt={5} fontSize={"20px"} fontWeight="bold" fontFamily={"Mulish"}>
          Filter
        </Text>
        <Box>
          <Flex justify={"space-between"}>
            <Text
              fontSize={"14px"}
              fontWeight="bold"
              mb={2}
              fontFamily={"Mulish"}
            >
              Filter By Status
            </Text>
           
          </Flex>
          <Flex rowGap={5} wrap={"wrap"} justifyContent={"space-between"}>
            <Button
              fontSize={"sm"}
              h={8}
              colorScheme={"yellow"}
              onClick={() => {
                dispatch({ type: STATUS_ALL });
                setSearchParams({
                  location: locationTags,
                  vehicle: bikeTags,
                });
              }}
            >
              All
            </Button>
            <Button
              fontSize={"sm"}
              h={8}
              colorScheme={"yellow"}
              onClick={() => {
                filterStatus(STATUS_PENDING);
              }}
            >
              Pending
            </Button>
            <Button
              fontSize={"sm"}
              h={8}
              colorScheme={"yellow"}
              onClick={() => {
                filterStatus(STATUS_COMPLETE);
              }}
            >
              Completed
            </Button>
            <Button
              fontSize={"sm"}
              h={8}
              colorScheme={"yellow"}
              onClick={() => {
                filterStatus(STATUS_CANCEL);
              }}
            >
              Cancelled
            </Button>
          </Flex>
        </Box>

        <Box>
          <Flex justify={"space-between"}>
            <Text
              fontSize={"14px"}
              fontWeight="bold"
              fontFamily={"Mulish"}
            >
              Search by Location
            </Text>
           
          </Flex>
          <Flex gap={4} mb={2}>
            {locationTags &&
              locationTags.map((ele, idx) => {
                return <TagComp key={idx} tag={ele} />;
              })}
          </Flex>
        
        </Box>
        <Box>
          <MyRideOverflow />
        </Box>
        <Box>
          <Flex justify={"space-between"}>
            <Text
              fontSize={"14px"}
              fontWeight="bold"
             
              fontFamily={"Mulish"}
            >
              Search by bike model
            </Text>
            
          </Flex>
          <Flex gap={4} mb={2}>
            {bikeTags &&
              bikeTags.map((ele, idx) => {
                return <BikeTags key={idx} bikeTag={ele} />;
              })}
          </Flex>

        </Box>
        <Box>
          <BikeOptions />
        </Box>
      </Stack>
      <Flex
        gap={5}
        flexDirection={["column", "column", "column", "row", "row"]}
        p={"10px"}
        boxShadow="md"
      >
        <Button
          width={"100%"}
          bg="#fed250"
          _hover={{
            background: "yellow.400",
            boxShadow:
              "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
          }}
          fontFamily={"Mulish"}
          onClick={handleClick}
        >
          Apply Filters
        </Button>
        <Button
          width={"100%"}
          bg="#fed250"
          _hover={{
            background: "yellow.400",
            boxShadow:
              "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
          }}
          fontFamily={"Mulish"}
          onClick={() => {
            setSearchParams({});
            dispatch({ type: BIKE_TAG_CLEAR });
            dispatch({ type: LOCATION_TAG_CLEAR });
          }}
        >
          Clear Filters
        </Button>
      </Flex>
    </Stack>
  );
}
