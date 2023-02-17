"use client"
import styled from "styled-components"
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import { useState } from "react";
// import img from "/DealImage/deal1.png"



export const BestDealsComp = () => {

    const [data, setData] = useState([
        {
            id: 1,
            image: "/DealImage/deal1.png",
            price: "150 000",
            location: "Ikorodu, Lagos, Nigeria",
            plot: "2"
        },
        {
            id: 2,
            image: "/DealImage/deal2.png",
            price: "250 000",
            location: "Eko Atlantic, Lagos, Nigeria",
            plot: "2"
        },
        {
            id: 1,
            image: "/DealImage/deal3.png",
            price: "200 000",
            location: "Ikoyi, Lagos, Nigeria",
            plot: "1"
        },
    ])

    return (
        <Container>
            <Heading>
                <Title>Best deals for you</Title>
                <SeeAll>
                    <span>See all</span>
                    <ChevronRightRoundedIcon/>
                </SeeAll>
            </Heading>
            <CardDisplay>
                {
                    data?.map((props)=>(
            <Card key={props?.id} >
            <Image src={props?.image}/>
            <LocationAndPlot>
                <Location>
                    <LocationIcon src="/DealImage/location.png"/>
                    <span>
                       {props?.location}
                    </span>
                </Location>
                <Plot>{props?.plot} Plots</Plot>
            </LocationAndPlot>
            <ButtonAndPrice>
                <Button>Buy Now</Button>
                <Price>N{props?.price}</Price>
            </ButtonAndPrice>

                </Card>
                    ))
                }
               
               
            </CardDisplay>
        </Container>
    )
}

const Price = styled.div`
color: #7B7B7B;
font-weight: bold;
font-size: 16px;
`

const Button = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 10px;
width: 120px;
height: 40px;
font-size: 13px;
background: black;
border-radius: 5px;
color: white;
cursor: pointer;
transition: all 550ms;
:hover{
    transform: scale(1.02);
}
`

const Plot = styled.div`
font-size: 15px;
`

const LocationIcon = styled.img`
width: 20px;
object-fit: contain;
height: 20px;
`
const Location = styled.div`
display:flex;
align-items: center;
font-style: normal;
font-size: 15px;
font-weight: 400;
height: 30px;
overflow: hidden;

span{
    margin-left: 5px;
}

@media screen and (max-width: 937px){
    font-size: 13px;
}
`


const ButtonAndPrice = styled.div`
display:flex;
width: 100%;
justify-content: space-between;
align-items: center;
`

const LocationAndPlot = styled.div`
display:flex;
width: 100%;
align-items: center;
justify-content: space-between;
margin-bottom: 15px;
`

const Image = styled.img`
height: 70%;
width: 100%;
margin-bottom: 15px;
`

const Card = styled.div`
/* background-color: lightgray; */
height: 420px;
margin: 15px;
width: 390px;
border-radius: 5px;
overflow: hidden;
@media screen and (max-width: 937px){
    height: 390px;
}
@media screen and (max-width: 670px){
    width: 100%;
    margin: 15px 0;
}
`

const CardDisplay = styled.div`
width: 100%;
display:flex;
align-items: center;
@media screen and (max-width: 875px){
   flex-wrap: wrap;
   justify-content: center;
}
`

const SeeAll = styled.div`
display: flex;
align-items: center;
cursor: pointer;
@media screen and (max-width:400px){
  font-size: 14px;
}
`
const Title = styled.div`
font-style: normal;
font-weight: 800;
font-size: 32px;
display:flex;
flex: 1;

@media screen and (max-width:550px){
  font-size: 25px;
}
@media screen and (max-width:400px){
  font-size: 20px;
}
@media screen and (max-width:350px){
  font-size: 17px;
}
`

const Heading = styled.div`
display: flex;
width: 100%;
align-items: center;
@media screen and (max-width: 875px){
   margin-bottom: 20px;
}
`

const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
font-family: 'Avenir';
margin-bottom: 50px;

`