import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './assets/styles/reset.css';
import './assets/styles/index.css';
import './assets/styles/media.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>,
);