import React from 'react';
import styled from 'styled-components';
import wave1 from '../images/hero-wave1.svg';
import wave2 from '../images/hero-wave2.svg';
import wave3 from '../images/hero-wave3.svg';

function WaveBackground() {
  return (
    <Wrapper>
      {/* <Background /> */}
      <Wave src={wave3} style={{ top: '75px' }} />
      <Wave src={wave2} style={{ top: '150px' }} />
      <Wave src={wave1} style={{ top: '250px' }} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
`;
const Wave = styled.img`
  position: absolute;
  width: 100vw;
`;
// const Background = styled.div`
//   background: rgb(255, 255, 255);
//   background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(188, 204, 220, 1) 100%);
//   width: 100%;
//   height: 800px;
// `;
export default WaveBackground;
