import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { GoLinkExternal, GoMarkGithub } from 'react-icons/go';
import { rounded, shadow, color } from '../../utilities';

function Card({ image, description, stack, link }) {
  return (
    <StyledCard>
      <ImageContainer>
        <Links>
          <StyledLink href={link} target="_blank" rel="noopener noreferrer">
            <GoLinkExternal />
          </StyledLink>
          <StyledLink href={link} target="_blank" rel="noopener noreferrer">
            <GoMarkGithub />
          </StyledLink>
        </Links>
        <img src={image} alt={description} />
      </ImageContainer>
      <Details>
        {stack.map((el, index) => (
          <span key={index}>{el}</span>
        ))}
      </Details>
    </StyledCard>
  );
}

const StyledCard = styled.div`
  width: 30.2rem;
  height: 40rem;
  position: relative;
  background: ${(props) => props.theme.cardColor};
  border-radius: ${rounded.md};
  box-shadow: ${shadow.md};
  &:hover {
    border: 0.5px solid ${(props) => props.theme.cardHover};
    box-shadow: ${shadow.xl};
  }
`;
const ImageContainer = styled.div`
  cursor: pointer;
  position: relative;

  img {
    width: 30rem;
    height: 30rem;
    object-fit: fill;
    border-top-left-radius: ${rounded.md};
    border-top-right-radius: ${rounded.md};
  }
`;
const Links = styled.div`
  position: absolute;
  bottom: 0;
  padding-bottom: 2rem;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  opacity: 0;
  background-color: rgba(97, 210, 204, 0.8);
  border-top-left-radius: ${rounded.md};
  border-top-right-radius: ${rounded.md};

  &:hover {
    opacity: 1;

    transition: all 0.4s ease-in;
    z-index: 3;
  }
`;
const StyledLink = styled.a`
  font-size: 3.5rem;
  color: ${color.white};
`;

const Details = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: center;
  height: 5rem;
  padding-top: 2.5rem;
  padding-left: 0.5rem;
  span {
    text-transform: capitalize;
    padding: 0.4rem;
    margin: 0.2rem;
    color: ${color.grey_600};
    background: ${color.grey_200};
    border-radius: ${rounded.lg};
  }
`;

Card.propTypes = {
  image: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  stack: PropTypes.array,
};
export default Card;
