import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Navbar from './components/Navbar/Navbar';
import { GlobalStyle } from './Global';
import { useGlobalContext } from './context';
import { lightTheme, darkTheme } from './components/theme';
import HeroSection from './components/Hero/HeroSection';
import WaveBackground from './components/WaveBackground';

const App = () => {
  const { dark } = useGlobalContext();

  return (
    <ThemeProvider theme={dark ? darkTheme : lightTheme}>
      <AppWrapper>
        <Navbar />
        <HeroSection />
        <GlobalStyle />
      </AppWrapper>
    </ThemeProvider>
  );
};

const AppWrapper = styled.div`
  height: 100vh;
  margin: 0 auto;
  background: ${({ theme }) => theme.background};
  transition: 0.6s ease all;
`;

export default App;
