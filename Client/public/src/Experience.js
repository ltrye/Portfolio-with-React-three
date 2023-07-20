import React, { useState, useMemo } from 'react';

import Overlay from './Overlay';
import Scene from './Scene';

import ThemeContext from './ThemeContext';

export default function Experience() {
  const [theme, setTheme] = useState('dark');
  const themeHandle = useMemo(() => ({ theme, setTheme }), [theme]);
  return (
    <ThemeContext.Provider value={themeHandle}>
      <Scene />
      <Overlay />
    </ThemeContext.Provider>
  );
}
