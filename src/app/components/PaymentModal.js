"use client";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import WalletIcon from "@mui/icons-material/Wallet";
import LanguageIcon from "@mui/icons-material/Language";

const PaymentModal = ({ onShowPaymentModal }) => {
  return (
    <Container onClick={onShowPaymentModal}>
      <Wrapper>
        <Card
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <CardWrapper>
            <CardHeader>
              <HeaderContent>
                <HeaderTitle>Payment</HeaderTitle>
                <HeaderSubTitle>Choose a payment method</HeaderSubTitle>
              </HeaderContent>
              <CloseMUIIcon onClick={onShowPaymentModal} />
            </CardHeader>
            <CardBody>
              <CardItem>
                <IconAndPaymentContent>
                  <PaymentIcon />
                  <PaymentMethod>
                    Pay from wallet
                    <span>N10,000</span>
                  </PaymentMethod>
                </IconAndPaymentContent>
                <ChooseRadioButton type='radio' />
              </CardItem>
              <CardItem>
                <IconAndPaymentContent>
                  <PaymentIcon />
                  <PaymentMethod>Pay with new Card</PaymentMethod>
                </IconAndPaymentContent>
                <ChooseRadioButton type='radio' />
              </CardItem>
              <CardItem>
                <IconAndPaymentContent>
                  <PaymentIcon1 />
                  <PaymentMethod>Pay Online</PaymentMethod>
                </IconAndPaymentContent>
                <ChooseRadioButton type='radio' />
              </CardItem>
            </CardBody>
            <Button onClick={onShowPaymentModal}>Next</Button>
          </CardWrapper>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default PaymentModal;

const ChooseRadioButton = styled.input`
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;
const PaymentMethod = styled.div`
  display: flex;
  font-size: 18px;
  flex-direction: column;
  span {
    margin-top: 5px;
    color: gray;
    font-size: 14px;
  }
`;

const PaymentIcon1 = styled(LanguageIcon)`
  margin-right: 15px;
  && {
    font-size: 30px;
  }
`;
const PaymentIcon = styled(WalletIcon)`
  margin-right: 15px;
  && {
    font-size: 30px;
  }
`;
const IconAndPaymentContent = styled.div`
  display: flex;
`;
const CardItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 25px 0;
`;

const HeaderSubTitle = styled.div`
  font-size: 12px;
  color: gray;
`;

const HeaderTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const CloseMUIIcon = styled(CloseIcon)`
  && {
    color: gray;
    cursor: pointer;
  }
`;

const HeaderContent = styled.div`
  padding-bottom: 10px;
  border-bottom: 1px solid silver;
`;

const Button = styled.div`
  width: 100%;
  height: 40px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: black;
  font-size: 14px;
  border-radius: 4px;
`;

const CardBody = styled.div`
  width: 100%;
  overflow-y: scroll;
  /* max-height: 300px; */
  flex: 1;
  /* padding-bottom: 15px; */
`;

const CardHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const CardWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Card = styled.div`
  width: 400px;
  height: 380px;
  background-color: white;
  display: flex;
  justify-content: center;
  padding: 15px 0;
  border-radius: 10px;
  color: black;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  color: white;
  width: 100%;
  height: 100vh;
  position: fixed;
  background-color: rgb(0, 0, 0, 0.3);
  z-index: 5;
  top: -200;
`;
