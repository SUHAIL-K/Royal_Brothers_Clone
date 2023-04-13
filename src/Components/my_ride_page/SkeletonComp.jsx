import React from "react";
import { Skeleton, Stack } from "@chakra-ui/react";

export default function SkeletonComp() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      {arr.map((ele,idx) => {
        return (
          <Stack gap={2} key={idx}>
            <Skeleton height="300px" w="300px" />
            <Skeleton height="10px" w="300px" />
            <Skeleton height="10px" w="300px" />
            <Skeleton height="10px" w="300px" />
          </Stack>
        );
      })}
    </>
  );
}
