import styled from "styled-components";
import PaymentMethod from "../PaymentMethod";
import PaymentSummary from "../PaymentSummary";


function Payment(props){
    return(
        <Container>
            <PaymentMethod />
            <PaymentSummary />
        </Container>
    );
}

const Container = styled.div`
    display: flex;

    @media (max-width: 800px){
        flex-direction: column-reverse;
    }
`;

export default Payment;