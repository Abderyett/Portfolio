import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

const AppContext = React.createContext();

function AppProvider({ children }) {
  const [dark, setDark] = useState(false);

  return <AppContext.Provider value={{ dark, setDark }}>{children}</AppContext.Provider>;
}

AppProvider.propTypes = PropTypes.element.isRequired;

export { AppContext, AppProvider };

export const useGolbalContext = () => useContext(AppContext);
