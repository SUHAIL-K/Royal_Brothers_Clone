// import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, Button, ButtonGroup } from '@chakra-ui/react'
// function Blog() {

//     return (
//         <div>
//             <Card maxW='sm'>
//                 <CardBody>
//                     <Image
//                         src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
//                         alt='Green double couch with wooden legs'
//                         borderRadius='lg'
//                     />
//                     <Stack mt='6' spacing='3'>
//                         <Heading size='md'>Living room Sofa</Heading>
//                         <Text>
//                             This sofa is perfect for modern tropical spaces, baroque inspired
//                             spaces, earthy toned spaces and for people who love a chic design with a
//                             sprinkle of vintage design.
//                         </Text>

//                     </Stack>
//                 </CardBody>
//                 <Divider />

//             </Card>
//         </div>
//     )

// }
// export default Blog

import { Card, CardBody, Divider, Grid, Heading, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react'

const Blogs = () => {
    const cardData = [


        {
            imgSrc:
                'https://d3vp2rl7047vsp.cloudfront.net/articles/article_images/000/000/023/med/Paradise-of-Plantations-in-Karnataka.jpg',
            title: 'Travel',
            description:
                'Karnataka is the largest producer of coffee in India, accounting for almost 70% of the country’s crops. The lush environs of Kodagu, Chikmagalur, and Hassan bloom with verdant coffee plantations, making it a prime spot to observe the art of coffee making and sample some delicious artisanal brews too. Whether you’re in the mood for ‘strong and hot’ or ‘light and cold’, there’s a tasty blend just for you. Chikmagalur’s Taj Garden is famous for its Panduranga coffee bean, which is grown with a lot of love and care by the local planters. Additionally, Jungle Greens sits by the thrilling Bhadra Tiger Reserve. This coffee garden is ensconced by emerald forests on all sides, and if you are really lucky, you might even catch sight of the wildlife. All you have to do is rent a bike from Royal Brothers, and these exquisite spots open up to you with ease..',
        },
        {
            imgSrc:
                'https://d3vp2rl7047vsp.cloudfront.net/articles/article_images/000/000/022/med/Bike-Trip-Exploring-Jaipur-City-Palace.png',
            title: 'Travel',
            description: 'Over the years, Jantar Mantar has always been an intriguing attraction for travellers. Built in the early 18th century by Maharaja Sawai Singh II, it’s an assembly of fixed stones and gigantic structures. It’s an open-air astronomical observatory which was built because of the Maharaja’s fascination with celestial objects and movements in the sky. This observatory was far ahead of its time and showcased the ancient ways of reading the star formations and skies.'

        },
        {
            imgSrc: 'https://d3vp2rl7047vsp.cloudfront.net/articles/article_images/000/000/006/med/ron-hansen-33762-unsplash.jpg',
            title: 'Travel',
            description:
                'Ooty fondly called the “Queen of Hill Stations” is based in the Southern Indian state of Tamil Nadu. Also known as Udagamandalam, Ooty is set in the Nilgiris – the “Blue Mountains” of India. Ooty enjoys pleasant weather throughout the year. The major lure of this place is its refreshing weather and the picturesque beauty it has got to offer. Hill-top mists, lush tea gardens, and coffee plantations spread on the slopes, and many more delights define Ooty and its popularity among the tourists.',
        },
        {
            imgSrc:
                'https://d3vp2rl7047vsp.cloudfront.net/articles/article_images/000/000/005/med/sayan-nath-176078-unsplash.jpg',
            title: 'Travel',
            description:
                'Savi & Vid has shared North Sikkim as one of the best-unexplored gems in India. Almost everyone has had the thought of the Sikkim trip having crossed their minds at least once, but never got to actually do it.',
        },
        {
            imgSrc:
                'https://d3vp2rl7047vsp.cloudfront.net/articles/article_images/000/000/018/med/Coorg_Waterfall.jpg',
            title: 'Travel',
            description:
                ' There are loads of people who like visiting Mysore from Bangalore. The majestic sister of Bangalore is a must-visit for anyone wanting to dive heart-first into Kannadiga culture. From sprawling palaces to fragrance-infused gardens, Mysore is a destination that you will want to visit more than once. Oh, and don’t miss out on the gastronomically enthralling journey which is a traditional Kannadiga affair',
        },
        {
            imgSrc:
                'https://d3vp2rl7047vsp.cloudfront.net/articles/article_images/000/000/017/med/Mysore_Palace.jpg',
            title: 'Travel',
            description:
                'Ramanagara: For starters, the iconic Bollywood movie, Sholay was shot here. Who doesn’t want to re-enact the whole “Kitne aadmi the” scene?! Apart from its star-studded past, Ramanagara is the heart and soul of Indian sericulture. The raw silk industry has been thriving for generations and gets its name “Silk City” because of its penchant for good quality, sustainable fabric.',
        },
        // add more card data here
    ]

    return (
        <div style={{ padding: "10px", marginTop: "20px" }}>

            <Heading textAlign={"center"}>Blog</Heading>
            <SimpleGrid templateColumns={{
                // base: "repeat(5,1fr)",
                md: "repeat(2,1fr)",
                sm: "repeat(1,1fr)",
                lg: "repeat(3,1fr)"
            }} spacing={8} justifyItems="center" p={"20px"} >
                {cardData.map((card, index) => (
                    <Card key={index} maxW=''>
                        <CardBody>
                            <Image src={card.imgSrc} alt={card.title} borderRadius='sm' objectFit={"cover"} w={"100%"} />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>{card.title}</Heading>
                                <Text>{card.description}</Text>
                            </Stack>
                        </CardBody>
                        <Divider />
                    </Card>
                ))}
            </SimpleGrid>
        </div>
    )
}

export default Blogs
