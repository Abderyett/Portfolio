import React from 'react';
import styled from 'styled-components';
import Dots from '../Svg/Dots';
import CardList from './CardList';

function Skills() {
  return (
    <Wrapper>
      <ContentWrapper>
        <Header>
          <Dots />
          <Text>Skills</Text>
        </Header>
        <CardList />
      </ContentWrapper>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  height: 100vh;
`;
const ContentWrapper = styled.div`
  padding-left: 6rem;
  @media (max-width: 768px) {
    padding-left: 3.5rem;
  }
`;
const Header = styled.div`
  height: 5rem;
  color: ${(props) => props.theme.headingText};
  font-size: 1.5rem;
  position: relative;
`;
const Text = styled.h1`
  display: inline-block;
  position: absolute;
  font-weight: 900;
  left: 1.2rem;
  top: 5px;
  z-index: 1;
  font-size: 3.6rem;
`;

export default Skills;
