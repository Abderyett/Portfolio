import React from 'react';
import * as S from './styles';
import Dots from '../Svg/Dots';

function About() {
  return (
    <S.Wrapper>
      <S.Background />
      <S.ContentWrapper>
        <S.Header>
          <Dots />
          <h1>About Me</h1>
        </S.Header>
      </S.ContentWrapper>
    </S.Wrapper>
  );
}

export default About;
