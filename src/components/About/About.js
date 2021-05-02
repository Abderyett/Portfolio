import React from 'react';
import * as S from './styles';
import Dots from '../Svg/Dots';
import profile from '../../images/profile.jpg';

function About() {
  return (
    <S.Wrapper>
      <S.Background />
      <S.ContentWrapper>
        <S.Header>
          <Dots />
          <S.Text>About Me</S.Text>
        </S.Header>
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
      </S.ContentWrapper>
    </S.Wrapper>
  );
}

export default About;
