import React from 'react';
import styled, { css } from 'styled-components';
import bubles from '../../images/bubles.svg';
import SecondBubble from '../../images/secondBuble.svg';
import ThirdBubble from '../../images/ThirdBubble.svg';

function Background() {
  return (
    <Wrapper>
      <FirstBuble src={ThirdBubble} alt="bubles" />
      <SecondBuble src={SecondBubble} alt="bubles" />
      <ThirdBuble src={bubles} alt="bubles" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 1234px;
  overflow: auto;
`;
const Position = css`
  position: absolute;

  z-index: 0;
`;

const FirstBuble = styled.img`
  ${Position}
  top: 30%;
  right: 23%;
`;
const SecondBuble = styled.img`
  ${Position}
  bottom: 15%;
  left: 0;
`;
const ThirdBuble = styled.img`
  ${Position}
  top: 25%;
  left: 30%;
`;
export default Background;
