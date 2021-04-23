import React from 'react';
import * as S from './styles';
import Toggle from '../Toggle/Toggle';
import Hamburger from '../HumbergerMenu';

function Navbar() {
  return (
    <S.Navbar>
      <a href="/">Abderaouf Yettou</a>
      <Hamburger />
      <S.NavItems>
        <S.NavList>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </S.NavList>
      </S.NavItems>
      <Toggle />
    </S.Navbar>
  );
}

export default Navbar;
