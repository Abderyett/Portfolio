import React from 'react';
import styled, { css } from 'styled-components';
import wave1 from '../images/hero-wave1.svg';
import wave2 from '../images/hero-wave2.svg';
import wave3 from '../images/hero-wave3.svg';

function WaveBackground() {
  return (
    <Wrapper>
      <FirstWave src={wave3} />
      <SecondWave src={wave2} />
      <ThirdWave src={wave1} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  height: 70vh;
  z-index: 0;
`;
const position = css`
  position: absolute;
  width: 100vw;
`;

const FirstWave = styled.img`
  ${position}
  top: 150px;
`;
const SecondWave = styled.img`
  ${position}
  top: 300px;
`;
const ThirdWave = styled.img`
  ${position}
  top: 400px;

  @media (max-width: 768px) {
    top: 170px;
  }
`;

export default WaveBackground;
