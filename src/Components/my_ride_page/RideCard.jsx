import {
  Box,
  Card,
  Text,
  CardBody,
  Stack,
  CardHeader,
  Heading,
  Image,
  Divider,
  Flex,
  Button,
  Badge,
  Circle,
} from "@chakra-ui/react";
import React from "react";

function RideCard({ data }) {
  return (
    <Box w={"100%"}>
      <Card
        w={"100%"}
        m="auto"
        shadow={
          "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
        }
      >
        <CardHeader p={2} pt={6}>
          <Text fontWeight={700} size="md" fontFamily={"Mulish"}>
            {data.vehicle}
          </Text>
        </CardHeader>
        <CardBody p={0}>
          <Stack>
            <Stack p={2} alignItems={"center"}>
              <Image w={200} src={data.image}></Image>
            </Stack>
            <Divider h={1} bg="blackAlpha.100"></Divider>
            <Box py={1} px={2}>
              <Text
                fontSize={"smaller"}
                color={"blackAlpha.600"}
                fontFamily={"Mulish"}
              >
                Location
              </Text>
              <Text fontFamily={"Mulish"} fontSize={"sm"}>
                {data.location}
              </Text>
            </Box>
            <Divider h={1} bg="blackAlpha.100"></Divider>
            <Flex py={1} px={10} justify={"space-between"} alignItems="center">
              <Box textAlign={"left"}>
                <Text fontFamily={"Mulish"} fontSize={"sm"} fontWeight={700}>
                  {data.timefrom}
                </Text>
                <Text fontFamily={"Mulish"} fontSize={"smaller"}>
                  {data.datefrom}
                </Text>
              </Box>
              <Circle size="35px" bg="black" color="white">
                <Text fontFamily={"Mulish"} fontSize={"sm"}>
                  to
                </Text>
              </Circle>
              <Box textAlign={"right"}>
                <Text fontFamily={"Mulish"} fontSize={"sm"} fontWeight={700}>
                  {data.timeto}
                </Text>
                <Text fontFamily={"Mulish"} fontSize={"smaller"}>
                  {data.dateto}
                </Text>
              </Box>
            </Flex>
            <Divider h={1} bg="blackAlpha.100"></Divider>
            <Flex columnGap={5} py={1} px={5} justify={"space-between"}>
              <Flex
                width={"50%"}
                flexDirection={"column"}
                alignItems={"center"}
              >
                <Text fontFamily={"Mulish"} fontWeight={500}>
                  ₹ {data.amount}
                </Text>
                <Badge
                  variant="subtle"
                  colorScheme={data.status === "booked" ? "green" : "yellow"}
                  fontFamily={"Mulish"}
                >
                  {data.status === "booked" ? "COMPLETED" : "PENDING"}
                </Badge>
              </Flex>
              <Flex alignItems={"center"} width={"50%"}>
                <Button
                  fontFamily={"Mulish"}
                  width={"100%"}
                  colorScheme={"yellow"}
                >
                  {data.status === "booked" ? "Feedback" : "Cancel"}
                </Button>
              </Flex>
            </Flex>
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
}

export default RideCard;
