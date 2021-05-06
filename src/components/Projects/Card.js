import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { rounded, shadow } from '../../utilities';

function Card({ image, description }) {
  return (
    <StyledCard>
      <ImageContainer>
        <img src={image} alt={description} />
      </ImageContainer>
      <Details />
    </StyledCard>
  );
}

const StyledCard = styled.div`
  width: 30rem;
  height: 40rem;

  background: ${(props) => props.theme.cardColor};
  border-radius: ${rounded.md};
  box-shadow: ${shadow.md};
  border: 0.5px solid rgba(0, 0, 0, 0.2);
`;
const ImageContainer = styled.div`
  img {
    width: 30rem;
    height: 30rem;
    object-fit: fill;
    border-top-left-radius: ${rounded.md};
    border-top-right-radius: ${rounded.md};

    border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);
  }
`;
const Details = styled.div``;

Card.propTypes = {
  image: PropTypes.string,
  description: PropTypes.string,
};
export default Card;
