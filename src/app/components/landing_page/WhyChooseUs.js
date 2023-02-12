"use client"
import React, { useState } from 'react'
import styled from "styled-components"

const WhyChooseUs = () => {

  const [data, setData] = useState([
    {
      id: 1,
      icon: "/whyIcon/why1.png",
      title: "Seamless onboarding",
      desc: "With My FreedomPadi, you can sign up in a few seconds and start buying landed properties immediately."
    },
    {
      id: 2,
      icon: "/whyIcon/why2.png",
      title: "Automatic investment",
      desc: "With My FreedomPadi, you can sign up in a few seconds and start buying landed properties immediately."
    },
    {
      id: 3,
      icon: "/whyIcon/why3.png",
      title: "Zero maintenance fee",
      desc: "With My FreedomPadi, you can sign up in a few seconds and start buying landed properties immediately."
    },
    {
      id: 1,
      icon: "/whyIcon/why4.png",
      title: "No agency fee",
      desc: "With My FreedomPadi, you can sign up in a few seconds and start buying landed properties immediately."
    },
    {
      id: 1,
      icon: "/whyIcon/why5.png",
      title: "Utility bills payment",
      desc: "With My FreedomPadi, you can sign up in a few seconds and start buying landed properties immediately."
    },
  ])

  return (
    <Container>
        <Title>Why choose us</Title>
        <CardDisplay>
          {data?.map((props)=>(
            <Card key={props?.id}>
                <IconCircle>
                    <Icon src={props?.icon}/>
                </IconCircle>
                <CardTitle>{props?.title}</CardTitle>
                <CardDesc>
                {props?.desc}
                </CardDesc>
            </Card>
          ))}
            
           
        </CardDisplay>
    </Container>
  )
}

export default WhyChooseUs

const CardDesc = styled.div`
font-size: 14px;
font-style: normal;
font-weight: 300;
font-size: 14px;
line-height: 21px;
color: #7B7B7B;
`

const CardTitle = styled.div`
font-style: normal;
font-weight: bold;
font-size: 18px;
margin: 15px 0;
`

const Icon = styled.img``


const IconCircle = styled.div`
width: 48px;
height: 48px;
border-radius: 50%;
display:flex;
justify-content: center;
align-items: center;
background-color: #fafcff;

`


const Card = styled.div`
display: flex;
/* background: blue; */
flex-direction: column;
align-items: flex-start;
padding: 0px;
width: 320px;
height: 156px;
margin-top: 20px;
margin-bottom: 20px;
margin-right: 130px;
@media screen and (max-width: 1200px){
  margin-right: 70px;
}
@media screen and (max-width: 500px){
  margin: 20px 0;
}
@media screen and (max-width: 350px){
  width: 305px;
}
`

const CardDisplay = styled.div`
display: flex;
flex-wrap: wrap;
`

const Title = styled.div`
font-style: normal;
font-weight: 800;
font-size: 32px;
margin-bottom: 30px;
@media screen and (max-width: 500px){
  font-size: 25px;
  margin-bottom: 15px;
}
@media screen and (max-width: 400px){
  font-size: 20px;
  margin-bottom: 15px;
}
@media screen and (max-width: 350px){
  font-size: 18px;
  margin-bottom: 20px;
}
`

const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
margin-bottom: 100px;
font-family: 'Avenir';

`