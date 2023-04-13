import styled from "styled-components";

function LogoSlider(props){
    return (
        <Container>
            <p>Featured In</p>
            <Slider>
                <Card>
                    <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/news3-2eb9e0398a565284ca3c41d685e32de985b43ce00541889f59541ee91cb28e61.png" alt="" />
                </Card>
                <Card>
                    <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/money_control-0301bddd4ac901172098f7d0b590e8dbed35e7fa1064d2ced799f9cbc9185d66.png" alt="" />
                </Card>
                <Card>
                    <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/the_better_india-09cca403fbe2fe19974cb1701aaa87fce8e587f32a18bc477ebf28f05e1c1788.png" alt="" />
                </Card>
                <Card>
                    <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/news2-b2db5fe5ecf6968d4e47cba7876d3ae8a959a5de65901b5a6292032987a38bdd.png" alt="" />
                </Card>
                <Card>
                    <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/inc_42-59ce79f32655b91f34e9ed4e5d53175f446ea263b57ffc85fd3572a1a4a1aade.jpg" alt="" />
                </Card>
                <Card>
                    <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/the_better_india-09cca403fbe2fe19974cb1701aaa87fce8e587f32a18bc477ebf28f05e1c1788.png" alt="" />
                </Card>
                <Card>
                    <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/news2-b2db5fe5ecf6968d4e47cba7876d3ae8a959a5de65901b5a6292032987a38bdd.png" alt="" />
                </Card>
                <Card>
                    <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/inc_42-59ce79f32655b91f34e9ed4e5d53175f446ea263b57ffc85fd3572a1a4a1aade.jpg" alt="" />
                </Card>
            </Slider>
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

const Slider = styled.div`
    display: flex;
    gap: 5px;
    overflow-x: scroll;
    justify-content: space-around;
    padding: 10px;
`;

const Card = styled.div`
    border: 1px solid grey;
    padding: 10px;
    border-radius: 5px;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;

    img{
        /* height: 100px; */
    }
`;

export default LogoSlider;