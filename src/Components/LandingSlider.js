import styled from "styled-components";

function LandingSlider(props){
    return (
        <Container>
            <p>We Believe in Quality</p>
            {/* https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/slide-one-8c7f76cbbc58a89e95e8fcc1ab03d3d4cf12ef680989755fcf01f3a725d5d775.jpg */}
            {/* https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/slide-two-2d63ed83b9f2b4003344ac868bb2a42d29efe841bb2c5894ac53bd6af85adb86.jpg */}
            {/* https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/slide-three-a8787ad27e9ea8ab39d164f233b0995c76d59c4a517c0313e11a4122d6309038.jpg */}
            <Card>
                <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/slide-one-8c7f76cbbc58a89e95e8fcc1ab03d3d4cf12ef680989755fcf01f3a725d5d775.jpg" alt="" />
                <Heading className="imageTitle">
                    <h3>We’re socially celebrated</h3>
                    <p>Our customer centric approach has got us amazing reviews. Be it any platform, you will see many users recommending our service.</p>
                </Heading>
            </Card>
        </Container>
    );
}

const Container = styled.div`
    &>p{
        font-size: 2rem;
        font-weight: 700;
        text-align: center;
        margin-bottom: 10px;
    }
`;

const Card = styled.div`
    width: 100%;
    position: relative;
    
    img{
        width: 100%;
        height: 90vh;
        object-fit: cover;
        object-position: right;
        filter: contrast(70%);
    }
`;

const Heading = styled.div`
    position: absolute;
    top: 40%;
    text-align: center;
    max-width: 500px;
    
    h3{
        font-size: 1.8rem;
        font-weight: 500;
    }

    p{
        font-size: 1.2rem;
    }

    @media (max-width:1200px){
        max-width: none;
        top: 0;
        width: 100%;
    }
`;

export default LandingSlider;