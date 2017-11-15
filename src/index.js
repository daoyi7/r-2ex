import React from 'react';
import ReactDOM from 'react-dom';
import './components/css/reset.css';
import './components/css/app.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
