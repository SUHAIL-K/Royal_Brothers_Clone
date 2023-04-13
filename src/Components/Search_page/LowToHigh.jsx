import React, { useEffect } from "react";
import { Grid, Stack, Text } from "@chakra-ui/react";
import CardComp from "./CardComp";
import { useDispatch, useSelector } from "react-redux";
import SkeletonComp from "./SkeletonComp";
import { sortFunction } from "../../Redux/newUpdate/action";
// import { sortingFunction } from "../../Redux/search/action";

export default function LowToHigh() {
  //<<<<<<<<<<<<<<<<<<<<<<<<< Updated codes begin>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>s
  const dispatch = useDispatch();
  const lowArray = useSelector((store) => store.sortNfilterReducer.lowToHigh);
  const loading = useSelector((store) => store.searchReducer.isLoading);
  const duration = useSelector((store) => store.searchReducer.rentalDetails);
  // const filterData = useSelector((store)=>store.searchReducer.filterData)
  // console.log(filterData);
  const sortedNFilteredData = useSelector((store)=>store.sortNfilterReducer.sortedLowToHigh)

  useEffect(() => {
    dispatch(sortFunction("asc"));
  }, [dispatch]);

  //<<<<<<<<<<<<<<<<<<<<<<<<< Updated codes Ends>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>s

  return (
    <Stack>
      {/* New Udates */}

      <Text textAlign={"center"} mb="1rem" fontFamily={"Mulish"}>
        *All prices are exclusive of taxes and fuel. Images used for
        representation purposes only, actual color may vary.
      </Text>
      <Grid
        templateColumns={[
          "repeat(1,1fr)",
          "repeat(2,1fr)",
          "repeat(2,1fr)",
          "repeat(3,1fr)",
        ]}
        gap={6}
      >
        {loading && <SkeletonComp />}
        {sortedNFilteredData.length>0 ? sortedNFilteredData.map((ele,idx)=>{
            return <CardComp {...ele} key={ele.id} {...duration} />
        }) : lowArray.map((ele, idx) => {
          return <CardComp {...ele} key={ele.id} {...duration} />;
        })}
      </Grid>
    </Stack>
  );
}
