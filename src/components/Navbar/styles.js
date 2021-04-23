import styled from 'styled-components';
import { color } from '../../utilities';
import Hamburger from '../HumbergerMenu';

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
export const HambergerMenu = styled(Hamburger)`
  visibility: hidden;

  @media (max-width: 807px) {
  }
`;

export const NavItems = styled.div``;
