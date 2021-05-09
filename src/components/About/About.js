import React from 'react';
import * as S from './styles';
import profile from '../../images/profile.jpg';
import Header from '../Header';
import Background from './Background';

function About() {
  return (
    <S.Wrapper>
      <S.ContentWrapper>
        <Header text="About Me" />
        <S.Container>
          <S.Image src={profile} />
          <S.AboutText>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur at ipsam quasi? Voluptate nisi
              temporibus unde eveniet minus velit dolor quisquam iusto rerum suscipit beatae enim, at, perferendis
              repellat iure?
            </p>
          </S.AboutText>
        </S.Container>
        <Background />
      </S.ContentWrapper>
    </S.Wrapper>
  );
}

export default About;
