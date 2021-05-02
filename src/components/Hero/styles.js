import styled from 'styled-components';

export const Wrapper = styled.section`
  max-width: 1400px;
  height: 60vh;
  position: relative;
  z-index: 1;
`;
export const ContentWrapper = styled.div`
  max-width: 1234px;
`;
export const TextWrapper = styled.div`
  /* max-width: 600px; */
  padding: 100px 60px;

  position: absolute;
  top: 0;
  @media (max-width: 768px) {
    padding: 50px 60px;
  }
`;
export const FirstTitle = styled.h1`
  font-size: 60px;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 35px;
  }

  color: ${(props) => props.theme.headingText};
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
