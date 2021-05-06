import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { rounded, shadow, color } from '../../utilities';

function Card({ image, description, stack }) {
  return (
    <StyledCard>
      <ImageContainer>
        <img src={image} alt={description} />
      </ImageContainer>
      <Details>
        {stack.map((el) => (
          <span>{el}</span>
        ))}
      </Details>
    </StyledCard>
  );
}

const StyledCard = styled.div`
  width: 30rem;
  height: 40rem;

  background: ${(props) => props.theme.cardColor};
  border-radius: ${rounded.md};
  box-shadow: ${shadow.md};
`;
const ImageContainer = styled.div`
  img {
    width: 30rem;
    height: 30rem;
    object-fit: fill;
    border-top-left-radius: ${rounded.md};
    border-top-right-radius: ${rounded.md};
    border-bottom: 1px solid ${(props) => props.theme.borderNav};
  }
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
    background: ${color.grey_300};
    border-radius: ${rounded.full};
  }
`;

Card.propTypes = {
  image: PropTypes.string,
  description: PropTypes.string,
  stack: PropTypes.array,
};
export default Card;
