"use-client"
import { useState } from "react"
import styled from "styled-components"

const HowMyFreedom = () => {

  const [data, setData] = useState([
    {
      id: 1,
      count: "01",
      title: "Account creation",
      desc: "Create an account on My Freedom Padi to start enjoying financial freedom with emerging real estate products🚀"
    },
    {
      id: 2,
      count: "02",
      title: "Explore",
      desc: "Search and find landed properties has little as possible. We have properties for everyone😉"
    },
    {
      id: 3,
      count: "03",
      title: "Purchase",
      desc: "Pay for the property you want after reading the details of the property and inspecting if you wish💰"
    },
    {
      id: 4,
      count: "04",
      title: "Become a Landlord",
      desc: "The C of O and land properties get delivered to you and you have the full claim of the property🎉"
    },
  ])
  
  return (
    <Container>
        <Title>How Spring Works</Title> 
        <CardHolder>
          {
            data.map((props)=>(
              <Card>
            <CardWrapper>
            <Count>{props?.count}</Count>
            <CardTitle>{props?.title}</CardTitle>
            <CardDesc>
            {props?.desc}
            </CardDesc>
            </CardWrapper>
          </Card>
            ))
          }
          
        </CardHolder>
    </Container>
  )
}

export default HowMyFreedom

const CardDesc = styled.div`
font-style: normal;
font-weight: 300;
font-size: 13px;
line-height: 22px;
letter-spacing: 0.1px;

`

const CardTitle = styled.div`
font-style: normal;
font-weight: 800;
font-size: 17px;
margin-bottom: 10px;

`

const Count = styled.div`
font-style: normal;
font-weight: 800;
font-size: 35px;
margin-top: 25px;
margin-bottom: 30px;
`

const CardWrapper = styled.div`
width: 85%;
display:flex;
flex-direction: column;
`


const Card = styled.div`
width: 295px;
height: 227px;
display: flex;
justify-content: center;
background-color: #F9F9FB;
border-radius: 5px;
margin-top: 20px;
margin-bottom: 20px;
margin-right: 40px;

@media screen and (max-width: 700px){
  margin-right: 0px;
}
@media screen and (max-width: 700px){
  width: 100%;
}
`

const CardHolder = styled.div`
display:flex;
width: 100%;
flex-wrap: wrap;
`

const Title = styled.div`
font-style: normal;
font-weight: 800;
font-size: 32px;
margin-bottom: 30px;
@media screen and (max-width: 650px){
  font-size: 22px;
}
@media screen and (max-width: 650px){
  font-size: 22px;
}
`

const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
padding-bottom: 80px;
margin-bottom: 50px;
border-bottom: 0.5px solid #7B7B7B;

@media screen and (max-width: 650px){
  padding-bottom: 40px;
}
`