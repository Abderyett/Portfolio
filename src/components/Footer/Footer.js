import React from 'react';
import styled from 'styled-components';

function Footer() {
  return <StyledFooter>&copy; 2021 Abderouf Yettou</StyledFooter>;
}

export default Footer;

const StyledFooter = styled.footer`
  height: 6rem;
  display: grid;
  place-items: center;
  width: 100vw;
  font-size: 1.5rem;
  color: ${(props) => props.theme.headingText};
  border-top: 1px solid ${(props) => props.theme.borderNav};
  margin-top: 4rem;
`;
