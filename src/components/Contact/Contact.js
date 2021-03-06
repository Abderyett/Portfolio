import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Form from './Form';
import Header from '../Header';
import { color } from '../../utilities';
import Background from './Background';

function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 2,
        },
      });
    }
  }, [inView]);
  return (
    <Wrapper id="contact">
      <Header text="Contact" />
      <FormWrapper>
        <Form />
      </FormWrapper>
      <Email ref={ref} animate={animation} initial={{ x: 10, opacity: 0 }}>
        Don't like forms, send me an <a href="mailto:abderaouf.yettou@gmail.com">email</a> 👋
      </Email>
      <Background />
    </Wrapper>
  );
}
const Wrapper = styled.section`
  padding-left: 6rem;
  position: relative;
  margin-top: 10rem;
  width: 95%;
  height: 100vh;
  max-width: 1234px;
  display: grid;
  grid-auto-flow: column;
  align-content: center;
  grid-gap: 2rem;
  z-index: 1;
  @media (max-width: 768px) {
    padding-left: 3.5rem;
    grid-auto-flow: row;
    grid-template-rows: 10rem 2fr 1fr;
  }
`;
const FormWrapper = styled.section`
  margin-top: 7rem;
  z-index: 3;
  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;
const Email = styled(motion.div)`
  margin-top: 10rem;
  font-size: 2rem;
  color: ${(props) => props.theme.headingText};

  a {
    color: ${color.cyan_400};
    z-index: 1;
  }
`;

export default Contact;
