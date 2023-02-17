"use client"
import styled from "styled-components"
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import {AiFillHome,AiOutlineUser} from "react-icons/ai"
import {MdMessage,MdNotifications,MdArrowDropDown} from "react-icons/md"


export const HomeHeader = () => {
    return (
        <Container>
            <Wrapper>
                <Logo>Spring Logo</Logo>
                <Navigation>
                    <NavAndIcon>
                        <Icon>
                            <AiFillHome/>
                            
                        </Icon>
                        <Nav>Home</Nav>
                    </NavAndIcon>
                    <NavAndIcon>
                        <Icon>
                            <MdMessage/>
                            
                        </Icon>
                        <Nav>Messages</Nav>
                    </NavAndIcon>
                    <NavAndIcon>
                        <Icon>
                            <MdNotifications/>
                            
                        </Icon>
                        <Nav>Notification</Nav>
                    </NavAndIcon>
                    <NavAndIcon>
                        <Icon>
                            <AiOutlineUser/>
                            
                        </Icon>
                        <Nav>Account</Nav>
                    </NavAndIcon>
                   
                </Navigation>
                <Buttons>
                    <Profile src="/DealImage/deal1.png"/>
                    <DropDown>
                        <MdArrowDropDown/>
                    </DropDown>
                </Buttons>
                <MenuIcon>
                    <MenuRoundedIcon />
                </MenuIcon>
            </Wrapper>
        </Container>
    )
}

const DropDown = styled.div`
margin-left: 10px;
cursor: pointer;
font-size: 20px;
`

const Profile = styled.img`
width: 40px;
height: 40px;
border-radius: 50%;
`

const Icon = styled.div`
margin-right: 15px;
font-size: 18px;
`

const NavAndIcon = styled.div`
display:flex;
align-items: center;
font-style: normal;
font-weight: 800;
font-size: 14px;
color:lightgray;
cursor: pointer;
margin: 0 35px;

@media screen and (max-width: 1210px){
   margin: 0 20px;
}
@media screen and (max-width: 1060px){
   margin: 0 15px;
}
@media screen and (max-width: 950px){
   font-size: 12px;
}
@media screen and (max-width: 850px){
  margin: 0 12px;
}
@media screen and (max-width: 800px){
   display:none;
}
`

const MenuIcon = styled.div`
display:none;
@media screen and (max-width: 800px){
   display:flex;
   cursor: pointer;
}
`

const Button = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 10px;
gap: 10px;
width: 120px;
font-size: 14px;
height: 40px;
background: ${({bg})=>bg};
border: ${({br})=>br};
border-radius: 5px;
cursor: pointer;
flex: none;
order: 1;
flex-grow: 0;
margin: 0 10px;

@media screen and (max-width: 1000px){
   width: 100px;
   height: 35px;
   font-size: 12px;
}
`


const Nav = styled.div`
font-style: normal;
font-weight: 800;
font-size: 14px;
/* color: #000000; */
cursor: pointer;

`

const Buttons = styled.div`
display: flex;
align-items: center;
@media screen and (max-width: 800px){
   display:none;
}
`

const Navigation = styled.div`
display:flex;
align-items: center;
`

const Logo = styled.div`
font-family: 'Avenir';
font-style: normal;
font-weight: 800;
font-size: 14px;
line-height: 19px;

`

const Wrapper = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
width: 90%;
height: 100%;
`

const Container = styled.div`
width: 100%;
color: black;
height: 80px;
display:flex;
justify-content: center;
align-items: center;
font-family: 'Avenir';
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
/* background-color: blue; */
`
