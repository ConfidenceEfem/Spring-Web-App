"use client";
import styled from "styled-components";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { useState } from "react";

const DetailPage = () => {
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
        <RedirectAndDetails>
          <RedirectComp>
            <IconAndTitle>
              <Icon>
                <ArrowBackIcon sx={{ width: "20px" }} />
              </Icon>
              <Label>Back</Label>
            </IconAndTitle>
          </RedirectComp>
          <DetailsComp>
            <ImageCompAndContent>
              <ImageSlider></ImageSlider>
              <AboutComp>
                <CompTitle>About</CompTitle>
                <AboutDesc>
                  This land is situated at the Magboro area of Ikorodu, Lagos,
                  Nigeria. Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </AboutDesc>
              </AboutComp>
              <DocumentComp>
                <DocumentTitle>
                  Documents available after purchase
                </DocumentTitle>
                <DocumentLabelAndIcon>
                  <DocLabaelAndIcon>
                    <DocIcon>
                      <DocIconImg src='/DealImage/docimg.png' />
                    </DocIcon>
                    <DocLabel>Certificate of Occupancy</DocLabel>
                  </DocLabaelAndIcon>
                  <DocLabaelAndIcon>
                    <DocIcon>
                      <DocIconImg src='/DealImage/docimg.png' />
                    </DocIcon>
                    <DocLabel>Deed of Transfer</DocLabel>
                  </DocLabaelAndIcon>
                  <DocLabaelAndIcon>
                    <DocIcon>
                      <DocIconImg src='/DealImage/docimg.png' />
                    </DocIcon>
                    <DocLabel>The Mother Deed</DocLabel>
                  </DocLabaelAndIcon>
                  <DocLabaelAndIcon>
                    <DocIcon>
                      <DocIconImg src='/DealImage/docimg.png' />
                    </DocIcon>
                    <DocLabel>Sale and Purchase Agreement</DocLabel>
                  </DocLabaelAndIcon>
                </DocumentLabelAndIcon>
              </DocumentComp>
            </ImageCompAndContent>
            <LocationAndAmount>
              <LandTitleAndLocation>
                <LandTitle>Grillo Landed Property</LandTitle>
                <LandLocation>
                  <LocationIcon>
                    <LocationOnOutlinedIcon sx={{ color: "gray" }} />
                  </LocationIcon>
                  <LocationLabel>Ikorodu, Lagos, Nigeria</LocationLabel>
                  <PlotAndCircle>
                    <PlotCircle />
                    <Plots>2 Plots</Plots>
                  </PlotAndCircle>
                </LandLocation>
              </LandTitleAndLocation>
              <DetailsCard>
                <DetailsCardWrapper>
                  <PriceDetailsAndButton>
                    <PricesAndLabel>
                      <PriceAndLabel>
                        <PriceLabel>Price</PriceLabel>
                        <PriceAmount>N150,000</PriceAmount>
                      </PriceAndLabel>
                      <PriceAndLabel>
                        <PriceLabel>Vat</PriceLabel>
                        <PriceAmount>N10,000</PriceAmount>
                      </PriceAndLabel>
                      <PriceAndLabel>
                        <PriceLabel>Total</PriceLabel>
                        <PriceAmount1>N150,000</PriceAmount1>
                      </PriceAndLabel>
                    </PricesAndLabel>
                    <Buttons>
                      <Button bd>Pay in instalments</Button>
                      <Button bg cl>
                        Buy Now
                      </Button>
                    </Buttons>
                  </PriceDetailsAndButton>
                  <LocationDetails>
                    <MapLocationTitle>Location</MapLocationTitle>
                    <MapImage></MapImage>
                  </LocationDetails>
                </DetailsCardWrapper>
              </DetailsCard>
            </LocationAndAmount>
          </DetailsComp>
        </RedirectAndDetails>
        <SimilarProperties>
          <SimilarTitle>Similar Properties</SimilarTitle>
          <PropertiesHolder>
            {data?.map((props) => (
              <Card>
                <Image src={props?.image} />
                <LocationAndPlot>
                  <Location>
                    <CardLocationIcon src='/DealImage/location.png' />
                    <span>{props?.location}</span>
                  </Location>
                  <Plot>{props?.plot} Plots</Plot>
                </LocationAndPlot>
                <ButtonAndPrice>
                  {/* <Button>Buy Now</Button> */}
                  <CardPrice>N{props?.price}</CardPrice>
                </ButtonAndPrice>
              </Card>
            ))}
          </PropertiesHolder>
        </SimilarProperties>
      </Wrapper>
    </Container>
  );
};

export default DetailPage;

const CardPrice = styled.div`
  color: black;
  font-weight: bold;
  font-size: 18px;
`;

const Plot = styled.div`
  font-size: 15px;
`;

const CardLocationIcon = styled.img`
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

const PropertiesHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
`;

