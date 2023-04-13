import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Grid,
  Link,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import MyRideFilter from "./MyRideFilter";
import RideCard from "./RideCard";
import { useDispatch, useSelector } from "react-redux";
import { getMyRide } from "../../Redux/myrides/actionmyride";
import axios from "axios";
import SkeletonComp from "./SkeletonComp";
import { useLocation, useSearchParams } from "react-router-dom";

function MyRides(props) {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const [searchParams]=useSearchParams()
  const routeLocation=useLocation()

  const loading = useSelector((store)=> {return store.myRideReducer.loading})
  //const [dataArr,setDataArr]=useState([])

  const dataArr = useSelector((store) => {
    return store.myRideReducer.vehicles;
  });

  const obj={
    params:{
      location:searchParams.getAll("location"),
      vehicle:searchParams.getAll("vehicle"),
      status:searchParams.get('status'),
      _sort:searchParams.get("_sort"),
      _order:searchParams.get('_order')
    }
  }
  const handleData = () => {
    dispatch(getMyRide(obj));
    console.log('params',obj);

  };


  useEffect(() => {
    handleData();
  
  }, [dispatch,routeLocation.search]);


  return (
    <Box m={5}>
     
      {dataArr.length > 0 ? (
        <Flex columnGap={5} flexDirection={['column','column','column','row','row']}>
          <Box w={["100%","100%","100%","40%","30%"]}>
            <MyRideFilter data={dataArr}></MyRideFilter>
          </Box>
          <Grid
            width={["100%","100%","100%","60%","70%"]}
            templateColumns={[
              "repeat(1, 1fr)",
              "repeat(1, 1fr)",
              "repeat(2, 1fr)",
              "repeat(2, 1fr)",
              "repeat(3, 1fr)",
            ]}
            gap={6}
          >
             {loading && <SkeletonComp/>}
            {dataArr.map((el, i) => {
              return (
                <Box key={i}>
                  <RideCard data={el}></RideCard>
                </Box>
              );
            })}
          </Grid>
        </Flex>
      ) : (
        <NoData></NoData>
      )}
    </Box>
  );
}

function NoData() {
  return (
    <Box mt={10}>
      <Card
        w={"40%"}
        m="auto"
        shadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
      >
        <CardBody>
          <Text fontFamily={"Mulish"}>
            No upcoming trips.
            <Link fontFamily={"Mulish"} color={"yellow.400"}>
              Plan one now!
            </Link>
          </Text>
        </CardBody>
      </Card>
    </Box>
  );
}

export default MyRides;
