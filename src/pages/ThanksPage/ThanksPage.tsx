import React from 'react';
import styled, { keyframes, Keyframes } from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #222;
`;



const Title = styled.h1`
  font-size: 48px;
  color: #fff;
  margin-bottom: 20px;
`;

const Subtitle = styled.h2`
  font-size: 24px;
  color: #ccc;
`;

const fadeIn: Keyframes = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
const TextContainer = styled.div`
  text-align: center;
  animation: ${fadeIn} 1s ease-in-out;
`;

const ThankYouPage: React.FC = () => {
  return (
    <PageContainer>
      <TextContainer>
        <Title>Спасибо за обучение))</Title>
        <Subtitle>Мы ценим ваше участие и стремимся к вашему успеху!</Subtitle>
      </TextContainer>
    </PageContainer>
  );
};

export default ThankYouPage;
