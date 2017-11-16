import React from 'react';
import ReactDOM from 'react-dom';
import './components/static/css/reset.css';
import './components/static/css/app.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
