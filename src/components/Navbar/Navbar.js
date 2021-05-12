import React, { useState, useEffect } from 'react';
import { GoThreeBars } from 'react-icons/go';
import { Link } from 'react-scroll';
import _ from 'lodash';
import * as S from './styles';
import Toggle from '../Toggle/Toggle';
import { useGlobalContext } from '../../context';

function Navbar() {
  const { openNav, setOpenNav } = useGlobalContext();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = _.debounce(() => {
    const currentPos = window.pageYOffset;
    if (prevScrollPos === currentPos) {
      setVisible(true);
    }
    if (prevScrollPos < currentPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }
    setPrevScrollPos(currentPos);
  }, 50);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [visible, prevScrollPos]);

  return (
    <S.Navbar show={visible}>
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
