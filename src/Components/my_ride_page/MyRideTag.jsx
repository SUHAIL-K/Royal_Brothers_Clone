
import React from "react";
import { Tag, TagLabel, TagCloseButton } from "@chakra-ui/react";
function MyRideTag(props) {
    return (
        <Tag
      size={"md"}
      borderRadius="full"
      variant="solid"
      bg={"#f2f2f2"}
      color="black"
    >
      <TagLabel fontFamily={'Mulish'} fontWeight='light' fontSize='10px'>Place</TagLabel>
      <TagCloseButton />
    </Tag>
    );
}

export default MyRideTag;