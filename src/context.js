import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

const AppContext = React.createContext();

function AppProvider({ children }) {
  const [dark, setDark] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  return <AppContext.Provider value={{ dark, setDark, openNav, setOpenNav }}>{children}</AppContext.Provider>;
}

AppProvider.propTypes = PropTypes.element.isRequired;

export { AppContext, AppProvider };

export const useGlobalContext = () => useContext(AppContext);
