import React from 'react';
import { GoThreeBars } from 'react-icons/go';
import { Link } from 'react-scroll';
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
            <Link to="about" smooth duration={1000}>
              About
            </Link>
          </li>

          <li>
            <Link to="skills" smooth duration={1000}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="projects" smooth duration={1000}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="contact" smooth duration={1000}>
              Contact
            </Link>
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
