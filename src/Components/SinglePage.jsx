import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Button, Flex, Box } from '@chakra-ui/react'

function SinglePage() {
    return (
        <div>
            <h2>single page</h2>
            <div>
                {/* <img src="https://images.unsplash.com/photo-1678307746237-c06bb9531298?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" width="100%" height="" /> */}
                <Flex direction='column' align='center'>

                    <Box my={4} display='flex' justifyContent='space-between' w='100%'>
                        <Text>15 march 2023 </Text>
                        <Text>6518 views </Text>
                    </Box>
                </Flex>

            </div>
        </div>
    )

}
export default SinglePage