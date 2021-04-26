import React from 'react';
import { GoThreeBars } from 'react-icons/go';
import { FaTimes } from 'react-icons/fa';
import * as S from './styles';
import Toggle from '../Toggle/Toggle';
import { useGlobalContext } from '../../context';

function Navbar() {
  const { openNav, setOpenNav } = useGlobalContext();
  return (
    <S.Navbar>
      <a href="/">Abderaouf Yettou</a>

      <S.NavItems>
        <S.NavList open={openNav}>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </S.NavList>
      </S.NavItems>
      <Toggle />
      <S.HambergerMenu type="button" onClick={() => setOpenNav(!openNav)}>
        {openNav ? <S.Times /> : <GoThreeBars />}
      </S.HambergerMenu>
    </S.Navbar>
  );
}

export default Navbar;
