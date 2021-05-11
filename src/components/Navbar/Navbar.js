import React from 'react';
import { GoThreeBars } from 'react-icons/go';
import { Link } from 'react-router-dom';
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
          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>

          <Toggle />
        </S.NavList>
      </S.NavItems>

      <S.HambergerMenu type="button" onClick={() => setOpenNav(!openNav)}>
        {openNav ? <S.Times /> : <GoThreeBars />}
      </S.HambergerMenu>
    </S.Navbar>
  );
}

export default Navbar;
