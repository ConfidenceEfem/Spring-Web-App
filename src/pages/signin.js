"use client"
import "./app.css"
import styled from "styled-components"
import {AiFillCloseCircle} from 'react-icons/ai';
import * as yup from "yup"
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
// import {IoMenuSharp} from "react-icons/io"
import Hamburger from '@mui/icons-material/Menu';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useState } from "react";
import { ApiLink, ErrorFunction } from "@/app/components/ErrorHandler/ErrorHandler";
import axios from "axios";
import CircularProgress from '@mui/material/CircularProgress';
import Swal from "sweetalert2"


const SignUp = () => {

    const [toggle, setToggle] = useState(false)

    const [loading, setLoading] = useState(false)


    const schema = yup.object().shape({
        email: yup.string().email().required("Please input email address"),
        password: yup.string().required("Please input password"),
    })

    const {register, handleSubmit, formState:{errors}} = useForm({resolver: yupResolver(schema)})

    const submit = handleSubmit(async (data)=>{
       try {
        setLoading(true)
        const { email, password} = data
        console.log(name, email, password)

        const res = await axios.post(`${ApiLink.link}/v1/user/auth/login`,{
           user: email,
           password,
        })
        if(res){
            console.log(res)
            setLoading(false)
            alert(`You have registered successfully`)
            Swal.fire({
                title: "Log in successful",
                timer: 3500,
                showConfirmButton: false,
                icon: "success"
            })
        }

       } catch (error) {
       setLoading(false)
        console.log(ErrorFunction(error))
        Swal.fire({
           text: `${ErrorFunction(error)}`,
            timer: 3500,
            showConfirmButton: false,
            icon: "error"
        })
       }
        
    })

  return (
    <Container>
        <CardComp>
            <CardWrapper>
            <Logo>
                <MainLogo>Spring Logo</MainLogo>
                <MenuIcon>
                    <Hamburger/>
                </MenuIcon>
            </Logo>
            <CreateAccountCard>
                <Captions>
                    <Title>Welcome back</Title>
                    <SubTitle>We are excited to have you back here</SubTitle>
                </Captions>
                <FormCard onSubmit={submit}>
                    
                    <LabelAndInput>
                        <Label>
                            Email
                        </Label>
                       <div
                       style={{
                        width: "100%",
                       }}
                       >
                       <Input placeholder="janehughes@gmail.com"
                        {...register("email")}
                        />
                        <Error>{errors?.email?.message}</Error>
                       </div>
                    </LabelAndInput>
                    <LabelAndInput>
                        <Label>
                            Password
                        </Label>

                        <InputAndIcon>
                        {!toggle? 
                        <Input1 
                        {...register("password")}
                        type="password"
                        />
                        : <Input1 
                        {...register("password")}
                        type="text"
                        />
                        }
                        {
                            !toggle?
                        <EyeIcon
                        onClick={()=>{
                            setToggle(!toggle)
                        }}
                        >
                            <VisibilityOffIcon/>
                        </EyeIcon>
                        :
                            <EyeIcon
                            onClick={()=>{
                                setToggle(!toggle)
                            }}
                            >
                                <RemoveRedEyeIcon/>
                            </EyeIcon>
                        }
                        
                        </InputAndIcon>
                    </LabelAndInput>
                    <SmallTag>
                        <RememberMe>
                            <Checkbox type="checkbox"/>
                            <span>Remember Me</span>
                        </RememberMe>
                        <ForgetPassword>Forget Password?</ForgetPassword>
                    </SmallTag>
                   
                    {!loading? 
                    <Button type="submit">Log In</Button>
                    :
                    <Button type="submit" disabled style={{color: "white",fontSize: "10px"}}>
                         <CircularProgress color="inherit" size="25px"/>
                    </Button>
                    }
                    <RouteText>
                        <Question>Already have an account?</Question>
                        <Switch>Create account</Switch>
                    </RouteText>
                </FormCard>

            </CreateAccountCard>
            <Footer>
                <Privacy>
                    Privacy policy
                </Privacy>
                <CopyRight>
                © 2023 Spring LLC
                </CopyRight>
            </Footer>
            </CardWrapper>
        </CardComp>
        <PictureComp>
            <PictureCompWrapper>
                <PicContent>
                <PicTopic>
                Your financial freedom starts here🚀
                </PicTopic>
                <PicSubTopic>
                One stop platform where you can build wealth through emerging real estate properties.
                </PicSubTopic>
                </PicContent>
                <ImageHolder>
                    <Pics src="/DealImage/auth.png"/>
                </ImageHolder>
                <Empty/>
            </PictureCompWrapper>
        </PictureComp>
    </Container>
  )
}

export default SignUp


const Checkbox = styled.input`
margin-right: 5px;
`

const ForgetPassword = styled.div`
cursor: pointer;
`

const RememberMe = styled.div`
display:flex;
flex: 1;
`

const SmallTag = styled.div`
display:flex;
align-items: center;
font-size: 12px;
margin-bottom: 70px;
`

const Error = styled.div`
font-size: 10px;
color: red;
font-weight: 600;
margin-top: 4px;
`

const Input1 = styled.input`
outline: none;
border:none;
/* padding: 5px 10px; */
border-radius: 4px;
font-family: "Avenir";
border: none;
height: 35px;
display:flex;

flex: 1;
::placeholder{
    font-size: 14px;
    color: gray;
    font-family: "Avenir";
}


`

const EyeIcon = styled.div`
margin-left: 5px;
color: lightgray;
cursor: pointer;
`

