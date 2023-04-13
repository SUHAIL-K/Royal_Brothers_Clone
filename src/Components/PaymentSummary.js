import styled from "styled-components";
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react';
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function PaymentSummary(props) {

    const [seconds, setSeconds] = useState(180); // 3 minutes in seconds
    const [percent, setPercent] = useState(100);

    const total = localStorage.getItem('total');
    // total + 2 * Math.round(total * 0.14

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        setPercent(seconds / 180 * 100); // calculate the percentage
    }, [seconds]);

    return (
        <Container>
            <Payable>
                <h3>Payable</h3>
                <div>
                    <p className="title">Total Payable Amount</p>
                    <p className="amount">₹ {parseInt(total) + 2 * (parseInt(total) * 0.14)}</p>
                </div>
            </Payable>
            <Timer>
                <CircularProgress value={percent} color='green.400' size="100px" thickness="4px" >
                    <CircularProgressLabel>{seconds}s</CircularProgressLabel>
                </CircularProgress>
            </Timer>
        </Container>
    );
}

const Container = styled.div`
    flex: 2;
    margin: 5px;
`;

const Payable = styled.div`
    border: 1px solid rgba(0,0,0,0.2);
    border-radius: 5px;

    h3{
        font-size: 1.5rem;
        font-weight: 600;
        background-color: rgba(0,0,0,0.2);
        padding-left: 10px;
    }

    div{
        text-align: center;

        .title{
            font-weight: 400;
            margin: 10px 0;
        }

        .amount{
            font-weight: 700;
            margin: 10px 0;
        }
    }
`;

const Timer = styled.div`
    text-align: center;
    margin-top: 10px;
`;

export default PaymentSummary;