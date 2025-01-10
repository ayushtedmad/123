export const themes = {
  light: {
    background: '#ffffff',
    color: '#000000',
  },
  dark: {
    background: '#000000',
    color: '#ffffff',
  },
};

export const getTheme = (themeName) => {
  return themes[themeName] || themes.light;
};

export const toggleTheme = (currentTheme) => {
  return currentTheme === 'light' ? 'dark' : 'light';
};