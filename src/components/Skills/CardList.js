import React from 'react';
import styled from 'styled-components';
import { data, rounded } from '../../utilities';

function CardList() {
  return (
    <Container>
      {data.map((el) => (
        <div key={el.id}>
          <img src={el.image} alt={el.name} />
        </div>
      ))}
    </Container>
  );
}

const Container = styled.div`
  max-width: 1234px;
  display: grid;
  grid-template-columns: repeat(auto-fit, 18rem);
  grid-template-rows: auto;
  grid-gap: 2rem;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.cardColor};
  border-radius: ${rounded.md};
  width: 95%;
  div {
    width: 15rem;
    height: 15rem;
    display: grid;
    place-items: center;
  }
`;

export default CardList;
