import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Importa tu componente raíz aquí

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<App />); // Renderiza tu componente raíz aquí



