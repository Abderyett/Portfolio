import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Dots from './Svg/Dots';

function Header({ text }) {
  return (
    <Container>
      <Dots />
      <Text>{text}</Text>
    </Container>
  );
}

const Container = styled.div`
  height: 5rem;
  color: ${(props) => props.theme.headingText};
  font-size: 1.5rem;
  position: relative;
`;
const Text = styled.h1`
  display: inline-block;
  position: absolute;
  font-weight: 900;
  left: 1.2rem;
  top: 5px;
  z-index: 1;
  font-size: 3.6rem;
`;
Header.propTypes = PropTypes.string.isRequired;
export default Header;
