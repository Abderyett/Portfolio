import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import { ProjectData } from '../../utilities';

function CardList() {
  return (
    <StyledCardList>
      {ProjectData.map((el) => (
        <Card key={el.id} image={el.image} descrption={el.name} />
      ))}
    </StyledCardList>
  );
}

const StyledCardList = styled.div`
  padding-top: 3rem;
`;
export default CardList;
