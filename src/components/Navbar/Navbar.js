import React from 'react';
import { GoThreeBars } from 'react-icons/go';
import { Link } from 'react-scroll';

import * as S from './styles';
import Toggle from '../Toggle/Toggle';
import { useGlobalContext } from '../../context';

function Navbar() {
  const { openNav, setOpenNav } = useGlobalContext();
  // const [prevScrollPos, setPrevScrollPos] = useState(0);
  // const [visible, setVisible] = useState(true);

  // const handleScroll = _.debounce(() => {
  //   const currentPos = window.pageYOffset;
  //   if (prevScrollPos === currentPos) {
  //     setVisible(true);
  //   }
  //   if (prevScrollPos < currentPos) {
  //     setVisible(false);
  //   } else {
  //     setVisible(true);
  //   }
  //   setPrevScrollPos(currentPos);
  // }, 50);

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);

  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, [visible, prevScrollPos]);

  return (
    <S.Navbar>
      <Link to="home" smooth offset={-60}>
        Abderaouf Yettou
      </Link>

      <S.NavItems>
        <S.NavList open={openNav}>
          <li>
            <Link to="about" smooth offset={-70} onClick={() => setOpenNav(false)}>
              About
            </Link>
          </li>

          <li>
            <Link to="skills" smooth offset={-70} onClick={() => setOpenNav(false)}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="projects" smooth offset={-70} onClick={() => setOpenNav(false)}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="contact" smooth onClick={() => setOpenNav(false)}>
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
