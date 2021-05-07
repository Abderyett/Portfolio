import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import { ProjectData } from '../../utilities';

function CardList() {
  return (
    <StyledCardList>
      {ProjectData.map((el) => (
        <Card key={el.id} image={el.image} descrption={el.name} stack={el.stack} link={el.link} />
      ))}
    </StyledCardList>
  );
}

const StyledCardList = styled.div`
  padding-top: 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, 35rem);
  grid-gap: 2rem;
  place-items: center;
  place-content: center;
`;
export default CardList;
