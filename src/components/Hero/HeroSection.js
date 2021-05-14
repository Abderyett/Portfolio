import React from 'react';
import * as S from './styles';
import WaveBackground from '../WaveBackground';

function HeroSection() {
  return (
    <S.Wrapper id="home">
      <S.ContentWrapper>
        <WaveBackground />
        <S.TextWrapper initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 2 }}>
          <S.Description>Hi, my name is </S.Description>
          <S.FirstTitle> Abderaouf Yettou</S.FirstTitle>
          <S.SecondTitle>I build Thing for the web</S.SecondTitle>
        </S.TextWrapper>
      </S.ContentWrapper>
    </S.Wrapper>
  );
}

export default HeroSection;
