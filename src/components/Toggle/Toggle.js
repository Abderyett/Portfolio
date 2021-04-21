import React from 'react';
import styled from 'styled-components';
import moon from '../../images/moon_starts.svg';
import { color, shadow } from '../../utilities';

import { useGlobalContext } from '../../context';

function Toggle() {
  const { dark, setDark } = useGlobalContext();
  return <Input type="checkbox" dark={dark} onClick={() => setDark(!dark)} />;
}

const Input = styled.input`
  position: relative;
  width: 50px;
  height: 28px;
  appearance: none;
  background-color: #fff;
  background-image: url(${moon});
  background-repeat: no-repeat;
  background-position: center right 20%;
  border-radius: 50px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  transition: 0.5s ease all;
  border: 2px solid ${color.grey_400};
  outline: none;
  box-shadow: ${shadow.lg};

  cursor: pointer;
  &::before {
    content: '';
    position: absolute;
    width: 25.5px;
    height: 25.5px;
    border-radius: 20px;
    background-color: ${({ dark }) => (dark ? color.white : color.blue_800)};
    top: 0;
    left: ${(props) => (props.dark ? '21px' : 0)};
    transition: 0.3s ease all;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    transform: scale(0.9);
  }
`;

export default Toggle;
