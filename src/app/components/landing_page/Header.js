"use client";
import styled from "styled-components";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import Link from "next/link";

export const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>Feedom Padi Logo</Logo>
        <Navigation>
          <Nav>Home</Nav>
          <Nav>Company</Nav>
          <Nav>How it works</Nav>
          <Nav>Contact Us</Nav>
        </Navigation>
        <Buttons>
          <Button br='1px solid #000000' href={"/signin"}>
            Log In
          </Button>
          <Button bg='#000000' style={{ color: "white" }} href='/signup'>
            Sign Up
          </Button>
        </Buttons>
        <MenuIcon>
          <MenuRoundedIcon />
        </MenuIcon>
      </Wrapper>
    </Container>
  );
};

const MenuIcon = styled.div`
  display: none;
  @media screen and (max-width: 800px) {
    display: flex;
    cursor: pointer;
  }
`;

const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 10px;
  gap: 10px;
  width: 120px;
  font-size: 14px;
  height: 40px;
  background: ${({ bg }) => bg};
  border: ${({ br }) => br};
  border-radius: 5px;
  cursor: pointer;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0 10px;

  @media screen and (max-width: 1000px) {
    width: 100px;
    height: 35px;
    font-size: 12px;
  }
`;

const Nav = styled.div`
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  color: #000000;
  cursor: pointer;
  margin: 0 30px;

  @media screen and (max-width: 1210px) {
    margin: 0 20px;
  }
  @media screen and (max-width: 1060px) {
    margin: 0 15px;
  }
  @media screen and (max-width: 950px) {
    font-size: 12px;
  }
  @media screen and (max-width: 850px) {
    margin: 0 12px;
  }
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

const Buttons = styled.div`
  display: flex;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

const Navigation = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  font-family: "Avenir";
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 19px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 100%;
`;

const Container = styled.div`
  width: 100%;
  color: black;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  background-color: white;
  z-index: 5;
`;
