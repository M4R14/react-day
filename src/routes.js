import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import App from './App';
import FormPost from './container/formPost';
import Contact from './Contact';
import Header from './layout/header';

class Routes extends Component{
    render(){
        return(
                <div className="column">
                    <Route path="/todo" component={App}/>
                    <Route path="/form-post" component={FormPost}/>
                    <Route path="/contact" component={Contact}/>
                </div>         
        )
    }
}

export default Routes;
