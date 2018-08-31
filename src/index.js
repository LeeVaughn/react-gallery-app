import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// renders the App component to the DOM via the root div
ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
