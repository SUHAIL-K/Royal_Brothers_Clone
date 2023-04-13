import { Box, Card, CardBody, Grid, Image, Stack } from "@chakra-ui/react";
import React from "react";

function OfferPage(props) {
  const innerBoxStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    boxSize: "medium",
    color: "white",
    padding:'10px',
    fontWeight: "500",
    fontSize: "26px",
    
  };
  return (
    <Box>
      <Stack
        justifyContent={"end"}
        background="url('https://d36g7qg6pk2cm7.cloudfront.net/assets/offerPageCoverImage-5db811b79464b1c3d70a617b4e09bc7b2c15b1461b0d3646e2b59061620b1787.jpg')"
        height={300}
        
        
        backgroundSize='cover'
      >
        {/* <Image
                src='https://d36g7qg6pk2cm7.cloudfront.net/assets/offerPageCoverImage-5db811b79464b1c3d70a617b4e09bc7b2c15b1461b0d3646e2b59061620b1787.jpg'
                >
                </Image> */}

        <Box fontFamily={'Mulish'} sx={innerBoxStyles} backdropFilter="auto" backdropContrast="70%">
          BIKE RENTAL OFFERS IN Banglore
        </Box>
      </Stack>

      <Box my={10}>
        <Grid  width={'80%'} m={"auto"} templateColumns={['repeat(1, 1fr)','repeat(2, 1fr)','repeat(3, 1fr)']} gap={6}>

            <Card shadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px'}>
                <CardBody p={1}>
                    <Image
                    src="https://d36g7qg6pk2cm7.cloudfront.net/assets/RBX-offer-194940429645abdee50c6e6711844bb4c8554a72c9c46a339ce202888c57e5d9.jpg"
                    >

                    </Image>
                </CardBody>
            </Card>
            <Card shadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}>
                <CardBody p={1}>
                    <Image
                    src="https://d36g7qg6pk2cm7.cloudfront.net/assets/BAN-345ca8f07a2ff995dc1cf658cb99f40f775c86752623fc13c089a05ae0008126.png"
                    >

                    </Image>
                </CardBody>
            </Card>
            <Card shadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}>
                <CardBody p={1}>
                    <Image
                    src="https://d36g7qg6pk2cm7.cloudfront.net/assets/offer_for_gear-5a57cb4f6192d22d943dfe7cfae655642496b6943bfb4d9b9a1ceea7dcaa35be.jpg"
                    >

                    </Image>
                </CardBody>
            </Card>
            <Card shadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}>
                <CardBody p={1}>
                    <Image
                    src="https://d36g7qg6pk2cm7.cloudfront.net/assets/offer_for_store-ef68e0a5dbd044afc03da005d844ea20f972d5096deee41ab2a13ccc4da1d5d7.jpg"
                    >

                    </Image>
                </CardBody>
            </Card>
            <Card shadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}>
                <CardBody p={1}>
                    <Image
                    src="https://d3vp2rl7047vsp.cloudfront.net/offers/images/000/000/027/original/csbArtboard_1.jpg?1643792754"
                    >

                    </Image>
                </CardBody>
            </Card>
            <Card shadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}>
                <CardBody p={1}>
                    <Image
                    src="https://d3vp2rl7047vsp.cloudfront.net/offers/images/000/000/015/original/frontliner2.jpeg?1646287851"
                    >

                    </Image>
                </CardBody>
            </Card>

        </Grid>
      </Box>
    </Box>
  );
}

export default OfferPage;
