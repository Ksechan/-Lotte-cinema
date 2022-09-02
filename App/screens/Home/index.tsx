import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: pink;
`;

const Home = () => {
  return (
    <Container>
      <Text>홈입니다</Text>
    </Container>
  );
};

export default Home;
