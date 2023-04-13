import React from 'react'
import { Stack,Checkbox,Flex } from '@chakra-ui/react';
import { useSelector,useDispatch } from 'react-redux';
import { BIKE_TAG_ADD,BIKE_TAG_REMOVE } from '../../Redux/search/actionType';

export default function BikeOptions() {
    const data = useSelector((store)=> store.searchReducer.cityData)
    const dispatch = useDispatch();
    const handleClick = (event,payload)=>{
    console.log(event.target.checked)
    if(event.target.checked===true){
      dispatch({type:BIKE_TAG_ADD,payload})
    }
    else{
      dispatch({
        type:BIKE_TAG_REMOVE,
        payload
      })
    }
  }
  return (
    <Stack h={"100px"} overflow="auto" border={'1px solid #c1c1c1'}p="5px 0px">
      {data.map((ele,idx) => {
        return (
          <Flex key={idx}
            alignItems={"center"}
            p="0px 25px"
            fontSize={"12px"}
            gap={3}
            h="25px"
            _hover={{
              background: "#f2f2f2",
            }}
            borderBottom="1px solid #f2f2f2"
            fontFamily={"Mulish"}
            fontWeight='light'
          >
            <Checkbox border={"grey"} bg={"white"} size={"sm"}  onChange={(e)=>handleClick(e,ele.model)}></Checkbox>
            {ele.model}
          </Flex>
        );
      })}
    </Stack>
  )
}
