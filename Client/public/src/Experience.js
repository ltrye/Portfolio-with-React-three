import React, { useState, useMemo } from 'react';

import Overlay from './Overlay';
import Scene from './Scene';

import ThemeContext from './ThemeContext';
import TreeContext from './TreeContext';

export default function Experience() {
  const [theme, setTheme] = useState('dark');
  const [selectedTree, setSelectedTree] = useState(0);
  const themeHandle = useMemo(() => ({ theme, setTheme }), [theme]);
  const treeHandle = useMemo(() => ({ selectedTree, setSelectedTree }), [selectedTree]);
  return (
    <ThemeContext.Provider value={themeHandle}>
      <TreeContext.Provider value={treeHandle}>
        <Scene />
        <Overlay />
      </TreeContext.Provider>
    </ThemeContext.Provider>
  );
}
