import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
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
    @media (max-width: 807px) {
      font-size: 2rem;
    }
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
    @media (max-width: 807px) {
      cursor: pointer;
      width: 100vw;
      text-align: center;
      &:hover {
        /* background-color: ${(props) => props.theme.hoverColor}; */
        padding-right: 1.5rem;
        transition: all 0.3s linear;
        color: ${color.blue_500};
      }
    }
  }
  @media (max-width: 807px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: ${({ open }) => (open ? 0 : '-100%')};
    transition: all 0.5s ease;
    margin-top: 6rem;
    width: 20rem;
    margin-left: 0;
    padding-left: 0;
    z-index: 3;
    width: 100vw;
    /* transform: ${({ open }) => (open ? 'translateX(-150%)' : 'translateX(0)')}; */
  }
`;
export const HambergerMenu = styled.button`
  font-size: 3rem;
  display: none;
  background: transparent;
  border-color: transparent;
  outline: none;
  &:hover {
    cursor: pointer;
  }
  margin-right: 2rem;
  color: ${(props) => props.theme.headingText};
  @media (max-width: 807px) {
    display: flex;
  }
`;
export const Times = styled(FaTimes)`
  font-size: 2.5rem;
`;

export const NavItems = styled.div`
  @media (max-width: 807px) {
  }
`;
