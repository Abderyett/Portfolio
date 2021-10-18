import React, { useEffect } from 'react';
import { IoArrowUpCircle } from 'react-icons/io5';
import { animateScroll as scroll } from 'react-scroll';
import styled from 'styled-components';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as S from './styles';
import profile from '../../images/profile.jpg';
import Header from '../Header';
import Background from './Background';
import { color } from '../../utilities';

function About() {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 2,
        },
      });
    }
  }, [inView]);
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
          <S.Image ref={ref} src={profile} animate={animation} initial={{ x: -10, opacity: 0 }} />
          <S.AboutText ref={ref} animate={animation} initial={{ x: 10, opacity: 0 }}>
            <p>
              I'm a full-stack JavaScript developer in Algiers. I love to build web apps with React, Redux, Express,and
              MongoDB.
              <br /> I am currently open to opportunities within the web development and if you feel like we would be a
              great match, I’d love to hear from you!
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
  bottom: 25px;
  right: 25px;
  z-index: 99;
  opacity: 0;

  &:hover {
    color: ${color.cyan_500};
  }
`;

export default About;
