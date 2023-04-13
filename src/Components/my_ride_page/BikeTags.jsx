import React from "react";
import { Tag, TagLabel, TagCloseButton } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { BIKE_TAG_REMOVE } from "../../Redux/myrides/actiontype";

export default function BikeTags({bikeTag}) {
    const dispatch = useDispatch();

  return (
    <Tag
      size={"md"}
      borderRadius="full"
      variant="solid"
      bg={"#f2f2f2"}
      color="black"
      w={"100px"}
    >
      <TagLabel fontFamily={"Mulish"} fontWeight="light" fontSize="10px">
        {bikeTag}
      </TagLabel>
      <TagCloseButton onClick={()=>dispatch({type:BIKE_TAG_REMOVE,payload:bikeTag})}/>
    </Tag>
  );
}
