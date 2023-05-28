"use client";
import styled from "styled-components";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TermsAndConditionModal from "../TermsAndConditionModal";

const Hero = () => {
  return (
    <Container>
      <Wrapper>
        <Contents>
          <Caption>We are your financial freedom padi</Caption>
          <DescComp>
            <Desc>
              One stop platform where you can build wealth through emerging real
              estate properties.
            </Desc>
            <GetStarted>Get Started</GetStarted>
          </DescComp>
        </Contents>
        <ImageAndSearchComp>
          <ImageComp>
            <Image src='/hero.png' alt='hero' />
            <Image src='/hero1.png' alt='hero' />
          </ImageComp>
          <SearchComp>
            <SearchWrapper>
              <SearchItemHolder>
                <SearchItem>
                  <SearchContent>
                    <SearchSelect displayEmpty>
                      <MenuItem sx={{ border: "none", outline: "none" }}>
                        Location
                      </MenuItem>
                    </SearchSelect>
                    <SearchSubTitle>
                      Where do you want to buy land?
                    </SearchSubTitle>
                  </SearchContent>
                </SearchItem>
                <SearchItem>
                  <SearchContent>
                    <SearchSelect
                      displayEmpty
                      labelId='demo-simple-select-filled-label'
                      id='demo-simple-select-filled'
                    >
                      <MuiSelectTag sx={{ border: "none", outline: "none" }}>
                        Land Size
                      </MuiSelectTag>
                    </SearchSelect>
                    <SearchSubTitle>How many plots or acres?</SearchSubTitle>
                  </SearchContent>
                </SearchItem>
                <SearchItem>
                  <SearchContent>
                    <SearchSelect displayEmpty>
                      <MenuItem sx={{ border: "none", outline: "none" }}>
                        Budget
                      </MenuItem>
                    </SearchSelect>
                    <SearchSubTitle>Add your Budget</SearchSubTitle>
                  </SearchContent>
                </SearchItem>
              </SearchItemHolder>
              <SearchButton>
                <span>Search</span>
              </SearchButton>
            </SearchWrapper>
            <MobileSearchWrapper>
              <MobileSearhLeftItems>
                <MobileTopTag>Search for lands</MobileTopTag>
                <SpecifiyLand>Specify land details</SpecifiyLand>
              </MobileSearhLeftItems>
              <RightStartButton>Start</RightStartButton>
            </MobileSearchWrapper>
          </SearchComp>
        </ImageAndSearchComp>
      </Wrapper>
    </Container>
  );
};

export default Hero;

const MuiSelectTag = styled(MenuItem)`
  && {
    border: 1px solid white;
    outline: 1px solid white;
  }
`;

const RightStartButton = styled.div`
  padding: 12px 35px;
  background-color: black;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  font-size: 14px;
  @media screen and (max-width: 350px) {
    padding: 12px 32px;
  }
`;

const SpecifiyLand = styled.div`
  font-size: 15px;
  color: gray;
  @media screen and (max-width: 350px) {
    font-size: 13px;
  }
`;

const MobileTopTag = styled.div`
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 15px;
  @media screen and (max-width: 350px) {
    font-size: 15px;
  }
`;

const MobileSearhLeftItems = styled.div``;

const SearchButton = styled.div`
  span {
    width: 100px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
    color: white;
    cursor: pointer;
    border-radius: 4px;
    font-size: 13px;
    transition: all 550ms;
    :hover {
      transform: scale(1.02);
    }
  }
`;

const SearchItemHolder = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20px;
  width: 90%;
`;

const SearchSubTitle = styled.div`
  font-family: "Avenir";
  font-style: normal;
  font-weight: 300;
  font-size: 14px;

  color: #7b7b7b;
`;

const SearchSelect = styled(Select)`
  && {
    border: 2px solid white;
    outline: 2px solid white;
    background-color: none;
    /* outline: none; */
    font-weight: 600;
    width: auto;
    margin-bottom: 10px;
    height: 40px;
    font-family: "Avenir";
  }
`;

const SearchContent = styled.div``;

const SearchItem = styled.div`
  border-right: 1px solid silver;
  display: flex;
  align-items: center;
  width: 90%;
`;

const MobileSearchWrapper = styled.div`
  display: none;
  @media screen and (max-width: 800px) {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const SearchWrapper = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 350px;
  @media screen and (max-width: 890px) {
    height: 300px;
  }
  @media screen and (max-width: 700px) {
    height: 250px;
  }
  @media screen and (max-width: 500px) {
    height: 200px;
  }
`;

const SearchComp = styled.div`
  width: 90%;
  min-height: 100px;
  height: auto;
  background: white;
  box-shadow: 0px 15px 30px rgba(115, 115, 115, 0.1);
  border-radius: 10px;
  position: absolute;
  bottom: -40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageComp = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
`;

const ImageAndSearchComp = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

const GetStarted = styled.div`
  width: 200px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;
  cursor: pointer;
  border-radius: 4px;
  font-size: 13px;
  transition: all 550ms;
  :hover {
    transform: scale(1.02);
  }
`;

const Desc = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 27px;
  color: #7b7b7b;
  margin-bottom: 20px;
  @media screen and (max-width: 800px) {
    font-size: 25px;
    line-height: 33px;
  }
  @media screen and (max-width: 700px) {
    font-size: 22px;
  }
  @media screen and (max-width: 500px) {
    font-size: 18px;
  }
`;

const DescComp = styled.div`
  display: flex;
  flex-direction: column;
  width: 550px;
  @media screen and (max-width: 1110px) {
    width: 450px;
  }
  @media screen and (max-width: 800px) {
    width: 90%;
    text-align: center;
    align-items: center;
    justify-content: center;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

const Caption = styled.div`
  width: 450px;
  font-style: normal;
  font-weight: 800;
  font-size: 46px;
  font-family: "Avenir";
  line-height: 124.1%;
  @media screen and (max-width: 1110px) {
    width: 400px;
    font-size: 40px;
  }
  @media screen and (max-width: 900px) {
    width: 400px;
    font-size: 35px;
  }
  @media screen and (max-width: 800px) {
    margin-bottom: 20px;
    width: 100%;
  }
  @media screen and (max-width: 500px) {
    font-size: 33px;
  }
  @media screen and (max-width: 350px) {
    font-size: 30px;
  }
`;

const Contents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    width: 100%;
    text-align: center;
    align-items: center;
    justify-content: center;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  width: 100%;
  margin-bottom: 80px;
  /* height: 50px; */
  /* background-color: red; */
`;
