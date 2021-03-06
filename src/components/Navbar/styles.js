import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

import { color, shadow } from '../../utilities';

export const Navbar = styled.nav`
  height: 6rem;
  display: grid;
  grid-gap: 1rem;
  grid-auto-flow: column;
  color: ${(props) => props.theme.headingText};
  border-bottom: 1px solid ${(props) => props.theme.borderNav};

  place-items: center;
  grid-template-columns: 35% 65%;
  position: sticky;
  top: 0;
  left: 0;
  transition: top 0.6s ease;
  background-color: ${(props) => props.theme.background};
  z-index: 5;

  a {
    font-size: 2.5rem;
    padding-left: 6rem;
    cursor: pointer;
    color: ${(props) => props.theme.headingText};

    @media (max-width: 847px) {
      font-size: 2rem;
      padding-left: 3.5rem;
    }
    @media (min-width: 768px) and(max-width:952px) {
      font-size: 2rem;
    }
  }
  @media (max-width: 807px) {
    flex-wrap: nowrap;
    display: flex;
    justify-content: space-between;
  }
  @media (min-width: 768px) and(max-width:952px) {
  }
`;
export const NavList = styled.ul`
  margin-left: 1rem;
  font-size: 1.5rem;
  display: flex;
  @media (max-width: 952px) and (min-width: 768px) {
    margin-left: 1rem;
  }

  li a {
    display: inline-block;
    padding: 2.5rem;
    cursor: pointer;
    font-size: 1.5rem;
    position: relative;
    &:hover {
      color: ${color.cyan_500};
    }

    @media (max-width: 807px) {
      width: 100vw;
      text-align: center;
      &:hover {
        background-color: ${(props) => props.theme.hoverColor};
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
    box-shadow: ${shadow.lg};

    background: ${(props) => props.theme.background};
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
