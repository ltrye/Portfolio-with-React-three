import React from 'react';
import { createRoot } from 'react-dom/client';
import './public/src/app.css';
import Experience from './public/src/Experience';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Experience />
);
