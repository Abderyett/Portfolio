import styled from 'styled-components';
import { shadow, rounded } from '../../utilities';

export const Wrapper = styled.section`
  height: 50vh;
  @media (max-width: 768px) {
    height: 65vh;
  }
`;
export const ContentWrapper = styled.div`
  padding-left: 6rem;
  @media (max-width: 768px) {
    padding-left: 3.5rem;
  }
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

export const Container = styled.div`
  width: 85vw;
  height: 25rem;
  max-width: 1234px;
  /* border: 0.5px solid ${(props) => props.theme.headingText}; */
  display: grid;
  grid-template-columns: 20rem 1fr;
  grid-gap: 2rem;
  align-items: center;
  margin-top: 5rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    place-items: center;
    @media (max-width: 768px) {
      padding-bottom: 10rem;
    }
  }
`;
export const Image = styled.img`
  width: 20rem;
  border-radius: ${rounded.md};
  box-shadow: ${shadow.md};
`;
export const AboutText = styled.div`
  width: 100%;
  height: 20rem;
  border-radius: ${rounded.md};
  box-shadow: ${shadow.md};
  padding: 2rem;
  background: ${(props) => props.theme.cardColor};
  border: 0.5px solid rgba(0, 0, 0, 0.2);
  box-sizing: border-box;

  backdrop-filter: blur(40px);
  p {
    font-size: 1.7rem;
    color: ${(props) => props.theme.headingText};
    text-align: start;
  }
`;
