"use client"
import { Header } from "./components/landing_page/Header";
import styled from "styled-components"
import {BestDealsComp} from "./components/landing_page/BestDealsComp";
import WhyChooseUs from "./components/landing_page/WhyChooseUs";
import HowMyFreedom from "./components/landing_page/HowMyFreedom";
import Feedback from "./components/landing_page/Feedback";
import LandOwner from "./components/landing_page/LandOwner";
import Footer from "./components/landing_page/Footer";



const Wrapper = styled.div`
width: 90%;
display: flex;
align-items: center;
flex-direction: column;
margin-bottom: 50px;
`

const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
background: #FFFFFF;
font-family: 'Avenir';
`

export default function Home() {
  return (
   <Container>
    <Wrapper>
    <Header/>
    <BestDealsComp/>
    <WhyChooseUs/>
    <HowMyFreedom/>
    <Feedback/>
    <LandOwner/>
    <Footer/>
    </Wrapper>
    </Container>
  )
}


