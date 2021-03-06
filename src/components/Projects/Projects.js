import React from 'react';
import * as S from './styles';
import Header from '../Header';
import CardList from './CardList';

function Projects() {
  return (
    <S.Container id="projects">
      <Header text="Projects" />
      <CardList />
    </S.Container>
  );
}

export default Projects;
