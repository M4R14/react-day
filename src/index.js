import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Routes from './routes';
import Header from './layout/header';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

const main = (
        <Router>
            <div>
                <Header />
                <Routes />
                <foooter />
            </div>
        </Router>
);

ReactDOM.render(main, document.getElementById('root'));
// ReactDOM.render(<Header />, document.getElementById('header'));

registerServiceWorker();

