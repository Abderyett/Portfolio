import React from 'react';
import styled from 'styled-components';
import moon from '../../images/moon_starts.svg';
import { color, shadow } from '../../utilities';

function Toggle() {
  return <Button type="checkbox" />;
}

const Button = styled.input`
  position: relative;
  width: 50px;
  height: 25px;
  appearance: none;
  background-color: #fff;
  background-image: url(${moon});
  background-repeat: no-repeat;
  background-position: center right 20%;
  border-radius: 20px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  transition: 0.5s ease all;
  outline: none;
  box-shadow: ${shadow.lg};

  cursor: pointer;
  &::before {
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    border-radius: 20px;
    background-color: #fff;
    top: 0;
    left: 0;
    transition: 0.5s ease all;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    transform: scale(0.9);
  }
`;

export default Toggle;
