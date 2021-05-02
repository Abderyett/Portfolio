import styled from 'styled-components';
import { color, shadow, rounded } from '../../utilities';

export const Wrapper = styled.div`
  height: 100vh;
`;
export const ContentWrapper = styled.div`
  padding-left: 6rem;
`;
export const Text = styled.h1`
  display: inline-block;
  position: absolute;
  font-weight: 900;
  left: 1.2rem;
  top: 5px;
  z-index: 1;
  font-size: 3.6rem;
`;
export const Background = styled.div``;

export const Header = styled.div`
  height: 5rem;
  color: ${(props) => props.theme.headingText};
  font-size: 1.5rem;
  position: relative;
`;

export const Container = styled.div`
  width: 85vw;
  height: 25rem;
  max-width: 1234px;
  /* border: 0.5px solid ${(props) => props.theme.headingText}; */
  display: grid;
  grid-template-columns: 20rem 1fr;
  grid-gap: 2rem;
  align-items: center;
`;
export const Image = styled.img`
  width: 20rem;
  border-radius: ${rounded.md};
  box-shadow: ${shadow.md};
`;
export const AboutText = styled.div`
  width: 95%;
  height: 20rem;
  border-radius: ${rounded.md};
  /* box-shadow: ${shadow.md}; */
  padding: 2rem;
  background: linear-gradient(240.9deg, rgba(255, 255, 255, 0.6) 0.04%, rgba(255, 255, 255, 0) 100%);
  border: 0.5px solid rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  filter: drop-shadow(0px 30px 60px rgba(39, 77, 153, 0.1));
  backdrop-filter: blur(40px);
  p {
    font-size: 1.7rem;
    color: ${(props) => props.theme.headingText};
    text-align: start;
  }
`;
