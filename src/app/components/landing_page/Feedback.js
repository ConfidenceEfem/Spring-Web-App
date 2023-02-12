
"use client"
import { useState } from "react"
import styled from "styled-components"

const Feedback = () => {

  const [data, setData] = useState([
    {
      id: 1,
      image: "/DealImage/deal1.png",
      name: "Jayden Adekola",
      topic: "Amazing experience!😍",
      desc: " I had the most beautiful experience buying a land on MyFreedom Padi. I was able to get all the necessary details about the land I was going to buy and buy without any hassle.",
    },
    {
      id: 2,
      image: "/DealImage/deal1.png",
      name: "Jayden Adekola",
      topic: "Amazing experience!😍",
      desc: " I had the most beautiful experience buying a land on MyFreedom Padi. I was able to get all the necessary details about the land I was going to buy and buy without any hassle.",
    },
    {
      id: 3,
      image: "/DealImage/deal1.png",
      name: "Jayden Adekola",
      topic: "Amazing experience!😍",
      desc: " I had the most beautiful experience buying a land on MyFreedom Padi. I was able to get all the necessary details about the land I was going to buy and buy without any hassle.",
    },
    {
      id: 4,
      image: "/DealImage/deal1.png",
      name: "Jayden Adekola",
      topic: "Amazing experience!😍",
      desc: " I had the most beautiful experience buying a land on MyFreedom Padi. I was able to get all the necessary details about the land I was going to buy and buy without any hassle.",
    },
  
  ])

  return (
    <Container>
      <TopContent>
        <MainTopic>What our users are saying</MainTopic>
        <FirstSubTopic>
        We are trusted all around the nation by thousands of people. Take their word for it, not ours.
        </FirstSubTopic>
      </TopContent>
      <CardHolder>
        {
          data.map((props)=>(
             <Card key={props?.id}>
         <CardWrapper>
         <Profile>
            <Image src={props?.image}/>
            <Name>
            {props?.name}
            </Name>
          </Profile>
            <Topic>{props?.topic}</Topic>
            <Desc>
            {props?.desc}
            </Desc>
         </CardWrapper>
        </Card>
          ))
        }
       
      </CardHolder>
    </Container>
  )
}

export default Feedback

const Desc = styled.div`
font-style: normal;
font-weight: 300;
font-size: 14px;
line-height: 150%;
`

const Topic = styled.div`
font-style: normal;
font-weight: 800;
font-size: 14px;
margin-bottom: 15px;
`

const Name = styled.div`
font-style: normal;
font-weight: 500;
font-size: 14px;
`

const Image = styled.img`
width: 24px;
object-fit: cover;
height: 24px;
border-radius: 50%;
margin-right: 10px;
`

const Profile = styled.div`
display:flex;
align-items: center;
margin-top: 20px;
margin-bottom: 30px;
`

const CardWrapper = styled.div`
width: 90%;
display: flex;
flex-direction: column;
`

const Card = styled.div`
width: 295px;
height: 228px;
display: flex;
justify-content: center;
/* border: 1px solid rgba(123, 123, 123, 0.3); */
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
border-radius: 5px;
margin-right: 25px;
margin-left: 10px;
margin-top: 15px;
margin-bottom: 15px;
@media screen  and (max-width: 350px){
  width: 270px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  height: 235px;
}
`

const FirstSubTopic = styled.div`
width: 337px;
font-style: normal;
font-weight: 300;
font-size: 14px;
line-height: 19px;
text-align: center;
@media screen and (max-width: 380px){
 width: 90%;
 font-size: 13px;
}
`

const MainTopic = styled.div`
font-style: normal;
font-weight: 800;
font-size: 32px;
margin-bottom: 20px;
@media screen and (max-width: 530px){
  font-size: 28px;
  margin-bottom: 15px;
}
@media screen and (max-width: 400px){
 font-size: 22px;
}
`

const CardHolder = styled.div`
width: 100%;
/* display: flex;
/* flex-wrap: wrap; */
/* justify-content: center; */ 
display: grid;
grid-template-columns: repeat(4, 1fr);
@media screen and (max-width: 800px){
  overflow-x: scroll;
}
`

const TopContent = styled.div`
text-align: center;
margin-bottom: 40px;
display:flex;
flex-direction: column;
align-items: center;
`

const Container = styled.div`
width: 100%;
display:flex;
flex-direction: column;
align-items: center;
margin-bottom: 100px;
@media screen and (max-width: 500px){
  margin-bottom: 50px;
}
`