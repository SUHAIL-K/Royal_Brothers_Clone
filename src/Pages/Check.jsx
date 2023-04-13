import { Flex } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Checkout from '../Components/Checkout';
import Summary from '../Components/Summary';

function Check() {
    const [total, setTotal] = useState()

    const [state, setState] = useState({})

    const checkData = useSelector((store) => {
        console.log("check")
        return store.searchReducer.paramsObject;

    })
    console.log("check", checkData)

    const rentalData = useSelector((store) => {
        console.log("RentalData")
        return store.searchReducer.rentalDetails;

    })
    console.log("rental", rentalData)

    useEffect(() => {
        axios.get(`https://updatedroyalbrothers-api.onrender.com/banglore/${checkData.id}`).then((res) => setState(res.data))
    }, [])
    return (

        <div className="App">
            <Container>
                <Flex bg={"#fed250"}></Flex>
                <Summary {...state} location={checkData.location} total={total} setTotal={setTotal} rentalData={rentalData} />
                <Checkout total={total} />
            </Container>

        </div>
    );
}
const Container = styled.div`
    display: flex;

    @media (max-width: 800px) {
        flex-direction: column;
        align-items:center;
        
    }

`;
export default Check;
