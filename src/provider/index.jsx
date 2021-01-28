import React, { useState } from 'react';

const themeContext = React.createContext();

const ThemeProvider = ({children}) => {
    const [activeTheme, setActiveTheme] = useState("LIGHT");
    return (
        <themeContext.Provider value={{activeTheme, setActiveTheme}}>{children}</themeContext.Provider>
    );
}

export { themeContext, ThemeProvider };
