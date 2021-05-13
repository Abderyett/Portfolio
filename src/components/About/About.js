import React, { useEffect } from 'react';
import { IoArrowUpCircle } from 'react-icons/io5';
import { animateScroll as scroll } from 'react-scroll';
import styled from 'styled-components';
import * as S from './styles';
import profile from '../../images/profile.jpg';
import Header from '../Header';
import Background from './Background';
import { color } from '../../utilities';

function About() {
  useEffect(() => {
    const position = () => {
      const arrow = document.querySelector('#arrow');
      const { scrollY, innerHeight } = window;

      if (innerHeight - scrollY <= 100) {
        arrow.style.opacity = 1;
      } else {
        arrow.style.opacity = 0;
      }
    };
    document.addEventListener('scroll', position);
    return () => {
      document.removeEventListener('scroll', position);
    };
  }, []);

  return (
    <S.Wrapper id="about">
      <S.ContentWrapper>
        <StyledArrow id="arrow" onClick={() => scroll.scrollToTop()} />
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
const StyledArrow = styled(IoArrowUpCircle)`
  font-size: 5rem;
  color: ${({ theme }) => theme.arrowColor};
  cursor: pointer;
  position: fixed;
  bottom: 10px;
  right: 10px;
  z-index: 99;
  opacity: 0;

  &:hover {
    color: ${color.cyan_500};
  }
`;

export default About;
