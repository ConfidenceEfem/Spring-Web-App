"use client"
import "./app.css"
import styled from "styled-components"
import {AiFillCloseCircle} from 'react-icons/ai';


const SignUp = () => {
  return (
    <Container>
        <CardComp>
            <CardWrapper>
            <Logo>Spring Logo</Logo>
            <CreateAccountCard>
                <Captions>
                    <Title>Create an account</Title>
                    <SubTitle>Let's get you started on your finanacial freedom journey</SubTitle>
                </Captions>
                <FormCard>
                    <LabelAndInput>
                        <Label>
                            Name
                        </Label>
                        <Input placeholder="Jane Hughes"/>
                    </LabelAndInput>
                    <LabelAndInput>
                        <Label>
                            Email
                        </Label>
                        <Input placeholder="Jane Hughes"/>
                    </LabelAndInput>
                    <LabelAndInput>
                        <Label>
                            Name
                        </Label>
                        <Input placeholder="Jane Hughes"/>
                    </LabelAndInput>
                    <CheckComp>
                        <IconAndText>
                            <Icon>
                                <AiFillCloseCircle/>
                            </Icon>
                            <Text>8 Characters minimum </Text>
                        </IconAndText>
                        <IconAndText>
                            <Icon>
                                <AiFillCloseCircle/>
                            </Icon>
                            <Text>One number </Text>
                        </IconAndText>
                        <IconAndText>
                            <Icon>
                                <AiFillCloseCircle/>
                            </Icon>
                            <Text>One lowercase character </Text>
                        </IconAndText>
                        <IconAndText>
                            <Icon>
                                <AiFillCloseCircle/>
                            </Icon>
                            <Text>One special character </Text>
                        </IconAndText>
                        <IconAndText>
                            <Icon>
                                <AiFillCloseCircle/>
                            </Icon>
                            <Text>One uppercase characters  </Text>
                        </IconAndText>
                        
                    </CheckComp>
                    <Button>Create account</Button>
                    <RouteText>
                        <Question>Already have an account?</Question>
                        <Switch>Login</Switch>
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
                <Pics/>
            </PictureCompWrapper>
        </PictureComp>
    </Container>
  )
}

export default SignUp

const Pics = styled.img`

`

const PicSubTopic = styled.div``
const PicTopic = styled.div``
const PicContent = styled.div`
display:flex;
flex: 1;
`
const PictureCompWrapper = styled.div`
margin-left: 50px;
display: flex;
flex-direction: column;
`

const CopyRight = styled.div`
font-size: 13px;
`

const Privacy = styled.div`

`

const IconAndText = styled.div`
display:flex;
align-items: center;
`

const Input = styled.input`
outline: 2px solid lightgray;
padding: 5px 10px;
border-radius: 4px;
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
`

const LabelAndInput = styled.div`
display:flex;
flex-direction: column;
margin: 15px 0;
width: 350px;
`

const CreateAccountCard = styled.div`
display:flex;
/* flex: 1; */
margin-bottom: 100px;
flex-direction: column;
width: 370px;
`

const Captions = styled.div`
display:flex;
flex-direction: column;
justify-content: flex-start;
margin-bottom: 25px;
`

const RouteText = styled.div`
width: 100%;
display: flex;
justify-content: center;
margin-top: 10px;
`

const Text = styled.div`
margin-left: 5px;
font-size: 12px;
color: lightgray;
`

const Icon = styled.div`
color: gray;
font-size: 15px;
display: flex;
align-items: center;
`

const Question = styled.div``

const CheckComp = styled.div`
display:grid;
/* grid-template-rows: 3; */
grid-template-columns: repeat(2, 1fr);
gap: 15px;
margin-top: 10px;
margin-bottom: 30px;
/* width: 100%; */
`

const Switch = styled.div`
color: green;
margin-left: 5px;
cursor: pointer;
`

const Button = styled.div`
width: 100%;
height: 45px;
background-color: black;
color: white;
font-size: 15px;
border-radius: 4px;
cursor: pointer;
display:flex;
align-items: center;
justify-content: center;
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
`

const Title = styled.div`
font-style: normal;
font-weight: 800;
font-size: 32px;
margin-bottom: 10px;
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
`

const PictureComp = styled.div`
height: 100%;
background: #F9F9FB;
display:flex;


`

const Logo = styled.div`
margin-top: 30px;
font-family: 'Avenir';
font-style: normal;
font-weight: 800;
font-size: 14px;
margin-bottom: 100px;


`


const FormCard = styled.div`
display:flex;
/* flex: 1; */
flex-direction: column;
`

const CardWrapper = styled.div`
width: 80%;
display:flex;
display: flex;
flex-direction: column;
`

const CardComp = styled.div`
height: 100%;
width: 750px;
background-color: white;
display: flex;
justify-content: flex-end;
margin-bottom: 40px;
`

const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
font-family: 'Avenir';
background: #F9F9FB;`