const SimilarTitle = styled.div`
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 20px;
  @media screen and (max-width: 500px) {
    font-size: 18px;
    margin-bottom: 15px;
  }
`;

const MapImage = styled.div`
  width: 100%;
  height: 150px;
  background-color: blue;
`;

const MapLocationTitle = styled.div`
  font-style: normal;
  font-weight: 800;
  font-size: 15px;
  margin-bottom: 15px;
  text-align: left;
  width: 100%;
`;

const LocationDetails = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Button = styled.div`
  width: 200px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ bg }) => (bg ? "#000000" : "transparent")};
  color: ${({ cl }) => (cl ? "#ffffff" : "black")};
  background-color: ${({ bg }) => (bg ? "#000000" : "transparent")};
  border: ${({ bd }) => (bd ? "2px solid #000000" : "transparent")};
  font-size: 14px;
  cursor: pointer;
  letter-spacing: 0.2px;
  border-radius: 4px;
  transition: all 660ms;
  :hover {
    transform: scale(1.02);
  }
  @media screen and (max-width: 1110px) {
    width: 150px;
  }
  @media screen and (max-width: 1020px) {
    width: 120px;
    font-size: 10px;
  }
  @media screen and (max-width: 900px) {
    width: 200px;
    font-size: 13px;
  }
  @media screen and (max-width: 550px) {
    width: 45%;
    font-size: 10px;
  }
`;

const Buttons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PriceAmount1 = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
`;
const PriceAmount = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
`;

const PriceLabel = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #7b7b7b;
`;

const PriceAndLabel = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0;
`;

const PricesAndLabel = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
`;

const PriceDetailsAndButton = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  padding-bottom: 25px;
  border-bottom: 2px solid silver;
`;

const DetailsCardWrapper = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  margin-top: 25px;
  flex-direction: column;
`;

const DetailsCard = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  justify-content: center;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  @media screen and (max-width: 1110px) {
    width: 400px;
  }
  @media screen and (max-width: 1020px) {
    width: 300px;
  }
  @media screen and (max-width: 900px) {
    width: 500px;
  }
  @media screen and (max-width: 680px) {
    width: 100%;
  }
`;

const Plots = styled.div``;

const PlotCircle = styled.div`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: gray;
  margin: 15px;
`;
const PlotAndCircle = styled.div`
  display: flex;
  align-items: center;
`;

const LocationLabel = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
`;

const LocationIcon = styled.div``;

const LandLocation = styled.div`
  display: flex;
  align-items: center;
  color: gray;
  align-items: center;
  font-size: 14px;
`;

const LandTitle = styled.div`
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 10px;
  @media screen and (max-width: 500px) {
    font-size: 18px;
  }
`;

const LandTitleAndLocation = styled.div`
  display: flex;
  flex-direction: column;
`;

const DocIconImg = styled.img``;

const DocLabel = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
`;

const DocIcon = styled.div`
  background-color: rgba(47, 124, 12, 0.1);
  width: 30px;
  height: 30px;
  /* background: green; */
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

const DocLabaelAndIcon = styled.div`
  display: flex;
  align-items: center;
`;

const DocumentLabelAndIcon = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 15px;
  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const DocumentTitle = styled.div`
  font-style: normal;
  font-weight: 800;
  font-size: 15px;
  margin-bottom: 15px;
`;

const LocationAndAmount = styled.div`
  display: flex;
  flex-direction: column;
`;

const DocumentComp = styled.div`
  display: flex;
  flex-direction: column;
`;

const AboutDesc = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
`;

const CompTitle = styled.div`
  font-style: normal;
  font-weight: 800;
  font-size: 15px;
  margin-bottom: 10px;
`;

const AboutComp = styled.div`
  padding-bottom: 15px;
  border-bottom: 2px solid silver;
  margin-bottom: 25px;
`;

const ImageSlider = styled.div`
  width: 100%;
  height: 400px;
  background-color: blue;
  margin-bottom: 25px;
  padding-bottom: 15px;
  border-bottom: 2px solid silver;
  @media screen and (max-width: 1110px) {
    height: 300px;
  }
`;

const ImageCompAndContent = styled.div`
  display: flex;
  width: 600px;
  flex-direction: column;
  margin-right: 80px;
  @media screen and (max-width: 900px) {
    margin-bottom: 50px;
    margin-right: 0px;
  }
  @media screen and (max-width: 680px) {
    width: 100%;
  }
`;

const Label = styled.div`
  font-size: 16px;
  margin-left: 5px;
  font-weight: 500;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
`;

const IconAndTitle = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const DetailsComp = styled.div`
  display: flex;
  width: 100%;
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

const RedirectComp = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const SimilarProperties = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const RedirectAndDetails = styled.div`
  width: 100%;
  display: flex;
  /* align-items: center; */
  flex-direction: column;
  margin-bottom: 50px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-family: "Avenir";
  margin-bottom: 50px;
`;

const Wrapper = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;
