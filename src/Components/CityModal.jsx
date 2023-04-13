import { useState } from "react";
import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Grid,
    GridItem,
    Image,
    Input,
    InputGroup,
    InputRightElement,
    Box,
    Text
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons"
import styled from "styled-components";

function CityModal({ isOpen, setIsOpen, setSelectedCity }) {
    // const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const handleCity = (e) => {
        setSearchTerm(prev => {
            return e.target.value
        });
        console.log(searchTerm)
    }

    const handleCitySelect = (city) => {
        setIsOpen(false)
        setSelectedCity(city)
    }

    const images = [
        {
            name: "Agra",
            url:
                "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/039/original/Agra_new.jpg",
        },
        {
            name: "Haridwar",
            url: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/023/original/Ahmedabad_b8d1eb5783c996a077aff887d35e4168.jpg?1558599488"
        },

        {
            name: "Allepy",
            url: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/103/original/Belagaum.jpg?1576578730"
        },
        {
            name: "Amritsar",
            url: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/101/original/Amritsar.jpg?1568037649"
        },
        {
            name: "Goa",
            url: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/017/original/Andaman-_-Nicobar_b5a3ba5c464968f274dfb7a98bcc4dbc.jpg?1558599551"
        },
        {
            name: "chandigarh",
            url: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/024/original/Chandigarh_72374d6c6de8b70d5b4ea5c05c59ba32.jpg?1558599669"
        },
        {
            name: "Banglore",
            url: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/001/original/Bangalore_1cf1aa53741a94edc3532f7b2b583c52.jpg?1558599565"
        },
        {
            name: "Kolkata",
            url: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/095/original/Guwahati_3adb5736296c93fec082f24b87dce70d.jpg?1558600028"
        },
        {
            name: "Belagam",
            url: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/103/original/Belagaum.jpg?1576578730"
        },
        {
            name: "manali",
            url: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/028/original/Bankok_efd1b11328e1ac61488cac98a15dc584.jpg?1558599580"
        },
        {
            name: "Ahemdabad",
            url: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/012/original/Hyderabad_e23f5904385e0c21afd0fe4b7ff698fb.jpg?1558600101"
        },
        {
            name: "Jaislmer",
            url: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/035/original/Jaisalmer_803980ec3a977dd61c215c5fbefd3909.jpg?1558600142"
        }

    ];

    const filteredImages = images.filter((image) =>
        image.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            {/* <Button onClick={() => setIsOpen(true)}>Open Modal</Button> */}
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size="4xl" closeOnOverlayClick={false}>
                <ModalOverlay />
                <ModalContent w="80%">
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <img style={{ width: "150px" }} src="https://d36g7qg6pk2cm7.cloudfront.net/assets/landing_page/royal_brothers_logo-229959d7727f356b2e4fc3bd9c0c527c60127d009c93989a93e2daa0b1c2d556.svg" alt="" />
                        {/* <Box className="divider" borderLeft="1px solid rgba(0,0,0,0.2)" height="100%" /> */}

                        <p style={{ fontSize: "1.2rem", fontWeight: "600", padding: "5px 10px", borderLeft: "1px solid black" }}>Bike Rental</p>
                    </div>
                    <Box mb={3} m={2}>
                        <InputGroup>
                            <Input
                                placeholder="Search"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <InputRightElement children={<SearchIcon />} />
                        </InputGroup>
                    </Box>
                    <ModalBody>
                        <Grid templateColumns="repeat(auto-fit, minmax(180px, 1fr))" gap={6} gridGap={6} >
                            {filteredImages.map((image) => (
                                <GridItem key={image.name} borderRadius={"5px "} overflow="hidden" onClick={() => { handleCitySelect(`${image.name}`) }}>
                                    <Image src={image.url} />
                                    <Text mt={2} fontWeight="bold" textAlign={"center"}>
                                        {image.name}
                                    </Text>
                                </GridItem>
                            ))}
                        </Grid>
                    </ModalBody>
                    <ModalFooter w={"fit-content"} m={"auto"} >
                        {/* <Button onClick={() => setIsOpen(false)}>Close</Button> */}
                        <WiggleText>

                            Select City To Continue
                        </WiggleText>

                    </ModalFooter>

                </ModalContent>
            </Modal>
        </>
    );
}


const WiggleText = styled.p`


    &:hover{
        animation: wiggle 1.5s infinite;
    }


    @keyframes wiggle {
    0% { transform: rotate(0deg); }
   80% { transform: rotate(0deg); }
   85% { transform: rotate(5deg); }
   95% { transform: rotate(-5deg); }
  100% { transform: rotate(0deg); }
}

`;


export default CityModal;


