"use client"
import DetailPage from "@/app/components/DetailPage"
import { HomeHeader } from "@/app/components/HomeHeader"
import styled from "styled-components"
import "./app.css"

const Detail = () => {
    return (
        <Container>
            <HomeHeader/>
            <DetailPage/>
        </Container>
    )
}

export default Detail

const Container = styled.div`
width: 100%;
display:flex;
flex-direction: column;
height:100%;
min-height: 100vh;
align-items: center;
`