import { Grid, Stack, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import CardComp from "./CardComp";
import {useDispatch, useSelector} from 'react-redux'
import { getData } from "../../Redux/search/action";
import SkeletonComp from "./SkeletonComp";
import { useSearchParams } from "react-router-dom";
import { filterbyBikeModel } from "../../Redux/search/action";
// import { sortingFunction } from "../../Redux/search/action";

export default function Relevance() {
  const cityData = useSelector((store)=> store.searchReducer.cityData)
  const loading = useSelector((store)=> store.searchReducer.isLoading)
  const duration = useSelector((store)=>store.searchReducer.rentalDetails)
  const filterData = useSelector((store)=>store.searchReducer.filterData)
  

  //<<<<<<<<<<<<<<<<<<<<<<<<< Updated codes begin>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>s


  //<<<<<<<<<<<<<<<<<<<<<<<<< Updated codes Ends>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>s
  return (
    <Stack>
      <Text textAlign={"center"} mb='1rem'>
        *All prices are exclusive of taxes and fuel. Images used for
        representation purposes only, actual color may vary.
      </Text>
      <Grid templateColumns={["repeat(1,1fr)","repeat(2,1fr)","repeat(2,1fr)","repeat(3,1fr)"]} gap={6}>
        {loading && <SkeletonComp/>}
        { filterData.length>0 ? filterData.map((ele)=>{
          return <CardComp {...ele} key={ele.id} {...duration}/>
        }) : cityData.map((ele) => {
          return <CardComp {...ele} key={ele.id} {...duration}/>;
        })}
      </Grid>
    </Stack>
  );
}

