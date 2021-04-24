import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import { color } from '../../utilities';

export const Navbar = styled.nav`
  height: 6rem;
  display: flex;
  color: ${(props) => props.theme.headingText};
  border-bottom: 1px solid ${(props) => props.theme.borderNav};
  align-items: center;
  justify-content: center;
  a {
    font-size: 2.5rem;
    padding-left: 2rem;
    color: ${(props) => props.theme.headingText};
  }
  @media (max-width: 807px) {
    justify-content: space-between;
  }
`;
export const NavList = styled.ul`
  margin-left: 10rem;
  font-size: 1.5rem;
  li {
    display: inline-block;
    padding: 2.5rem;
    cursor: pointer;
  }
  @media (max-width: 807px) {
    display: none;
  }
`;
export const HambergerMenu = styled(GiHamburgerMenu)`
  font-size: 3rem;
  display: none;
  margin-right: 2rem;
  color: ${(props) => props.theme.headingText};
  @media (max-width: 807px) {
    display: inline-block;
  }
`;

export const NavItems = styled.div``;
