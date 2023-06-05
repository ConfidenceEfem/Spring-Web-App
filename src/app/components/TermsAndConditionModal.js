"use client";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";

const TermsAndConditionModal = ({
  onshowTermsAndConditionModal,
  onShowPaymentModal,
}) => {
  return (
    <Container onClick={onshowTermsAndConditionModal}>
      <Wrapper>
        <Card
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <CardWrapper>
            <CardHeader>
              <HeaderContent>
                <HeaderTitle>Terms and conditions</HeaderTitle>
                <HeaderSubTitle>
                  Read the following before you proceed with your payment
                </HeaderSubTitle>
              </HeaderContent>
              <CloseMUIIcon onClick={onshowTermsAndConditionModal} />
            </CardHeader>
            <CardBody>
              <Carditem>
                1. The Purchaser shall before the execution of this Agreement
                pay a deposit of the sum of ₦160,000 to the Freedom Padi who
                shall hold the deposit as stakeholder pending completion.
              </Carditem>
              <Carditem>
                1. The Purchaser shall before the execution of this Agreement
                pay a deposit of the sum of ₦160,000 to the Freedom Padi who
                shall hold the deposit as stakeholder pending completion.
              </Carditem>
              <Carditem>
                1. The Purchaser shall before the execution of this Agreement
                pay a deposit of the sum of ₦160,000 to the Freedom Padi who
                shall hold the deposit as stakeholder pending completion.
              </Carditem>
              <Carditem>
                1. The Purchaser shall before the execution of this Agreement
                pay a deposit of the sum of ₦160,000 to the Freedom Padi who
                shall hold the deposit as stakeholder pending completion.
              </Carditem>
              <Carditem>
                1. The Purchaser shall before the execution of this Agreement
                pay a deposit of the sum of ₦160,000 to the Freedom Padi who
                shall hold the deposit as stakeholder pending completion.
              </Carditem>
              <Carditem>
                1. The Purchaser shall before the execution of this Agreement
                pay a deposit of the sum of ₦160,000 to the Freedom Padi who
                shall hold the deposit as stakeholder pending completion.
              </Carditem>
            </CardBody>
            <Button onClick={onShowPaymentModal}>I agree</Button>
          </CardWrapper>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default TermsAndConditionModal;

const Carditem = styled.p`
  width: 100%;
  text-align: left;
  font-size: 13px;
  color: black;
  line-height: 22px;
  margin: 15px;
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
  height: 470px;
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
