import React from 'react';
import { data } from '../../utilities';

function CardList() {
  return (
    <div>
      {data.map((el) => (
        <div key={el.id}>
          <img src={el.image} alt={el.name} />
        </div>
      ))}
    </div>
  );
}

export default CardList;
