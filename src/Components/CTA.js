import styled from "styled-components";

import SearchForm from "./SearchForm";

function CTA(props) {
    return (
        <Container>
            <SearchForm />
        </Container>
    );
}

const Container = styled.div`
    background-image: url("https://images.unsplash.com/photo-1558981359-219d6364c9c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 20px;

    @media (max-width:600px) {
        flex-direction: row;
        align-items: flex-end;
    }
`;

export default CTA;