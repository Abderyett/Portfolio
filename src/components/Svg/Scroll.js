import * as React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

function Scroll() {
  return (
    <Wrapper>
      <StyledSvg
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        width={53}
        height={74}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.77 57C31.395 56.976 40 49.398 40 40.05V18.016c0-.061 0-.124-.002-.185-.112-9.263-8.672-16.743-19.229-16.765"
          stroke="#5A5A5A"
          strokeWidth={2}
          strokeMiterlimit={10}
        />
        <path
          d="M20.77 57h-.049C10.073 57 1.442 49.412 1.442 40.05V18.016c0-.061 0-.124.002-.185.112-9.276 8.699-16.765 19.277-16.765h.048"
          stroke="#5A5A5A"
          strokeWidth={2}
          strokeMiterlimit={10}
        />
        <path
          d="M20.77 57h-.049c-9.197 0-16.89-5.662-18.815-13.238M20.77 57c9.062-.02 16.653-5.535 18.692-12.956"
          stroke="#5A5A5A"
          strokeWidth={2}
          strokeMiterlimit={10}
        />
        <path
          d="M20.721 36.478c-.674 0-1.22-.48-1.22-1.073V33.26c0-.593.546-1.073 1.22-1.073.674 0 1.22.48 1.22 1.073v2.145c0 .593-.546 1.073-1.22 1.073z"
          stroke="#5A5A5A"
          strokeWidth={1.69}
          strokeMiterlimit={10}
          opacity={0.999}
        />
      </StyledSvg>
    </Wrapper>
  );
}

const StyledSvg = styled(motion.svg)`
  path {
    stroke: ${(props) => props.theme.headingText};
  }
`;
const Wrapper = styled.div`
  padding-top: 15rem;
  display: grid;
  place-items: center;
`;

export default Scroll;
