/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import emailjs from 'emailjs-com';
import styled, { css } from 'styled-components';
import { color, rounded } from '../../utilities';

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_96inzim', 'template_2hqzuqx', e.target, 'user_v6pXWeXu8vsAlJ4YzHzKf').then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  }

  return (
    <StyledForm className="contact-form" onSubmit={sendEmail}>
      <StyledfInput type="text" name="name" placeholder="Your Name" />
      <StyledfInput type="email" name="user_email" placeholder="Email" />
      <StyledfInput type="text" name="subject" placeholder="Subject" />

      <StyledfTextarea name="message" placeholder="Message" />
      <StyledfInput type="submit" value="Send" />
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: grid;
  grid-gap: 2rem;
`;
const FormStyled = css`
  border-radius: ${rounded.md};
  background: ${color.grey_100};

  height: 4rem;
`;
const StyledfInput = styled.input`
  ${FormStyled}
  &:focus {
    outline: 1px solid ${color.blue_400};
  }
`;
const StyledfTextarea = styled.textarea`
  ${FormStyled}
`;
