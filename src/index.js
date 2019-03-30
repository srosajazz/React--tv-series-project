import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const getCurrentDate = () => {
    const date = new Date();
    return date.toDateString();
}
const greeting = <h1>Hello World! Current date: {getCurrentDate()}</h1>;


ReactDOM.render(greeting, document.getElementById('root'));
serviceWorker.unregister();
