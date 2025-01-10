import React from 'react';

const themes = [
  { name: 'Light', value: 'light' },
  { name: 'Dark', value: 'dark' },
];

const ThemeSelector = ({ currentTheme, onThemeChange }) => {
  const handleChange = (event) => {
    onThemeChange(event.target.value);
  };

  return (
    <div className="theme-selector">
      <label htmlFor="theme-select">Select Theme:</label>
      <select id="theme-select" value={currentTheme} onChange={handleChange}>
        {themes.map((theme) => (
          <option key={theme.value} value={theme.value}>
            {theme.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ThemeSelector;