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
  border: 0.5px solid ${(props) => props.theme.headingText};
  display: grid;
  grid-template-columns: 20rem 1fr;
  grid-gap: 2rem;
  align-items: center;
`;
export const Image = styled.img`
  width: 20rem;
  border-radius: ${rounded.md};
`;
export const AboutText = styled.div``;
