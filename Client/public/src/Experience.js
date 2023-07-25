import React, { useState, useMemo, useEffect } from 'react';
import Cookies from 'js-cookie';

import Overlay from './Overlay';
import Scene from './Scene';

import ThemeContext from './ThemeContext';
import TreeContext from './TreeContext';

let init = true;
export default function Experience() {
  const [isLoading, setIsLoading] = useState(true);
  const initTheme = Cookies.get('theme');
  const [theme, setTheme] = useState(!initTheme || initTheme === 'dark' ? 'dark' : 'light');
  console.log(theme);
  const [selectedTree, setSelectedTree] = useState(0);
  const themeHandle = useMemo(() => ({ theme, setTheme }), [theme]);
  const treeHandle = useMemo(() => ({ selectedTree, setSelectedTree }), [selectedTree]);
  useEffect(() => {
    if (!init) {
      if (theme === 'dark') Cookies.set('theme', 'dark');
      else Cookies.set('theme', 'light');
    }
    init = false;
  }, [theme]);
  return (
    <ThemeContext.Provider value={themeHandle}>
      <TreeContext.Provider value={treeHandle}>
        <Scene isLoading={isLoading} setIsLoading={setIsLoading} />
        <Overlay isLoading={isLoading} />
      </TreeContext.Provider>
    </ThemeContext.Provider>
  );
}
