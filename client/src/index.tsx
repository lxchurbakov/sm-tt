import React from 'react';
import { createRoot } from 'react-dom/client';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './app';

const app = document.getElementById('app');
const root = createRoot(app);

root.render(<App />);
