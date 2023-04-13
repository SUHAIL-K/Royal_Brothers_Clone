import { Box, Grid, Heading, Text,Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,useDisclosure, FormLabel, Input,FormControl, Button } from "@chakra-ui/react";
import React from "react";
import TariffCard from "./TariffCard";

function TariffPage(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const tariffData=[
     {
      "id": 3,
      'vehicle':'Honda Dio',
      'image':'https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/035/medium/HONDA_DIO.png?1660722410',
      'hourly':{
        'btime':'19',
        'btimeabove':'19',
        'kmlimit':'5.0',
        'excess':'4.0'
      },
      'seven':{
        'rental':'2412',
        'kmlimit':'540',
        'excess':'4.0'
      },
      'fifteen':{
        'rental':'3216',
        'kmlimit':'900',
        'excess':'4.0'
      },
      'thirty':{
        'rental':'4287',
        'kmlimit':'1500',
        'excess':'4.0'
      },
    },
   {   "id": 8,
      'vehicle':'Royal Enfield Classic',
      'image':'https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/274/medium/ROYAL_ENFIELD_CLASSIC_350_%28BS6%29.png?1660736086',
      'hourly':{
        'btime':'60',
        'btimeabove':'60',
        'kmlimit':'10.0',
        'excess':'8.0'
      },
      'seven':{
        'rental':'13440',
        'kmlimit':'540',
        'excess':'8.0'
      },
      'fifteen':{
        'rental':'21600',
        'kmlimit':'900',
        'excess':'8.0'
      },
      'thirty':{
        'rental':'28800',
        'kmlimit':'1500',
        'excess':'8.0'
      },
    },{
      "id": 9,
      'vehicle':'Honda CB 200X',
      'image':'https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/304/medium/HONDA_CB_200X.png?1660731823',
      'hourly':{
        'btime':'42',
        'btimeabove':'42',
        'kmlimit':'10.0',
        'excess':'7.0'
      },
      'seven':{
        'rental':'14112',
        'kmlimit':'540',
        'excess':'7.0'
      },
      'fifteen':{
        'rental':'20160',
        'kmlimit':'900',
        'excess':'7.0'
      },
      'thirty':{
        'rental':'25200',
        'kmlimit':'1500',
        'excess':'7.0'
      },
    },{
      "id": 12,
      'vehicle':'"Yamaha R15 BS6',
      'image':'https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/339/medium/YAMAHA_R15_BS6.png?1660727394',
      'hourly':{
        'btime':'82',
        'btimeabove':'82',
        'kmlimit':'10.0',
        'excess':'8.0'
      },
      'seven':{
        'rental':'7603',
        'kmlimit':'540',
        'excess':'8.0'
      },
      'fifteen':{
        'rental':'12672',
        'kmlimit':'900',
        'excess':'8.0'
      },
      'thirty':{
        'rental':'21120',
        'kmlimit':'1500',
        'excess':'8.0'
      },
    },{
      "id": 3,
      'vehicle':'Honda Dio',
      'image':'https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/308/medium/HONDA_DIO_BS6.png?1660734795',
      'hourly':{
        'btime':'17',
        'btimeabove':'17',
        'kmlimit':'5.0',
        'excess':'4.0'
      },
      'seven':{
        'rental':'2150',
        'kmlimit':'540',
        'excess':'4.0'
      },
      'fifteen':{
        'rental':'3582',
        'kmlimit':'900',
        'excess':'4.0'
      },
      'thirty':{
        'rental':'5970',
        'kmlimit':'1500',
        'excess':'4.0'
      },
    },{
      "id": 13,
      'vehicle':'Royal Enfield Meteor',
      'image':'https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/281/medium/ROYAL_ENFIELD_METEOR_350_SUPERNOVA.png?1660729204',
      'hourly':{
        'btime':'36',
        'btimeabove':'1369',
        'kmlimit':'10.0',
        'excess':'6.0'
      },
      'seven':{
        'rental':'4656',
        'kmlimit':'540',
        'excess':'6.0'
      },
      'fifteen':{
        'rental':'7761',
        'kmlimit':'900',
        'excess':'6.0'
      },
      'thirty':{
        'rental':'12936',
        'kmlimit':'1500',
        'excess':'6.0'
      },
    },{
      "id": 10,
      'vehicle':'Aprilia SR 160 ABS (BS6)',
      'image':'https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/315/medium/APRILIA_SR_160_ABS_%28BS6%29.png?1660734985',
      'hourly':{
        'btime':'26',
        'btimeabove':'26',
        'kmlimit':'5.0',
        'excess':'5.0'
      },
      'seven':{
        'rental':'3175',
        'kmlimit':'540',
        'excess':'5.0'
      },
      'fifteen':{
        'rental':'4536',
        'kmlimit':'900',
        'excess':'5.0'
      },
      'thirty':{
        'rental':'6480',
        'kmlimit':'1500',
        'excess':'5.0'
      },
    },{
      "id": 17,
      'vehicle':'Bajaj Avenger Cruise 220 (BS6)',
      'image':'https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/320/medium/AVENGER_CRUISE_220_%28BS6%29.png?1660734515',
      'hourly':{
        'btime':'44',
        'btimeabove':'44',
        'kmlimit':'10.0',
        'excess':'6.0'
      },
      'seven':{
        'rental':'3628',
        'kmlimit':'540',
        'excess':'6.0'
      },
      'fifteen':{
        'rental':'6048',
        'kmlimit':'900',
        'excess':'6.0'
      },
      'thirty':{
        'rental':'10080',
        'kmlimit':'1500',
        'excess':'6.0'
      },
    },{
      "id": 20,
      'vehicle':'Bajaj Pulsar 250F',
      'image':'https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/318/medium/BAJAJ_PULSAR_250F.png?1660734695',
      'hourly':{
        'btime':'27',
        'btimeabove':'27',
        'kmlimit':'5.0',
        'excess':'5.0'
      },
      'seven':{
        'rental':'2412',
        'kmlimit':'540',
        'excess':'5.0'
      },
      'fifteen':{
        'rental':'3216',
        'kmlimit':'900',
        'excess':'5.0'
      },
      'thirty':{
        'rental':'4287',
        'kmlimit':'1500',
        'excess':'5.0'
      },
    },{
      "id": 11,
      'vehicle':'TVS N-Torq',
      'image':'https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/345/medium/TVS_N-Torq.png?1666077813',
      'hourly':{
        'btime':'24',
        'btimeabove':'24',
        'kmlimit':'5.0',
        'excess':'4.0'
      },
      'seven':{
        'rental':'2519',
        'kmlimit':'540',
        'excess':'4.0'
      },
      'fifteen':{
        'rental':'3598',
        'kmlimit':'900',
        'excess':'4.0'
      },
      'thirty':{
        'rental':'5141',
        'kmlimit':'1500',
        'excess':'4.0'
      },
    },]
  return (
    <Box>
      <Box textAlign={"center"} mt={5}>
        <Heading fontFamily={'Mulish'} my={5}>Bike rental tariffs in Bangalore</Heading>
        <Text fontFamily={'Mulish'}>
          *All prices are exclusive of taxes and fuel. Images used for
          representation purposes only, actual color may vary.
        </Text>
      </Box>

      <Box mt={10} mb={10}>
        <Grid width={['95%','95%','80%']} m={"auto"} templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(2, 1fr)','repeat(2, 1fr)','repeat(3, 1fr)']} gap={6}>

        {
          tariffData.map((el,ind)=>{
            return <TariffCard onOpen={{}} key={ind} data={el}>

            </TariffCard>
          })
        }

            
        </Grid>
      </Box>
      <Modal
        
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Search your next ride</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
           
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default TariffPage;
