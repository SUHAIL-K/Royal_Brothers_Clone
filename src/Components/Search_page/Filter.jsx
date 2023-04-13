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
import Overflow from "./Overflow";
import TagComp from "./TagComp";
import { useDispatch, useSelector } from "react-redux";
import BikeOptions from "./BikeOptions";
import BikeTags from "./BikeTags";
import { FILTER_DATA, GET_DATA_SUCCESS } from "../../Redux/search/actionType";
import { useSearchParams } from "react-router-dom";
import {
  findingDfferenceFunction,
  rentalDateAndTimeFunction,
} from "../../Redux/search/action";
import { BIKE_FILTER, SORTED_HIGH_LOW_FILTER, SORTED_LOW_HIGH_FILTER } from "../../Redux/newUpdate/actionType";
import { bikeFilterFunction, sortHighToLow, sortLowToHigh } from "../../Redux/newUpdate/action";

export default function Filter() {
  const locationTags = useSelector((store) => store.searchReducer.locationTags);
  const bikeTags = useSelector((store) => store.searchReducer.bikeTags);
  const data = useSelector((store) => store.searchReducer.cityData);
  const dataArrayCity = useSelector((store) => store.searchReducer.cityData);
  const durationOfRent = useSelector(
    (store) => store.searchReducer.rentalDetails
  );
  const differenceInHours = useSelector(
    (store) => store.searchReducer.duration
  );
  const bikeFilter = useSelector((store) => store.searchReducer.bikeTags);
  const rentalTime = useSelector((store) => store.searchReducer.rentalDetails);
  const dispatch = useDispatch();
  //const [locationFilterData, SetLocationFilterData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [dateValue, setDateValue] = useState("");
  const [dropDate, setDropDate] = useState("");
  const [pickTime, setPickTime] = useState("");
  const [dropTime, setDropTime] = useState("");
  const [inputLocation, setInputLocation] = useState();

  console.log("checking bike tags details", bikeFilter);

  //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Taking input search location data >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const handleSearchLocationInput = (event) => {
    const { value, name } = event.target;
    if (name === "searchLocation") {
      console.log("test");
    } else if (name === "bikeSearch") {
      console.log("test");
    }
  };

  //>>>>>>>>>>>>>>>>>>>Finding data <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  let date = new Date();
  let todayDate = date.getDate();
  let month = date.getMonth() + 1;
  if (month < 10) month = "0" + month;
  let year = date.getUTCFullYear();
  let min = year + "-" + month + "-" + todayDate;
  // let timeHours = date.getHours();
  // let minutes = date.getMinutes();

  // let timeNow = timeHours+":"+minutes;
  // console.log(timeNow)
  //>>>>>>>>>>>>>>>>>>>End Finding data

  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Converting the Date into String value Begins <<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  const handleDateChange = (event) => {
    let currentDate = event.target.value;
    const parts = currentDate.split("-"); // Split the input date string into day, month, and year parts
    const day = parts[2];
    const month = parts[1];
    const year = parts[0];
    console.log(day, month, year);

    // Create a new Date object with the input date
    const dateObj = new Date(year, month - 1, day);

    // Get the month name abbreviation from the Date object
    const monthAbbreviation = dateObj.toLocaleString("default", {
      month: "short",
    });

    // Format the output date string in the desired format
    const outputDate = `${day} ${monthAbbreviation}, ${year}`;
    event.target.type = "text";
    if (event.target.name === "pickupDate") {
      setDateValue(outputDate);
    } else if (event.target.name === "dropDate") {
      setDropDate(outputDate);
    } // Output: "17 Mar, 2023"
  };
  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Ends <<<<<<<<<<<<<<<<<<<<<<<<<<<

  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Converting the Time into String value Begins <<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  const handleTimeChange = (event) => {
    let timeNow = event.target.value;
    var timeArray = timeNow.split(":");
    var hours = parseInt(timeArray[0]);
    var minutes = timeArray[1];
    var meridiem = "am";

    if (hours > 12) {
      hours = hours - 12;
      meridiem = "pm";
    }

    if (hours === 0) {
      hours = 12;
    }
    event.target.type = "text";
    if (event.target.name === "pickTime") {
      setPickTime(hours + ":" + minutes + " " + meridiem);
    } else if (event.target.name === "dropTime") {
      setDropTime(hours + ":" + minutes + " " + meridiem);
    }
  };

  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Ends <<<<<<<<<<<<<<<<<<<<<<<<<<<
  
  const filterlocation = () => {
    // console.log(locationTags);
    let filted = data.filter((ele) => {
      for (let i = 0; i < locationTags.length; i++) {
        if (ele.location.includes(locationTags[i])) {
          return true;
        }
      }
      return false;
    });
    return filted.length>0 ? filted : data;
  };

  const filterByBikeModel = ()=>{
    let bikeData = filterlocation().filter((ele)=>{
      for(let i=0; i<bikeFilter.length; i++){
        if(ele.model.includes(bikeFilter[i])){
          return true;
        }
      }
      return false
    })
    return bikeData.length>0 ? bikeData : filterlocation();
  }
  
  //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< ButtonClick Function >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const handleClick = () => {
    // dispatch({ type: FILTER_DATA, payload: locationFilterData });
    // setSearchParams({
    //   location: locationTags,
    // });
    // dispatch(filterbyBikeModel(bikeFilter))

  //<<<<<<<<<<<<<<<<<<<<<<<<<< Update begins >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
   let locationFilterData = filterByBikeModel();
   console.log("inside location store data",locationFilterData)
   dispatch({ type: FILTER_DATA, payload: locationFilterData });
  let sortedLowToHighData = [...locationFilterData].sort(sortLowToHigh)
  // console.log("inside click bike filter data",sortedLowToHigh)
  dispatch({type:SORTED_LOW_HIGH_FILTER,payload:sortedLowToHighData})

  let sortedHighToLowData = [...locationFilterData].sort(sortHighToLow)
  dispatch({type:SORTED_HIGH_LOW_FILTER,payload:sortedHighToLowData})

  //<<<<<<<<<<<<<<<<<<<<<<<Update Ends >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    dispatch(
      rentalDateAndTimeFunction({
        pickupDate: dateValue === "" ? rentalTime.pickupDate : dateValue,
        pickupTime: pickTime === "" ? rentalTime.pickupTime : pickTime,
        dropoffDate: dropDate === "" ? rentalTime.dropoffDate : dropDate,
        dropoffTime: dropTime === "" ? rentalTime.dropoffTime : dropTime,
      })
    );
  };

  const handleFocusDate = (event) => {
    event.target.type = "date";
  };
  const handleFocusTime = (event) => {
    event.target.type = "time";
  };
  //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  Ends >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Trying to display selected date in boxes >>>>>>>>>>>>>>>>>>>>>>>>


  //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Trying to display selected date in boxes >>>>>>>>>>>>>>>>>>>>>>>>
  return (
    <Stack
      width={"450px"}
      p="5px 15px"
      display={["none", "none", "none", "block"]}
    >
      <Text
        fontSize={"20px"}
        fontWeight="bold"
        p={"0px 15px"}
        fontFamily={"Mulish"}
      >
        Filter
      </Text>
      <Divider />
      <Stack p={"0px 15px"} height={"500px"} overflow="auto" gap={4}>
        <Box>
          <Text
            fontSize={"14px"}
            fontWeight="bold"
            mb={2}
            fontFamily={"Mulish"}
          >
            Select Date & Time
          </Text>
          <Flex gap={4} justify="space-between" mb={"15px"}>
            <Box>
              <Text fontSize={"14px"} w={"200px"} fontFamily={"Mulish"}>
                Pickup date
              </Text>
              <Input
                variant="flushed"
                size={"xs"}
                type="text"
                placeholder=""
                min={min}
                name="pickupDate"
                // value={rentalTime.pickupDate}
                borderBottom={"1px solid #c1c1c1"}
                onFocus={handleFocusDate}
                onChange={handleDateChange}
              />
            </Box>
            <Box>
              <Text fontSize={"14px"} fontFamily={"Mulish"}>
                Time
              </Text>
              <Input
                variant="flushed"
                size={"xs"}
                type="text"
                placeholder=""
                onFocus={handleFocusTime}
                // value={rentalTime.pickupTime}
                //min={timeNow}
                name="pickTime"
                borderBottom={"1px solid #c1c1c1"}
                onChange={handleTimeChange}
              />
            </Box>
          </Flex>
          <Flex gap={4} justify="space-between" mb={"15px"}>
            <Box>
              <Text fontSize={"14px"} w={"200px"} fontFamily={"Mulish"}>
                Dropoff date
              </Text>
              <Input
                variant="flushed"
                size={"xs"}
                type="text"
                placeholder=""
                min={min}
                name="dropDate"
                // value={rentalTime.dropoffDate}
                onFocus={handleFocusDate}
                onChange={handleDateChange}
                borderBottom={"1px solid #c1c1c1"}
              />
            </Box>
            <Box>
              <Text fontSize={"14px"} fontFamily={"Mulish"}>
                Time
              </Text>
              <Input
                variant="flushed"
                size={"xs"}
                type="text"
                // min={timeNow}
                name="dropTime"
                // value={rentalTime.dropoffTime}
                placeholder=""
                onFocus={handleFocusTime}
                borderBottom={"1px solid #c1c1c1"}
                onChange={handleTimeChange}
              />
            </Box>
          </Flex>
        </Box>
        <Box>
          <Text
            fontSize={"14px"}
            fontWeight="bold"
            mb={2}
            mt={-3}
            fontFamily={"Mulish"}
          >
            Search Duration
          </Text>
          {!isNaN(differenceInHours.days) && (
            <Flex gap={2} fontSize={"14px"}>
              <Text>
                {differenceInHours.days !== 0
                  ? differenceInHours.days + " Days"
                  : ""}
              </Text>
              <Text>
                {differenceInHours.hours !== 0
                  ? differenceInHours.hours + " Hours"
                  : ""}
              </Text>
              <Text>
                {differenceInHours.minutes !== 0
                  ? differenceInHours.minutes + " Minutes"
                  : ""}
              </Text>
            </Flex>
          )}
        </Box>
        <Box>
          <Flex justify={"space-between"}>
            <Text
              fontSize={"14px"}
              fontWeight="bold"
              mb={2}
              fontFamily={"Mulish"}
            >
              Search by Location
            </Text>
            {locationTags.length > 0 && (
              <Tag
                h={"10px"}
                key={"xs"}
                w="70px"
                borderRadius="full"
                variant="solid"
                bg="#f2f2f2"
                color={"black"}
              >
                <TagLabel
                  fontSize={"10px"}
                  ml="5px"
                  fontFamily={"Mulish"}
                  fontWeight="light"
                >
                  Clear
                </TagLabel>
                <TagCloseButton fontSize={"15px"} />
              </Tag>
            )}
          </Flex>
          <Flex gap={4} mb={2}>
            {locationTags &&
              locationTags.map((ele, idx) => {
                return <TagComp key={idx} tag={ele} />;
              })}
          </Flex>
          <InputGroup>
            <Input
              variant={"flushed"}
              placeholder="Search Location"
              name="searchLocation"
              size={"xs"}
              fontSize={"14px"}
              borderBottom={"1px solid #c1c1c1"}
              onChange={handleSearchLocationInput}
            />
            <InputRightElement
              pointerEvents="none"
              children={<GrSearch />}
              size={"xs"}
              mt={-2}
            />
          </InputGroup>
        </Box>
        <Box>
          <Overflow />
        </Box>
        <Box>
          <Flex justify={"space-between"}>
            <Text
              fontSize={"14px"}
              fontWeight="bold"
              mb={2}
              fontFamily={"Mulish"}
            >
              Search by bike model
            </Text>
            {bikeTags.length > 0 && (
              <Tag
                h={"10px"}
                key={"xs"}
                w="70px"
                borderRadius="full"
                variant="solid"
                bg="#f2f2f2"
                color={"black"}
              >
                <TagLabel
                  fontSize={"10px"}
                  ml="5px"
                  fontFamily={"Mulish"}
                  fontWeight="light"
                >
                  Clear
                </TagLabel>
                <TagCloseButton fontSize={"15px"} />
              </Tag>
            )}
          </Flex>
          <Flex gap={4} mb={2}>
            {bikeTags &&
              bikeTags.map((ele, idx) => {
                return <BikeTags key={idx} bikeTag={ele} />;
              })}
          </Flex>
          <InputGroup>
            <Input
              variant={"flushed"}
              placeholder="Search Bike Model"
              fontSize={"14px"}
              size={"xs"}
              name="bikeSearch"
              borderBottom={"1px solid #c1c1c1"}
              onChange={handleSearchLocationInput}
            />
            <InputRightElement
              pointerEvents="none"
              children={<GrSearch />}
              size={"xs"}
              mt={-2}
            />
          </InputGroup>
        </Box>
        <Box>
          <BikeOptions />
        </Box>
      </Stack>
      <Box p={"10px"} boxShadow="md">
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
      </Box>
    </Stack>
  );
}
