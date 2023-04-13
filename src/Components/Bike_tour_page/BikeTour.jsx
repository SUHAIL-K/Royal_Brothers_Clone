import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  Image,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";

function BikeTour(props) {
  const imgArr = [
    "https://d36g7qg6pk2cm7.cloudfront.net/assets/pic13-2386d81c376a2a52e25ff212e4726d1246c47ab25dd70b59b4db6b6417cc700d.png",
    "https://d36g7qg6pk2cm7.cloudfront.net/assets/pic2-701a9aaf4cf17531aaa57c00623848c1c27811329b055df59542617d7aad371f.png",
    "https://d36g7qg6pk2cm7.cloudfront.net/assets/pic3-86c4372e4d959455e7fceb8504c3b6d56cd8c37fba6388991363f5fabf9e45f7.png",
    "https://d36g7qg6pk2cm7.cloudfront.net/assets/pic4-f4a79373b8b87c8d12aedce0128b89b3f46cc42301a24772192670fe1ea9f622.png",
    "https://d36g7qg6pk2cm7.cloudfront.net/assets/pic5-56a8e8ec8f45a721898a41104801f7c8536be6100c0d1bb76b930b9a204e661f.png",
    "https://d36g7qg6pk2cm7.cloudfront.net/assets/pic6-af392761c1094cc19c35721ae42ce26ce233fb78881045d12f6da71a68f7fdda.png",
    "https://d36g7qg6pk2cm7.cloudfront.net/assets/pic7-671e930cfcc83d1028e747c7eca49a4c32713bde5ac93e54d87f5c40a2d21f5f.png",
    "https://d36g7qg6pk2cm7.cloudfront.net/assets/pic8-6359141d06de7ac5b6e1f591ae5bbb67dbcdce44518bfc5ed296c96eb0af8f13.png",
    "https://d36g7qg6pk2cm7.cloudfront.net/assets/pic9-17b29671dc98fa1d739fc4e7f38431d83a585d12747425c37948917ce4047626.png",
  ];
  return (
    <Box fontFamily={"Mulish"}>
      <Box
        background="url(https://d36g7qg6pk2cm7.cloudfront.net/assets/manali-to-leh-7358036c192068f44012290ec475fd3f1bf90679dd952b971f316240ff7271cc.jpg)"
        height={500}
        backgroundSize="cover"
      ></Box>
      <Box width={"65%"} m={"auto"} mb={10}>
        <Flex flexDirection={['column','column',"row"]} alignItems={"center"} mt={5} justifyContent={"space-between"}>
          <Flex flexDirection={['column','column',"row"]}
            alignItems={"center"}
            width={"40%"}
            justifyContent={"space-between"}
          >
            <Stack>
              <Text fontFamily={"Mulish"} fontWeight={700} fontSize={14}>
                Tour Price
              </Text>
            </Stack>
            <Stack spacing={0}>
              <Text fontFamily={"Mulish"} fontWeight={400} fontSize={12}>
                Rider: ₹ 34,499 /-
              </Text>
              <Text fontFamily={"Mulish"} fontWeight={400} fontSize={12}>
                Rider: ₹ 34,499 /-
              </Text>
            </Stack>
          </Flex>
          <Stack>
            <Button
              width={200}
              fontSize={13}
              bg={"yellow.400"}
              fontFamily={"Mulish"}
            >
              Enquiry
            </Button>
          </Stack>
        </Flex>
        <Divider width={"40%"}></Divider>
        <Stack mt={5} fontFamily={"Mulish"}>
          <Text fontSize={"18px"} fontWeight={700}>
            Manali Tour
          </Text>
          <Stack textAlign={"left"} spacing={6}>
            <UnorderedList
            listStyleType={'none'}
            fontFamily={"Mulish"}
            fontWeight={400}
            fontSize={13}
            spacing={5}
            >
            <ListItem
             
             
            >
              Ladakh – the place which literally means “the land of high passes”
              is a region of Jammu and Kashmir state in India. The highest
              plateau of Kashmir boasts of picturesque and magical landscapes.
            </ListItem>
            <ListItem
           
            >
              The picture-perfect monasteries combined with the whitewashed
              stupas, colourful flags and the mantras from the hermits, makes it
              a must visit place for people who want to connect to their
              spiritual side in serenity.
            </ListItem>
            <ListItem
             
            >
              For the nature lovers and the adventure seekers, the jagged
              mountains and the dramatic mountain walls combined with the
              high-altitude passes is enough for the adrenalin rush. The
              snow-clad mountains effulged with the lives, faces, past, present
              and future in this desert is a must-see place.
            </ListItem>
            <ListItem
             
            >
              Most of this trip is about the journey and not the destination. It
              is the exploration of one’s own self and soul along those
              treacherous roads testing one’s limit.
            </ListItem>
            <ListItem
            
            >
              Royal Brothers wishes all the best to every rider on this life
              altering experience.
            </ListItem>
            </UnorderedList>
            <Text
              fontFamily={"Mulish"}
              fontWeight={700}
              fontSize={13}
              noOfLines={[1, 2, 3]}
            >
              Ride Itinerary
            </Text>

            <Text
              fontFamily={"Mulish"}
              fontWeight={400}
              fontSize={13}
              noOfLines={[1, 2, 3]}
            >
              Day 1: Manali Arrival, Motorbike Test Ride and Tour Introduction.
            </Text>
            <Divider></Divider>
            <Text
              fontFamily={"Mulish"}
              fontWeight={400}
              fontSize={13}
              noOfLines={[1, 2, 3]}
            >
              Day 2: Manali-Jispa
            </Text>
            <Divider></Divider>
            <Text
              fontFamily={"Mulish"}
              fontWeight={400}
              fontSize={13}
              noOfLines={[1, 2, 3]}
            >
              Day 3: Jispa-Sarchu
            </Text>
            <Divider></Divider>
            <Text
              fontFamily={"Mulish"}
              fontWeight={400}
              fontSize={13}
              noOfLines={[1, 2, 3]}
            >
              Day 4: Sarchu-Leh
            </Text>
            <Divider></Divider>
            <Text
              fontFamily={"Mulish"}
              fontWeight={400}
              fontSize={13}
              noOfLines={[1, 2, 3]}
            >
              Day 5: Leh Rest
            </Text>
            <Divider></Divider>
            <Text
              fontFamily={"Mulish"}
              fontWeight={400}
              fontSize={13}
              noOfLines={[1, 2, 3]}
            >
              Day 6: Leh-Pangong
            </Text>
            <Divider></Divider>
            <Text
              fontFamily={"Mulish"}
              fontWeight={400}
              fontSize={13}
              noOfLines={[1, 2, 3]}
            >
              Day 7: Pangong-Leh-Khardungla-Leh
            </Text>
            <Divider></Divider>
            <Text
              fontFamily={"Mulish"}
              fontWeight={400}
              fontSize={13}
              noOfLines={[1, 2, 3]}
            >
              Day 8: Leh-Sarchu
            </Text>
            <Divider></Divider>
            <Text
              fontFamily={"Mulish"}
              fontWeight={400}
              fontSize={13}
              noOfLines={[1, 2, 3]}
            >
              Day 9: Sarchu-Manali
            </Text>
            <Divider></Divider>

            <Text
              fontFamily={"Mulish"}
              fontWeight={400}
              fontSize={13}
              noOfLines={[1, 2, 3]}
            >
              Day 10: departure
            </Text>
            <Divider></Divider>
            <Text
              fontFamily={"Mulish"}
              fontWeight={700}
              fontSize={13}
              noOfLines={[1, 2, 3]}
            >
              Detailed Itinerary
            </Text>
            <Stack paddingLeft={3} textAlign={"left"} spacing={1}>
                <UnorderedList
                 fontFamily={"Mulish"}
                 fontWeight={400}
                 fontSize={13}
                 spacing={3}
                 styleType='none'
                 >
                <ListItem
                fontFamily={"Mulish"}
                fontWeight={700}
                fontSize={13}
                
              >
                Day 1: Manali Arrival, Motorbike Test Ride and Tour
                Introduction.
              </ListItem>
              <ListItem
                >
                Arrival in Manali and then transfer to the hotel. Rest for a
                while and in the afternoon you will be introduced to your
                motorcycles. You will then be given a short hands on to the bike
                and you can take the bike for a short ride so that you can test
                the bike yourself. Towards the evening you would be given the
                tour introduction by the tour leader. Dinner at hotel. Overnight
                at hotel.
              </ListItem>
              <ListItem
                fontFamily={"Mulish"}
                fontWeight={700}
                fontSize={13}
             
              >
                Day 2: Manali-Jispa
              </ListItem>
              <ListItem
               
              >
                Today after breakfast you start your journey in the Himalayas on
                your motorcycles from Manali to Jispa crossing Rohtang pass
                (3980 Mtrs) and also crossing several beautiful villages of
                Lahual Valley like Kokshar (1st police check post), Sissu,
                Gondhala, Tandi (the confluence of Chandera & Bhaga river which
                is known as Chinab when enters in Pakistan) and Keylong. On
                reaching the destination you are free to stroll around after
                check in. Dinner & overnight at hotel.
              </ListItem>
              <ListItem
                fontFamily={"Mulish"}
                fontWeight={700}
                fontSize={13}
              
              >
                Day 3: Jispa-Sarchu
              </ListItem>
              <ListItem
                
              >
                Breakfast at the Hotel and today we move towards Sarchu enroute
                passing two beautiful breath-taking lakes Deepak Taal and Suraj
                Taal. Also we cross Zing-Zing Bar and Baralacha Pass (4850
                Mtrs). On arrival we check in at the camp for overnight stay.
                Sarchu is also known for its starry nights so if you are lucky
                you would also be able to see the clusters of stars and get
                mesmerized by its night beauty.
              </ListItem>
              <ListItem
                fontFamily={"Mulish"}
                fontWeight={700}
               
              >
                Day 4: Sarchu-Leh
              </ListItem>
              <ListItem
               
              >
                Today we take an early start after an early breakfast as this
                day we cross three high mountain passes Nakila Pass (4900 Mtrs),
                lachlungla Pass (5000 Mtrs) and the world’s third hightest
                motorable road the Tanglang La Pass (5300 Mtrs). This stretch
                has world’s one of the most spectacular and best picturesque
                landscapes that leaves all its travelers overwhelmed and
                astonished. Then upon reaching Leh check in at the hotel and
                rest over-night.
              </ListItem>
              <ListItem
                fontFamily={"Mulish"}
                fontWeight={700}
             
              >
                Day 5: Leh Rest
              </ListItem>
              <ListItem
               >
                Today we rest for the day but if you wish, you are free to
                stroll the market or check out nearby places.
              </ListItem>
              <ListItem
                fontFamily={"Mulish"}
                fontWeight={700}
                fontSize={13}
                >
                Day 6: Leh-Pangong
              </ListItem>
              <ListItem
              
              >
                After breakfast we start for Pangong lake (4350 Mtrs) and also
                visit the 3 Idiots shooting point enroute we cross Changla Pass
                – the world’s second highest motorable road (5356 Mtrs). Arrive
                Pangong, which is the highest salt water lake in the world,
                shared by two countries India & Tibet. Approximately 60% of the
                lakes length lies in Tibet. The entire length of the lake is
                around 5 Km at its broadest point. Enjoy the beauty of the lake.
                For overnight stay check in at the camp.
              </ListItem>
              <ListItem
                fontFamily={"Mulish"}
                fontWeight={700}
               
              >
                Day 7: Pangong-Leh-Khardungla-Leh
              </ListItem>
              <ListItem
               
              >
                Next morning after breakfast we head back to Leh from Pangong
                and then after a small halt, head to the world’s highest
                motorable road, Khardungla Pass (5359 Mtrs). Khardungla Pass is
                historically very important as it lies on the major Silk route
                from Leh Central Asia. About 10,000 horses and camels used to
                take the route annually. Return to Leh and rest overnight at the
                holel.
              </ListItem>
              <ListItem
                fontFamily={"Mulish"}
                fontWeight={700}
                fontSize={13}
                
              >
                Day 8: Leh-Sarchu
              </ListItem>
              <ListItem
               
              >
                Taking the same route back to Sarchu and camp the night here.
              </ListItem>
              <ListItem
                fontFamily={"Mulish"}
                fontWeight={700}
                
              >
                Day 9: Sarchu-Manali
              </ListItem>
              <ListItem
                >
                After breakfast head back to Manali taking the same route back.
                Check in at the hotel and rest overnight.
              </ListItem>
              <ListItem
                fontFamily={"Mulish"}
                fontWeight={700}
                
              >
                Day 10: Departure from Manali check our hotel before 12noon
              </ListItem>
                </UnorderedList>
            </Stack>
            <Text
              fontFamily={"Mulish"}
              fontWeight={700}
              fontSize={13}
              noOfLines={[1, 2, 3]}
            >
              Tour Package Includes
            </Text>
            <UnorderedList fontSize={13} paddingLeft={7}>
              <ListItem>One Royal Enfield 350CC per rider</ListItem>
              <ListItem>
                Accommodation on twin sharing basis with breakfast and dinner.
              </ListItem>
              <ListItem>
                Backup Vehicle with mechanic, basic spare parts and medical Kit.
              </ListItem>
              <ListItem>All Toll, Taxes and Permits.</ListItem>
              <ListItem>Fuel for the entire journey</ListItem>
              <ListItem>Professional Road Captain as guide</ListItem>
            </UnorderedList>

            <Text
              fontFamily={"Mulish"}
              fontWeight={700}
              fontSize={13}
              noOfLines={[1, 2, 3]}
            >
              Tour Package Excludes
            </Text>
            <UnorderedList fontSize={13} paddingLeft={7}>
              <ListItem>Any beverages, lunch and table tips.</ListItem>
              <ListItem>Any cost due to force majeure.</ListItem>
              <ListItem>Any travel outside the itinerary.</ListItem>
              <ListItem>Anything not mentioned in includes.</ListItem>
            </UnorderedList>
            <Text
              fontFamily={"Mulish"}
              fontWeight={700}
              fontSize={13}
              noOfLines={[1, 2, 3]}
            >
              Note
            </Text>
            <UnorderedList fontSize={13} paddingLeft={7}>
              <ListItem>
                Bike is third party insured and if you want full insurance Rs
                4000/- per bike.
              </ListItem>
              <ListItem>
                To confirm your booking, you are requested to pay Rs 10,000/- in
                advance or full payment per person and full payment needs to be
                done 30 days prior to the departure date.
              </ListItem>
            </UnorderedList>
            <Grid
              templateColumns={[
                "repeat(1, 1fr)",
                "repeat(1, 1fr)",
                "repeat(2, 1fr)",
                "repeat(2, 1fr)",
                "repeat(3, 1fr)",
              ]}
              gap={6}
            >
              {imgArr.map((el) => {
                return <Image src={el}></Image>;
              })}
            </Grid>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}

export default BikeTour;
