import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { GlobalStyle } from './Global';
import { useGlobalContext } from './context';
import { lightTheme, darkTheme } from './components/theme';
import HeroSection from './components/Hero/HeroSection';
import Scroll from './components/Svg/Scroll';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const App = () => {
  const { dark } = useGlobalContext();

  return (
    <Router>
      <Switch>
        <ThemeProvider theme={dark ? darkTheme : lightTheme}>
          <AppWrapper>
            <Navbar />
            <HeroSection />
            <Scroll />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <GlobalStyle />
            <Footer />
          </AppWrapper>
        </ThemeProvider>
      </Switch>
    </Router>
  );
};

const AppWrapper = styled.div`
  height: 100vh;
  margin: 0 auto;
  background: ${({ theme }) => theme.background};
  transition: 0.6s ease all;
`;

export default App;
