import * as React from 'react';
import styled from 'styled-components';

function Dots() {
  return (
    <StyledSvg width={31} height={31} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2 4a2 2 0 100-4 2 2 0 000 4zM11 4a2 2 0 100-4 2 2 0 000 4zM20 4a2 2 0 100-4 2 2 0 000 4zM29 4a2 2 0 100-4 2 2 0 000 4zM29 13a2 2 0 100-4 2 2 0 000 4zM29 22a2 2 0 100-4 2 2 0 000 4zM29 31a2 2 0 100-4 2 2 0 000 4zM20 31a2 2 0 100-4 2 2 0 000 4zM20 22a2 2 0 100-4 2 2 0 000 4zM20 13a2 2 0 100-4 2 2 0 000 4zM11 31a2 2 0 100-4 2 2 0 000 4zM11 22a2 2 0 100-4 2 2 0 000 4zM11 13a2 2 0 100-4 2 2 0 000 4zM2 31a2 2 0 100-4 2 2 0 000 4zM2 22a2 2 0 100-4 2 2 0 000 4zM2 13a2 2 0 100-4 2 2 0 000 4z"
        fill="#aab0b8"
      />
    </StyledSvg>
  );
}

const StyledSvg = styled.svg`
  z-index: 0;
  opacity: 0.5;
`;

export default Dots;
