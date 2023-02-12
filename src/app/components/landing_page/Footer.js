"use client"
import styled from "styled-components"
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <Container>
    <Wrapper>
        {/* <Logo src={"/images/earli.png"}/> */}
        <NavigationsHolder>
            <Navigation>
                <Logo>Freedom Padi Logo</Logo>
               
            </Navigation>
            <Navigation>
                <Title>Company</Title>
                <NavHolder>
                    <Nav>About Us</Nav>
                    <Nav>Features</Nav>
                    <Nav>How it works</Nav>
                </NavHolder>
            </Navigation>
           
            <Navigation>
                <Title>Legal</Title>
                <NavHolder>
                    <Nav>Privacy Policy</Nav>
                    <Nav>Terms and Conditions</Nav>
                    <Nav>Cookies</Nav>
                </NavHolder>
            </Navigation>
            <Navigation>
                <Title>Support</Title>
                <NavHolder>
                    <Nav>FAQs</Nav>
                    <Nav>Contact Us</Nav>
                </NavHolder>
            </Navigation>
            <Navigation>
                <Title>Social</Title>
                <SocialIcon>
                    <FacebookRoundedIcon/>
                    <TwitterIcon/>
                    <InstagramIcon/>
                    <YouTubeIcon/>
                </SocialIcon>
            </Navigation>
        </NavigationsHolder>
        <LastText>
        ©2022 Earli Financial Technology. All rights reserved
        </LastText>
    </Wrapper>
</Container>
  )
}

export default Footer

const Icon = styled.div``

const SocialIcon = styled.div`
display:flex;
width: 130px;
justify-content: space-between;
font-size: 20px;
align-items: center;
`
const Nav = styled.div`
margin: 10px 0;
cursor: pointer;
font-size: 15px;
`

const NavHolder = styled.div``

const Title = styled.div`
margin-bottom: 10px;
font-weight: 500;
cursor: pointer;

font-style: normal;
font-weight: 800;
font-size: 16px;
`

const Navigation = styled.div`
display:flex;
flex-direction: column;
margin-right: 80px;
width: auto;
@media screen and (max-width: 600px){
    width: 200px;
    margin: 15px 0;
}

`

const LastText = styled.div`
color: #9D9D9D;
font-size: 14px;
width: 100%;
display: flex;
justify-content: center;
`

const NavigationsHolder = styled.div`
margin: 40px 0;
display: flex;
/* align-items: center; */
width: 100%;
justify-content: space-between;
/* background-color: red; */
@media screen and (max-width: 1000px){
    width: 80%;
}
@media screen and (max-width: 1000px){
    width: 80%;
}
@media screen and (max-width: 800px){
    width: 90%;
    flex-wrap: wrap;
}
`

const Logo = styled.div`
font-size: 18px;
font-weight: bold;
margin-right: 100px;
`

const Wrapper = styled.div`
width: 100%;
display:flex;
flex-direction: column;
@media screen and (max-width: 867px){
width: 90%;
}
`

const Container = styled.div`
border-top: 2px solid silver;
padding-top: 50px;
width: 100%;
height: 50vh;
display:flex;
justify-content: center;
align-items: center;
/* background: #F8F8FD; */
/* font-family: 'Space Grotesk', sans-serif; */
@media screen and (max-width: 600px){
    height: 100%;
    padding: 30px 0;
    margin-top: 50px;
}
`