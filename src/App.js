import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { GlobalStyle } from './Global';
import { AppProvider } from './context';

const App = () => (
  <>
    <AppProvider>
      <Navbar />
      <GlobalStyle />
    </AppProvider>
  </>
);

export default App;
