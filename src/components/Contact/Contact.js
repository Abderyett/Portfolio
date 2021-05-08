import React from 'react';
import styled from 'styled-components';
import Form from './Form';
import Header from '../Header';

function Contact() {
  return (
    <Wrapper>
      <Header text="Contact" />
      <FormWrapper>
        <Form />
      </FormWrapper>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  padding-left: 6rem;
  height: 100vh;
  margin-top: 3rem;
  width: 95%;
  max-width: 1234px;

  @media (max-width: 768px) {
    padding-left: 3.5rem;
  }
`;
const FormWrapper = styled.section``;

export default Contact;
