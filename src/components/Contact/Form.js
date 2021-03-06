/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import emailjs from 'emailjs-com';
import styled, { css } from 'styled-components';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { color, rounded, shadow } from '../../utilities';

export default function ContactUs() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_bq6tzet', e.target, 'user_v6pXWeXu8vsAlJ4YzHzKf').then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  };
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
    <StyledForm
      ref={ref}
      animate={animation}
      initial={{ x: -10, opacity: 0 }}
      className="contact-form"
      onSubmit={sendEmail}
    >
      <Wrapper>
        <NameInput type="text" name="name" placeholder="Your Name" />
        <EmailInput type="email" name="email" placeholder="Email" />
      </Wrapper>
      <StyledfInput type="text" name="subject" placeholder="Subject" />

      <StyledfTextarea name="message" placeholder="Message" rows={10} />
      <SubmitInput type="submit" value="Send" />
    </StyledForm>
  );
}

const StyledForm = styled(motion.form)`
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
  font-family: 'rubikregular';
  outline: none;

  &:focus {
    ${'' /* outline: 1px solid ${(props) => props.theme.outlineColor}; */}
    box-shadow: 0px 0px 0px 1px ${color.light_blue_vivid_500};
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
  padding-top: 1rem;
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
