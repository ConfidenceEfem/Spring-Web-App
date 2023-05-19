"use client";
import "./app.css";
import styled from "styled-components";
import { AiFillCloseCircle } from "react-icons/ai";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// import {IoMenuSharp} from "react-icons/io"
import Hamburger from "@mui/icons-material/Menu";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useState } from "react";
import {
  ApiLink,
  ErrorFunction,
} from "@/app/components/ErrorHandler/ErrorHandler";
import axios from "axios";
import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress";

const SignUp = () => {
  const [toggle, setToggle] = useState(false);

  const [loading, setLoading] = useState(false);

  const schema = yup.object().shape({
    name: yup.string().required("Please input your name"),
    email: yup.string().email().required("Please input email address"),
    password: yup.string().required("Please input password"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const submit = handleSubmit(async (data) => {
    try {
      setLoading(true);
      const { name, email, password } = data;
      console.log(name, email, password);

      const res = await axios.post(`${ApiLink.link}/v1/user/auth/register`, {
        firstName: name,
        lastName: name,
        emailAddress: name,
        lastName: email,
        phoneNumber: "091226412558",
        gender: "Male",
        password,
        userName: name,
      });
      if (res) {
        setLoading(false);
        console.log(res);

        alert(`You have registered successfully`);
      }
    } catch (error) {
      setLoading(false);
      console.log(ErrorFunction(error));
    }
  });

  return (
    <Container>
      <CardComp>
        <CardWrapper>
          <Logo>
            <MainLogo>Spring Logo</MainLogo>
            <MenuIcon>
              <Hamburger />
            </MenuIcon>
          </Logo>
          <CreateAccountCard>
            <Captions>
              <Title>Create an account</Title>
              <SubTitle>
                Lets get you started on your finanacial freedom journey
              </SubTitle>
            </Captions>
            <FormCard onSubmit={submit}>
              <LabelAndInput>
                <Label>Name</Label>
                <div
                  style={{
                    width: "100%",
                  }}
                >
                  <Input placeholder='Jane Hughes' {...register("name")} />
                  <Error>{errors?.name?.message}</Error>
                </div>
              </LabelAndInput>
              <LabelAndInput>
                <Label>Email</Label>
                <div
                  style={{
                    width: "100%",
                  }}
                >
                  <Input
                    placeholder='janehughes@gmail.com'
                    {...register("email")}
                  />
                  <Error>{errors?.email?.message}</Error>
                </div>
              </LabelAndInput>
              <LabelAndInput>
                <Label>Password</Label>

                <InputAndIcon>
                  {!toggle ? (
                    <Input1 {...register("password")} type='password' />
                  ) : (
                    <Input1 {...register("password")} type='text' />
                  )}
                  {!toggle ? (
                    <EyeIcon
                      onClick={() => {
                        setToggle(!toggle);
                      }}
                    >
                      <VisibilityOffIcon />
                    </EyeIcon>
                  ) : (
                    <EyeIcon
                      onClick={() => {
                        setToggle(!toggle);
                      }}
                    >
                      <RemoveRedEyeIcon />
                    </EyeIcon>
                  )}
                </InputAndIcon>
              </LabelAndInput>
              <CheckComp>
                <IconAndText>
                  <Icon>
                    <AiFillCloseCircle />
                  </Icon>
                  {}
                  <Text>8 Characters minimum </Text>
                </IconAndText>
                <IconAndText>
                  <Icon>
                    <AiFillCloseCircle />
                  </Icon>
                  <Text>One number </Text>
                </IconAndText>
                <IconAndText>
                  <Icon>
                    <AiFillCloseCircle />
                  </Icon>
                  <Text>One lowercase character </Text>
                </IconAndText>
                <IconAndText>
                  <Icon>
                    <AiFillCloseCircle />
                  </Icon>
                  <Text>One special character </Text>
                </IconAndText>
                <IconAndText>
                  <Icon>
                    <AiFillCloseCircle />
                  </Icon>
                  <Text>One uppercase characters </Text>
                </IconAndText>
              </CheckComp>
              {!loading ? (
                <Button type='submit'>Create account</Button>
              ) : (
                <Button
                  type='submit'
                  disabled
                  style={{ color: "white", fontSize: "10px" }}
                >
                  <CircularProgress color='inherit' size='25px' />
                </Button>
              )}
              <RouteText>
                <Question>Already have an account?</Question>
                <Switch>Login</Switch>
              </RouteText>
            </FormCard>
          </CreateAccountCard>
          <Footer>
            <Privacy>Privacy policy</Privacy>
            <CopyRight>© 2023 Spring LLC</CopyRight>
          </Footer>
        </CardWrapper>
      </CardComp>
      <PictureComp>
        <PictureCompWrapper>
          <PicContent>
            <PicTopic>Your financial freedom starts here🚀</PicTopic>
            <PicSubTopic>
              One stop platform where you can build wealth through emerging real
              estate properties.
            </PicSubTopic>
          </PicContent>
          <ImageHolder>
            <Pics src='/DealImage/auth.png' />
          </ImageHolder>
          <Empty />
        </PictureCompWrapper>
      </PictureComp>
    </Container>
  );
};

export default SignUp;

const Error = styled.div`
  font-size: 10px;
  color: red;
  font-weight: 600;
  margin-top: 4px;
`;

const Input1 = styled.input`
  outline: none;
  border: none;
  /* padding: 5px 10px; */
  border-radius: 4px;
  font-family: "Avenir";
  border: none;
  height: 35px;
  display: flex;
  flex: 1;
  ::placeholder {
    font-size: 14px;
    color: gray;
    font-family: "Avenir";
  }
`;

const EyeIcon = styled.div`
  margin-left: 5px;
  color: lightgray;
  cursor: pointer;
`;

const InputAndIcon = styled.div`
  display: flex;
  align-items: center;
  /* width: 100%; */
  outline: 2px solid lightgray;
  padding: 5px 10px;
  border-radius: 4px;
`;

const Logo = styled.div`
  margin-top: 30px;
  font-family: "Avenir";
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  margin-bottom: 100px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 500px) {
    margin-bottom: 70px;
  }
`;

const MenuIcon = styled.div`
  display: none;
  @media screen and (max-width: 900px) {
    display: flex;
    cursor: pointer;
    margin-right: 20px;
  }
`;

const MainLogo = styled.div`
  display: flex;
  flex: 1;
`;

const Empty = styled.div`
  /* color: yellow; */
`;
const ImageHolder = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 680px;
  height: 600px;
  @media screen and (max-width: 1280px) {
    width: 100%;
  }

  /* background: purple; */
`;

const Pics = styled.img`
  width: 90%;
  border-radius: 20px 0 0 0;
  object-fit: cover;
`;

const PicSubTopic = styled.div`
  font-weight: 300;
  font-size: 15px;
  color: #7b7b7b;
  width: 500px;
  line-height: 25px;
  @media screen and (max-width: 1106px) {
    width: 90%;
  }
`;

const PicTopic = styled.div`
  font-style: normal;
  font-weight: 800;
  font-size: 30px;
  margin-bottom: 10px;
  @media screen and (max-width: 1090px) {
    font-size: 25px;
  }
`;

const PicContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  /* width: 100%; */
  margin-left: 60px;
  margin-bottom: 30px;
`;
const PictureCompWrapper = styled.div`
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  /* background-color: green; */
`;

const CopyRight = styled.div`
  font-size: 13px;
  margin-right: 20px;
`;

const Privacy = styled.div``;

const IconAndText = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  outline: 2px solid lightgray;
  padding: 5px 10px;
  border-radius: 4px;
  width: 97%;
  font-family: "Avenir";
  border: none;
  height: 35px;
  ::placeholder {
    font-size: 14px;
    color: gray;
    font-family: "Avenir";
  }

  :focus {
    border: 2px solid black;
  }
`;

const Label = styled.div`
  font-size: 14px;
  margin-bottom: 10px;
  font-family: "Avenir";
`;

const LabelAndInput = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 0;
  width: 350px;
  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

const CreateAccountCard = styled.div`
  display: flex;
  /* flex: 1; */
  margin-bottom: 100px;
  flex-direction: column;
  width: 370px;
  @media screen and (max-width: 970px) {
    width: 90%;
  }
  @media screen and (max-width: 900px) {
    width: 600px;
    /* background-color: green; */
    /* align-items: center; */
  }
  @media screen and (max-width: 700px) {
    width: 90%;
    /* background-color: green; */
    /* align-items: center; */
  }
`;

const Captions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 25px;
  @media screen and (max-width: 900px) {
    /* align-items: center; */
    /* text-align: center; */
  }
`;

const RouteText = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  @media screen and (max-width: 450px) {
    font-size: 14px;
  }
`;

const Text = styled.div`
  margin-left: 5px;
  font-size: 12px;
  color: lightgray;
  @media screen and (max-width: 370px) {
    font-size: 10px;
  }
`;

const Icon = styled.div`
  color: gray;
  font-size: 15px;
  display: flex;
  align-items: center;
`;

const Question = styled.div``;

const CheckComp = styled.div`
  display: grid;
  /* grid-template-rows: 3; */
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  margin-top: 10px;
  margin-bottom: 30px;
  /* background-color: red; */
  @media screen and (max-width: 430px) {
    gap: 10px;
  }
  /* width: 100%; */
`;

const Switch = styled.div`
  color: green;
  margin-left: 5px;
  cursor: pointer;
`;

const Button = styled.button`
  width: 100%;
  height: 45px;
  background-color: black;
  color: white;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.2px;
  transition: all 660ms;
  :hover {
    transform: scale(1.02);
  }
`;

const SubTitle = styled.div`
  font-family: "Avenir";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  color: #7b7b7b;
  line-height: 22px;
  @media screen and (max-width: 450px) {
    font-size: 14px;
  }
`;

const Title = styled.div`
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  margin-bottom: 10px;
  @media screen and (max-width: 450px) {
    font-size: 20px;
  }
`;

const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  /* line-height: 12px; */
  color: #7b7b7b;
  margin-bottom: 30px;
`;

const PictureComp = styled.div`
  /* height: 100vh; */
  /* background: red; */
  /* background: #F9F9FB; */
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  width: calc(100% - 800px);
  /* width: 100%; */
  @media screen and (max-width: 1460px) {
    width: 50%;
  }
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const FormCard = styled.form`
  display: flex;
  /* flex: 1; */
  flex-direction: column;
  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

const CardWrapper = styled.div`
  width: 80%;
  display: flex;
  display: flex;
  flex-direction: column;
  /* background-color: purple; */
  @media screen and (max-width: 700px) {
    width: 90%;
  }
  @media screen and (max-width: 450px) {
    width: 95%;
  }
`;

const CardComp = styled.div`
  height: 100%;
  width: 800px;
  background-color: white;
  display: flex;
  justify-content: flex-end;
  @media screen and (max-width: 1460px) {
    width: 750px;
  }
  @media screen and (max-width: 1280px) {
    width: 50%;
  }
  @media screen and (max-width: 900px) {
    width: 100%;
    /* justify-content: center; */
  }
  /* margin-bottom: 40px; */
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  font-family: "Avenir";
  background: #f9f9fb;
`;
