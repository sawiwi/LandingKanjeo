import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

/** Stylesheets */
import './assets/css/tailwind.css';
import './assets/css/index.css';
import './assets/css/react-slick.css';

// react slick
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

//mapbox
import "mapbox-gl/dist/mapbox-gl.css";
import PropertiesProvider from './context/properties/PropertiesProvider';
import UsersProvider from './context/realtors/UsersProvider';
import SelectsProvider from './context/selects/SelectsProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
     <SelectsProvider>
      <PropertiesProvider>
        <UsersProvider>
          <App />
        </UsersProvider>
      </PropertiesProvider>
      </SelectsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
