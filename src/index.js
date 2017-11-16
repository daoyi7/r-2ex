import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import './components/static/css/reset.css';
import './components/static/css/app.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
