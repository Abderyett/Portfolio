import React from 'react';
import styled, { css } from 'styled-components';

import buble from '../../images/buble1.svg';
import secondbuble from '../../images/buble2.svg';
import ThirdBubble from '../../images/ThirdBubble.svg';

function Background() {
  return (
    <Wrapper>
      <FirstBuble src={ThirdBubble} alt="bubles" />
      <SecondBuble src={secondbuble} alt="bubles" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 1234px;
`;
const Position = css`
  position: absolute;
  z-index: 0;
`;

const FirstBuble = styled.img`
  ${Position}
  top: 10%;
  left: 0;
  @media (max-width: 600px) {
    top: 3%;
    left: 0;
  }
`;
const SecondBuble = styled.img`
  ${Position}
  bottom: 0;
  right: 0;
  @media (max-width: 600px) {
    bottom: 14%;
    right: 0;
  }
`;

export default Background;
