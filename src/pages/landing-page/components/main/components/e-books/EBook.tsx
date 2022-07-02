import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 600px;
  background: green;
  position: relative;
`;

const Title = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 30px;
  color: white;
`;

export const EBook = () => {
  return (
    <Container>
      <Title>EBook</Title>
    </Container>
  );
};
