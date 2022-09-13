import React, { useState, createContext } from 'react';
import "../styles/Header.css";
import Characters from './Characters';

export const DarkModeContext = createContext();

const Header = () => {

    const [darkMode, setDarkMode] = useState(false);

    const handleClick = () => {
        setDarkMode(!darkMode);
    }

  return (
    <DarkModeContext.Provider value={darkMode}>
      <div className="Header">
        <h1 className={ darkMode ? `TitleDark` : `TitleLight` }>ReactHooks</h1>
        <button type='button' className={ darkMode ? `HeaderButton Light` : `HeaderButton Dark` } onClick={handleClick}>{darkMode ? 'Light Mode' : 'Dark Mode'}</button>
        {/* {another way to do this...} */}
        {/* <button type='button' onClick={() => setDarkMode(!darkMode)}>{darkMode ? 'Dark Mode 2' : 'Light Mode 2'}</button> */}
      </div>
      <Characters/>
    </DarkModeContext.Provider>
  )
};

export default Header;
