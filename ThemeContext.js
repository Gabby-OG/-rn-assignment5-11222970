import React, { createContext, useState, useMemo, useContext } from 'react';
import { StyleSheet } from 'react-native';

const ThemeContext = createContext();

const lightTheme = {
  background: '#ffffff',
  text: '#000000',
  card: '#f8f9fa',
  border: '#ccc',
};

const darkTheme = {
  background: '#000000',
  text: '#ffffff',
  card: '#333333',
  border: '#555555',
};

export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const theme = isDarkTheme ? darkTheme : lightTheme;

  const toggleTheme = () => setIsDarkTheme(!isDarkTheme);

  const value = useMemo(() => ({ toggleTheme, theme, isDarkTheme }), [isDarkTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
