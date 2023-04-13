import styled from "styled-components";
import { Button, Select } from '@mantine/core';
import { useState } from "react";

import { Grid, GridItem, Heading, StackDivider, VStack } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { useSelector } from "react-redux";

function Fleet(props) {

    const [duration, setDuration] = useState('1 Month');
    const isDark = useSelector(state=>state.themeReducer.dark);


    return (
        <Container isDark={isDark}>
            <h3>Our Fleet</h3>
            <Duration>
                <span>Duration</span>
                <Select
                    placeholder="Duration"
                    data={[
                        { value: 'Hourly', label: 'Hourly' },
                        { value: '7 Days', label: '7 Days' },
                        { value: '15 Days', label: '15 Days' },
                        { value: '1 Month', label: '1 Month' },
                        { value: '3 Months', label: '3 Months' }
                    ]}
                    maw={300}
                    value={duration}
                    onChange={setDuration}
                />
            </Duration>
            <Grid templateColumns={
                {
                    base: "repeat(1, 1fr)",
                    md: "repeat(2, 1fr)",
                    lg: "repeat(3, 1fr)"
                }
            } gap={5} mt="30px">
                <GridItem w='100%'>
                    <Card>
                        <CardHeader>
                            <Heading size={'md'} textAlign="center">Honda Activa 5G</Heading>
                        </CardHeader>
                        <CardBody>
                            <img src="https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/002/medium/HONDA_ACTIVA_3G.png?1660719846" alt="" />
                        </CardBody>
                        <CardFooter w="100%">
                            <VStack w="100%" divider={<StackDivider borderColor='gray.200' />}
                                spacing={4}
                                align='stretch'>
                                <Heading size={'md'} textAlign="center">Honda Activa 5G</Heading>
                                <Button bg={"black"}>Book Now</Button>
                            </VStack>
                        </CardFooter>
                    </Card>
                </GridItem>
                <GridItem w='100%'>
                    <Card>
                        <CardHeader>
                            <Heading size={'md'} textAlign="center">Honda Activa 5G</Heading>
                        </CardHeader>
                        <CardBody>
                            <img src="https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/002/medium/HONDA_ACTIVA_3G.png?1660719846" alt="" />
                        </CardBody>
                        <CardFooter w="100%">
                            <VStack w="100%" divider={<StackDivider borderColor='gray.200' />}
                                spacing={4}
                                align='stretch'>
                                <Heading size={'md'} textAlign="center">Honda Activa 5G</Heading>
                                <Button bg={"black"}>Book Now</Button>
                            </VStack>
                        </CardFooter>
                    </Card>
                </GridItem>
                <GridItem w='100%'>
                    <Card>
                        <CardHeader>
                            <Heading size={'md'} textAlign="center">Honda Activa 5G</Heading>
                        </CardHeader>
                        <CardBody>
                            <img src="https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/002/medium/HONDA_ACTIVA_3G.png?1660719846" alt="" />
                        </CardBody>
                        <CardFooter w="100%">
                            <VStack w="100%" divider={<StackDivider borderColor='gray.200' />}
                                spacing={4}
                                align='stretch'>
                                <Heading size={'md'} textAlign="center">Honda Activa 5G</Heading>
                                <Button bg={"black"}>Book Now</Button>
                            </VStack>
                        </CardFooter>
                    </Card>
                </GridItem>
                <GridItem w='100%'>
                    <Card>
                        <CardHeader>
                            <Heading size={'md'} textAlign="center">Honda Activa 5G</Heading>
                        </CardHeader>
                        <CardBody>
                            <img src="https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/002/medium/HONDA_ACTIVA_3G.png?1660719846" alt="" />
                        </CardBody>
                        <CardFooter w="100%">
                            <VStack w="100%" divider={<StackDivider borderColor='gray.200' />}
                                spacing={4}
                                align='stretch'>
                                <Heading size={'md'} textAlign="center">Honda Activa 5G</Heading>
                                <Button bg={"black"}>Book Now</Button>
                            </VStack>
                        </CardFooter>
                    </Card>
                </GridItem>
                <GridItem w='100%'>
                    <Card>
                        <CardHeader>
                            <Heading size={'md'} textAlign="center">Honda Activa 5G</Heading>
                        </CardHeader>
                        <CardBody>
                            <img src="https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/002/medium/HONDA_ACTIVA_3G.png?1660719846" alt="" />
                        </CardBody>
                        <CardFooter w="100%">
                            <VStack w="100%" divider={<StackDivider borderColor='gray.200' />}
                                spacing={4}
                                align='stretch'>
                                <Heading size={'md'} textAlign="center">Honda Activa 5G</Heading>
                                <Button bg={"black"}>Book Now</Button>
                            </VStack>
                        </CardFooter>
                    </Card>
                </GridItem>
            </Grid>
            <p className="tc">*All prices are exclusive of taxes and fuel. Images used for representation purposes only, actual color may vary.</p>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    padding: 10px;
    background-color: ${props=>props.isDark?'#2C3333':'white'};
    color: ${props=>props.isDark?'white':'#2C3333'};

    h3{
        padding-top: 30px;
        font-size: 2rem;
        font-weight: 700;
        text-align: center;
    }

    .tc{
        padding: 30px;
        width: fit-content;
        margin: auto;
    }
`;

const Duration = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
`;

export default Fleet;