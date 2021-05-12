import React from 'react';
import styled from 'styled-components';
import Header from '../Header';
import CardList from './CardList';

function Skills() {
  return (
    <Wrapper id="skills">
      <ContentWrapper>
        <Header text="Skills" />
        <CardList />
      </ContentWrapper>
    </Wrapper>
  );
}
const Wrapper = styled.section``;
const ContentWrapper = styled.div`
  padding-left: 6rem;

  @media (max-width: 768px) {
    padding-left: 3.5rem;
  }
`;

export default Skills;
