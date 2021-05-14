import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.section`
  max-width: 1400px;
  height: 60vh;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    display: grid;
    height: 50vh;
  }
`;
export const ContentWrapper = styled.div`
  max-width: 1234px;
`;
export const TextWrapper = styled(motion.div)`
  /* max-width: 600px; */
  padding: 100px 60px;

  position: absolute;
  top: 0;
  @media (max-width: 768px) {
    padding: 5rem 3.5rem;
  }
`;
export const FirstTitle = styled.h1`
  font-size: 60px;
  font-weight: bold;
  background: rgb(176, 197, 230);
  background: linear-gradient(180deg, rgba(176, 197, 230, 1) 33%, rgba(97, 210, 204, 1) 100%);
  background-clip: text;
  color: transparent;
  @media (max-width: 768px) {
    font-size: 35px;
  }
`;
export const SecondTitle = styled.h1`
  font-size: 60px;
  font-weight: bold;
  color: ${(props) => props.theme.heroText};
  @media (max-width: 768px) {
    font-size: 35px;
  }
`;
export const Description = styled.p`
  font-size: 17px;
  line-height: 25px;
  color: ${(props) => props.theme.paragraphHero};
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;
