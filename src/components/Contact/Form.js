/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import emailjs from 'emailjs-com';
import styled, { css } from 'styled-components';
import { color, rounded, shadow } from '../../utilities';

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
      <Wrapper>
        <NameInput type="text" name="name" placeholder="Your Name" />
        <EmailInput type="email" name="user_email" placeholder="Email" />
      </Wrapper>
      <StyledfInput type="text" name="subject" placeholder="Subject" />

      <StyledfTextarea name="message" placeholder="Message" rows={10} />
      <SubmitInput type="submit" value="Send" />
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: grid;
  grid-gap: 2rem;
  padding-top: 2rem;
`;
const FormStyled = css`
  border-radius: ${rounded.md};
  background: ${color.grey_100};
  caret-color: ${color.grey_700};
  text-indent: 3%;
  height: 4rem;
  color: ${color.grey_700};

  &:focus {
    outline: 1px solid ${(props) => props.theme.outlineColor};
    /* box-shadow: 0 0 1pt 1pt ${color.red_400}; */
  }
`;
const StyledfInput = styled.input`
  ${FormStyled}
  max-width:540px;
  text-indent: 2%;
`;
const StyledfTextarea = styled.textarea`
  ${FormStyled}
  max-width:540px;
  height: 12rem;
  text-indent: 2%;
`;
const NameInput = styled.input`
  ${FormStyled}
  width: 100%;
  margin-right: 2rem;
`;
const EmailInput = styled.input`
  ${FormStyled};
  width: 100%;
`;
const SubmitInput = styled.input`
  ${FormStyled};
  width: 10rem;
  background-color: ${color.cyan_500};
  color: ${color.white};
  box-shadow: ${shadow.md};

  &:focus {
    outline: none;
    box-shadow: none;
  }
  &:active {
    transform: translateY(2px);
    box-shadow: ${shadow.lg};
  }
  &:hover {
    background-color: ${color.cyan_400};
  }
`;

const Wrapper = styled.div`
  display: grid;
  max-width: 540px;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-flow: row;
  }
`;
