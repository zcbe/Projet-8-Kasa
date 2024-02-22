

// main.jsx

import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes.jsx'; // Importez le routeur depuis son emplacement correct

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} /> {/* Utilisez le routeur importé */}
  </React.StrictMode>
);
