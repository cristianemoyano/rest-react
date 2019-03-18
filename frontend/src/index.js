import React from 'react';
import {render} from 'react-dom';

import App from "./components/App";

// retrieve data from server to hydrate the client
const props = window.__SERVER_DATA__ || {};

render(
    <App {...props} />,
    document.getElementById('app')
);
