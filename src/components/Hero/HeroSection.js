import React from 'react';
import * as S from './styles';
import WaveBackground from '../WaveBackground';

function HeroSection() {
  return (
    <S.Wrapper>
      <S.ContentWrapper>
        <WaveBackground />
        <S.TextWrapper>
          <S.Title>Hi! I'm Abderaouf Web developer </S.Title>

          {/* <S.Description>I create custom website to help businesses do better online </S.Description> */}
        </S.TextWrapper>
      </S.ContentWrapper>
    </S.Wrapper>
  );
}

export default HeroSection;
