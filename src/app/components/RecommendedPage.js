"use client";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { FiFilter } from "react-icons/fi";
import { useState } from "react";
import Link from "next/link";

const RecommendedPage = () => {
  const [data, setData] = useState([
    {
      id: 1,
      image: "/DealImage/deal1.png",
      price: "150 000",
      location: "Ikorodu, Lagos, Nigeria",
      plot: "2",
    },
    {
      id: 2,
      image: "/DealImage/deal2.png",
      price: "250 000",
      location: "Eko Atlantic, Lagos, Nigeria",
      plot: "2",
    },
    {
      id: 1,
      image: "/DealImage/deal3.png",
      price: "200 000",
      location: "Ikoyi, Lagos, Nigeria",
      plot: "1",
    },
  ]);

  return (
    <Container>
      <Wrapper>
        <Heading>
          <NameAndGreeting>
            <Greeting>Good morning 😎</Greeting>
            <Name>Oluwapekumi</Name>
          </NameAndGreeting>
          <SearchAndButton>
            <SearchComp>
              <SearchIcon>
                <AiOutlineSearch />
              </SearchIcon>
              <SearchInput placeholder='Search lands by location or size' />
            </SearchComp>
            <FilterButton>
              <FilterIcon>
                <FiFilter />
              </FilterIcon>
              <Filter>Filters</Filter>
            </FilterButton>
          </SearchAndButton>
        </Heading>
        <CardComp>
          <Title>Recommended Lands</Title>
          <CardHolder>
            {data?.map((props) => (
              //   <Link to='/detail'>
              <Card>
                <Image src={props?.image} />
                <LocationAndPlot>
                  <Location>
                    <LocationIcon src='/DealImage/location.png' />
                    <span>{props?.location}</span>
                  </Location>
                  <Plot>{props?.plot} Plots</Plot>
                </LocationAndPlot>
                <ButtonAndPrice>
                  {/* <Button>Buy Now</Button> */}
                  <Price>N{props?.price}</Price>
                </ButtonAndPrice>
              </Card>
              //   </Link>
            ))}
          </CardHolder>
        </CardComp>
        <LoadMore>
          <LoadButton>Load More</LoadButton>
        </LoadMore>
      </Wrapper>
    </Container>
  );
};

export default RecommendedPage;

const LoadButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 40px;
  border: 2px solid black;
  border-radius: 5px;
  cursor: pointer;
  font-size: 13px;
  transition: all 880ms;
  :hover {
    transform: scale(1.02);
  }
  margin-bottom: 30px;
  @media screen and (max-width: 500px) {
    width: 90px;
    height: 35px;
    font-size: 12px;
  }
`;

const LoadMore = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Price = styled.div`
  color: black;
  font-weight: bold;
  font-size: 18px;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 120px;
  height: 40px;
  font-size: 13px;
  background: black;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  transition: all 550ms;
  :hover {
    transform: scale(1.02);
  }
`;

const Plot = styled.div`
  font-size: 15px;
`;

const LocationIcon = styled.img`
  width: 20px;
  object-fit: contain;
  height: 20px;
`;
const Location = styled.div`
  display: flex;
  align-items: center;
  font-style: normal;
  font-size: 15px;
  font-weight: 400;
  height: 30px;
  overflow: hidden;

  span {
    margin-left: 5px;
  }

  @media screen and (max-width: 937px) {
    font-size: 13px;
  }
`;

const ButtonAndPrice = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const LocationAndPlot = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const Image = styled.img`
  height: 70%;
  width: 100%;
  margin-bottom: 15px;
`;

const Card = styled.div`
  /* background-color: lightgray; */
  height: 420px;
  /* margin: 15px; */
  width: 390px;
  border-radius: 5px;
  overflow: hidden;
  transition: all 770ms;
  cursor: pointer;
  :hover {
    transform: scale(1.02);
  }
  @media screen and (max-width: 937px) {
    height: 390px;
  }
  @media screen and (max-width: 670px) {
    width: 100%;
    margin: 15px 0;
  }
`;
const CardHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 20px;
  @media screen and (max-width: 500px) {
    font-size: 18px;
    margin-bottom: 15px;
  }
`;

const CardComp = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-start;
  flex: 1;
`;

const Filter = styled.div``;

const FilterIcon = styled.div`
  margin-right: 5px;
`;

const FilterButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 110px;
  height: 40px;
  border: 2px solid black;
  border-radius: 5px;
  cursor: pointer;
  font-size: 15px;
  transition: all 880ms;
  :hover {
    color: white;
    background-color: black;
  }
  @media screen and (max-width: 500px) {
    width: 90px;
    height: 35px;
    font-size: 12px;
  }
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  width: 88%;
  height: 95%;
  font-family: "Avenir";
`;

const SearchIcon = styled.div`
  margin-right: 12px;
  cursor: pointer;
  font-size: 15px;
`;

const SearchComp = styled.div`
  display: flex;
  align-items: center;
  background: #f9f9fb;
  border-radius: 8px;
  padding: 10px;
  height: 30px;
  width: 300px;
  font-family: "Avenir";
  margin-right: 25px;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

const SearchAndButton = styled.div`
  display: flex;
  align-items: center;
`;

const Greeting = styled.div`
  font-size: 12px;
  color: gray;
  margin-bottom: 10px;
  @media screen and (max-width: 500px) {
    font-size: 11px;
  }
`;

const Name = styled.div`
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0.2px;
  @media screen and (max-width: 500px) {
    font-size: 18px;
  }
`;

const NameAndGreeting = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Heading = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
  margin-bottom: 80px;
  @media screen and (max-width: 500px) {
    margin-top: 40px;
    margin-bottom: 60px;
  }
`;

const Wrapper = styled.div`
  width: 90%;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-family: "Avenir";
`;
