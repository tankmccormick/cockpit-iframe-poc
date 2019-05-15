import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app';

var urlParams = new URLSearchParams(window.location.search);
let token = urlParams.get('tk');

ReactDOM.render(<BrowserRouter><App token={token} /></BrowserRouter>, document.getElementById('app'));