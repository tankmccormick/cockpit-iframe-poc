import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app';

let hash = window.location.hash;
if (hash.length > 0)
    hash = hash.substring(1);

ReactDOM.render(<BrowserRouter><App startpath={window.location.pathname} starthash={hash} /></BrowserRouter>, document.getElementById('app'));