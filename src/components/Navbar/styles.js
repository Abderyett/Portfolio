import styled from 'styled-components';
import { color } from '../../utilities';

export const Navbar = styled.nav`
  height: 6rem;
  display: flex;
  color: ${color.grey_700};
  border-bottom: 1px solid ${color.grey_200};
  align-items: center;
  justify-content: center;
  a {
    font-size: 2.5rem;
    padding-left: 2rem;
    color: ${color.grey_700};
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
`;

export const NavItems = styled.div``;