const InputAndIcon = styled.div`
display:flex;
align-items: center;
/* width: 100%; */
outline: 2px solid lightgray;
padding: 5px 10px;
border-radius: 4px;
width: 98%;
`

const Logo = styled.div`
margin-top: 30px;
font-family: 'Avenir';
font-style: normal;
font-weight: 800;
font-size: 14px;
margin-bottom: 100px;
display:flex;
align-items: center;
@media screen and (max-width: 500px){
  margin-bottom: 70px;
}
`

const MenuIcon = styled.div`
display:none;
@media screen and (max-width: 900px){
    display:flex;
    cursor: pointer;
    margin-right: 20px;
}
`

const MainLogo = styled.div`
display: flex;
flex: 1;
`

const Empty = styled.div`
/* color: yellow; */
`
const ImageHolder = styled.div`
display: flex;
justify-content: flex-end;
width: 680px;
height: 600px;
@media screen and (max-width: 1280px){
    width: 100%;
}

/* background: purple; */
`

const Pics = styled.img`
width: 90%;
border-radius: 20px 0 0 0;
object-fit: cover;

`

const PicSubTopic = styled.div`
font-weight: 300;
font-size: 15px;
color: #7B7B7B;
width: 500px;
line-height: 25px;
@media screen and (max-width: 1106px){
    width: 90%;
}
`

const PicTopic = styled.div`
font-style: normal;
font-weight: 800;
font-size: 30px;
margin-bottom: 10px;
@media screen and (max-width: 1090px){
    font-size: 25px;
}
`

const PicContent = styled.div`
display:flex;
flex: 1;
flex-direction: column;
/* width: 100%; */
margin-left: 60px;
margin-bottom: 30px;
`
const PictureCompWrapper = styled.div`
margin-left: 50px;
display: flex;
flex-direction: column;
/* background-color: green; */

`

const CopyRight = styled.div`
font-size: 13px;
margin-right: 20px;
`

const Privacy = styled.div`

`


const Input = styled.input`
outline: 2px solid lightgray;
padding: 5px 10px;
border-radius: 4px;
width: 97%;
font-family: "Avenir";
border: none;
height: 35px;
::placeholder{
    font-size: 14px;
    color: gray;
    font-family: "Avenir";
}

:focus{
    border: 2px solid black;
}
`

const Label = styled.div`
font-size: 14px;
margin-bottom: 10px;
font-family: "Avenir";
`

const LabelAndInput = styled.div`
display:flex;
flex-direction: column;
margin: 15px 0;
width: 350px;
@media screen and (max-width: 900px){
    width: 100%;
}
`

const CreateAccountCard = styled.div`
display:flex;
/* flex: 1; */
margin-bottom: 100px;
flex-direction: column;
width: 370px;
@media screen and (max-width: 970px){
    width: 90%;
}
@media screen and (max-width: 900px){
    width: 600px;
    /* background-color: green; */
    /* align-items: center; */
}
@media screen and (max-width: 700px){
    width: 90%;
    /* background-color: green; */
    /* align-items: center; */
}
`

const Captions = styled.div`
display:flex;
flex-direction: column;
justify-content: flex-start;
margin-bottom: 25px;
@media screen and (max-width: 900px){
    /* align-items: center; */
    /* text-align: center; */
}
`

const RouteText = styled.div`
width: 100%;
display: flex;
justify-content: center;
margin-top: 10px;
@media screen and (max-width: 450px){
    font-size: 14px;
}
`




const Question = styled.div``



const Switch = styled.div`
color: green;
margin-left: 5px;
cursor: pointer;
`

const Button = styled.button`
width: 100%;
height: 45px;
background-color: black;
color: white;
font-size: 14px;
border-radius: 4px;
cursor: pointer;
display:flex;
align-items: center;
justify-content: center;
letter-spacing: 0.2px;
transition: all 660ms;
:hover{
    transform: scale(1.02);
}
`

const SubTitle = styled.div`
font-family: 'Avenir';
font-style: normal;
font-weight: 300;
font-size: 16px;
color: #7B7B7B;
line-height: 22px;
@media screen and (max-width: 450px){
    font-size: 14px;
}
`

const Title = styled.div`
font-style: normal;
font-weight: 800;
font-size: 32px;
margin-bottom: 10px;
@media screen and (max-width: 450px){
    font-size: 20px;
}
`

const Footer = styled.div`
width: 100%;
display:flex;
justify-content: space-between;
font-style: normal;
font-weight: 300;
font-size: 12px;
/* line-height: 12px; */
color: #7B7B7B;
margin-bottom: 30px;
`

const PictureComp = styled.div`
display:flex;
align-items: flex-end;
justify-content: flex-end;
width: calc(100% - 800px);
@media screen and (max-width: 1460px){
    width: 50%;
}
@media screen and (max-width: 900px){
    display:none;
}
`




const FormCard = styled.form`
display:flex;
flex-direction: column;
@media screen and (max-width: 900px){
    width: 100%;
}
`

const CardWrapper = styled.div`
width: 80%;
display:flex;
display: flex;
flex-direction: column;
@media screen and (max-width: 700px){
    width: 90%;
}
@media screen and (max-width: 450px){
    width: 95%;
}
`

const CardComp = styled.div`
height: 100%;
height: auto;
width: 800px;
background-color: white;
display: flex;
justify-content: flex-end;
@media screen and (max-width: 1460px){
    width: 750px;
}
@media screen and (max-width: 1280px){
    width: 50%;
}
@media screen and (max-width: 900px){
    width: 100%;
}
`

const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
font-family: 'Avenir';
background: #F9F9FB;
`

