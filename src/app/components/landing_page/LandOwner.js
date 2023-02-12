"use client"
import styled from "styled-components"

const LandOwner = () => {
  return (
    <Container>
        <ContentAndImage>
            <Content>
                <Caption>
                Become a land owner with little cash
                </Caption>
                <Desc>
                We got you even if you don’t have millions to buy a land, you can own lands with as low as ₦50,000
                </Desc>
                <Button>
                    Get Started
                </Button>
            </Content>
            <ImageHolder>
                <MainImage src="/LandOwner/mainland.png"/>
                    <SubImage src="/LandOwner/subland.png"/>
                    <Arrow src="/LandOwner/landarrow.png"/>
            
            </ImageHolder>
            
        </ContentAndImage>
    </Container>
  )
}

export default LandOwner

const Arrow = styled.img`
width: 100px;
height: 10px;
position: absolute;
top: 150px;
left: -90px;
z-index: 20;
@media screen and (max-width: 1000px){
   width: 70px;
   left: -60px;
   top: 140px;
}
@media screen and (max-width: 850px){
   display: none;
}
`

const SubImage = styled.img`
position: absolute;

display:flex;
object-fit: cover;
/* background-color: red; */
width: 300px;
height: 250px;
top: 200px;
z-index: 20;
left: -20px;
@media screen and (max-width: 1300px){
    width: 250px;
    height: 200px;
}
@media screen and (max-width: 1080px){
    width: 200px;
    height: 150px;
    top: 170px;
}
@media screen and (max-width: 850px){
   width: 300px;
   height: 200px;
   top: 200px;
   left: -30px;
}
@media screen and (max-width: 650px){
   
   box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
}
@media screen and (max-width: 500px){
   width: 250px;
   height: 150px;
   top: 250px;
   box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
}
@media screen and (max-width: 400px){
 display:none;
}
/* position: absolute; */

`

const SubImageHold = styled.div`
/* bottom: -150px; */
/* left: -100px; */
/* width: 100px;
height: 100px;
/* left: 682px; */
/* top: 189px; */
/* box-shadow: 0px 24px 48px rgba(0, 0, 0, 0.28); */
/* z-index: 4; */
`

const MainImage = styled.img`
width: 100%;
height: 100%;
@media screen and (max-width: 450px){
  object-fit: cover;
}
`

const ImageHolder = styled.div`
position: relative;
width: 500px;
height: 400px;
top: 0;
bottom: 0;
@media screen and (max-width: 1300px){
    width: 450px;
    height: 350px;
}
@media screen and (max-width: 1120px){
    width: 400px;
    height: 300px;
}
@media screen and (max-width: 1000px){
   width: 350px;
   height: 280px;
}
@media screen and (max-width: 850px){
   width: 100%;
   height: 400px;
}
@media screen and (max-width: 450px){
   width: 100%;
   height: 350px;
}
@media screen and (max-width: 400px){
   width: 90%;
   /* background-color: red; */
   height: 350px;
   /* box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px; */
}
@media screen and (max-width: 390px){
   width: 80%;
   /* background-color: red; */
   height: 250px;
   /* box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px; */
}
`

const Button = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 120px;
height: 48px;
font-size: 12px;
background: #000000;
border-radius: 5px;
color: white;
cursor: pointer;
`

const Desc = styled.div`
font-style: normal;
font-weight: 300;
font-size: 17px;
line-height: 27px;
color: rgba(123, 123, 123, 1);
margin-bottom: 15px;

`

const Caption = styled.div`
font-style: normal;
font-weight: 800;
font-size: 43px;
line-height: 124.1%;
margin-bottom: 14px;
@media screen and (max-width: 1120px){
    font-size: 38px;
    
}
@media screen and (max-width: 900px){
   font-size: 25px;
}
`

const Content = styled.div`
display: flex;
flex-direction: column;
width: 550px;
@media screen and (max-width: 1300px){
    width: 450px;
}
@media screen and (max-width: 1120px){
    width: 400px;  
}
@media screen and (max-width: 900px){
   align-items: center;
   text-align: center;
   width: 70%;
}
@media screen and (max-width: 600px){
   align-items: center;
   text-align: center;
   width: 90%;
}
@media screen and (max-width: 500px){
   align-items: center;
   text-align: center;
   width: 100%;
}
`

const ContentAndImage = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
height: auto;
@media screen and (max-width: 900px){
   flex-wrap: wrap;
   flex-direction: column-reverse;
   /* background-color: green; */
}
`

const Container = styled.div`
width: 100%;
display:flex;
justify-content: center;
/* background-color: green; */
height: 100%;
`

