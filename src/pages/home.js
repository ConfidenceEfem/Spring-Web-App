"use client"
import { HomeHeader } from "@/app/components/HomeHeader"
import RecommendedPage from "@/app/components/RecommendedPage"
import styled from "styled-components"
import "./app.css"

const Home = () => {
    return (
        <Container>
            <HomeHeader/>
            <RecommendedPage/>
        </Container>
    )
}

export default Home

const Container = styled.div`
width: 100%;
display:flex;
flex-direction: column;
height:100%;
min-height: 100vh;
align-items: center;
`