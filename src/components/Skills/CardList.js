import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { data, rounded } from '../../utilities';

function CardList() {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        transition: {
          duration: 2,
        },
      });
    }
  }, [inView]);
  return (
    <Container ref={ref} animate={animation} initial={{ opacity: 0 }}>
      {data.map((el) => (
        <div key={el.id}>
          <img src={el.image} alt={el.name} />
        </div>
      ))}
    </Container>
  );
}

const Container = styled(motion.div)`
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
