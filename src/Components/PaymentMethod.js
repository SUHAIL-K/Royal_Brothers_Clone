import styled from "styled-components";
import { Radio, RadioGroup, Stack, useToast } from '@chakra-ui/react'
import { useState } from "react";
import {useNavigate} from 'react-router-dom'

import PaymentCardForm from "./PaymentCardForm";

function PaymentMethod(props) {
    const [value, setValue] = useState('1');
    const toast = useToast();
    const navigate = useNavigate();
    return (
        <Container>
            <h3>Choose Payment Method</h3>
            <div>
                <Options>
                    <OptionsCard>Credit Card</OptionsCard>
                    <OptionsCard>Debit Card</OptionsCard>
                    <OptionsCard>Net Banking</OptionsCard>
                    <OptionsCard>UPI Payment</OptionsCard>
                    <OptionsCard>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/58/Zest_logo.png" alt="" />
                    </OptionsCard>
                    <OptionsCard>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Paytm_logo.png/640px-Paytm_logo.png" alt="" />
                    </OptionsCard>
                </Options>
                <Tab>
                    <p className="tabHeading">Enter your card details</p>
                    <RadioGroup onChange={setValue} value={value} mt="10px" mb="10px">
                        <Stack direction='row'>
                            <Radio value='1'>
                                <img style={{padding: "15px"}} src="https://www.pngmart.com/files/22/Visa-Card-Logo-PNG-Picture.png" alt="" />
                            </Radio>
                            <Radio value='2'>
                                <img src="https://pngimg.com/uploads/mastercard/mastercard_PNG9.png" alt="" />
                            </Radio>
                            <Radio value='3'>
                                <img src="https://www.pngplay.com/wp-content/uploads/5/American-Express-Logo-Download-Free-PNG.png" alt="" />
                            </Radio>
                            <Radio value='4'>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Rupay-Logo.png" alt="" />
                            </Radio>
                        </Stack>
                    </RadioGroup>
                    <PaymentCardForm />
                    <Button
                        onClick={() => {
                            toast({
                                title: 'Payment Success!',
                                description: "This vehicle has been successfully booked.",
                                status: 'success',
                                duration: 3000,
                                isClosable: true,
                            });
                            setTimeout(() => {
                                return navigate("/")

                            }, 3000); // Redirect after 3 seconds
                        }}
                    >Make Payment</Button>
                </Tab>
            </div>
        </Container>
    );
}

const Container = styled.div`
    flex: 5;
    border: 1px solid rgba(0,0,0,0.2);
    margin: 5px;
    border-radius: 5px;

    h3{
        font-size: 1.5rem;
        font-weight: 600;
        background-color: rgba(0,0,0,0.2);
        padding-left: 10px;
    }
    
    &>div{
        display: flex;
        justify-content: space-between;
        gap: 10px;

        @media (max-width: 800px){
            flex-direction: column;
        }
    }
`;

const Options = styled.div`
    display: flex;
    flex-direction: column;
    flex: 2;
    gap: 2px;
    padding: 5px;

    @media (max-width: 800px){
        flex-direction: row;
        overflow: scroll;
    }
`;

const OptionsCard = styled.button`
    width: 100%;
    background-color: rgba(0, 0, 0, 0.05);
    padding: 5px 10px;
    flex-grow: 1;
    border-radius: 5px;
    font-weight: 600;

    img{
        max-width: 100px;
        margin: auto;
    }
`;

const Tab = styled.div`
    flex: 4;
    margin: 10px;

    &>p{
        font-size: 1.3rem;
        font-weight: 600;
    }

    img{
        width: 80px;
    }
`;

const Button = styled.div`
    background-color: black;
    color: white;
    width: 200px;
    border-radius: 5px;
    padding: 10px 10px;
    text-align: center;
    font-weight: 600;
    margin: 20px 0 0 0;
`;

export default PaymentMethod;