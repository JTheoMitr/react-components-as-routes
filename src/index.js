import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './Home'
import About from './About'
import Login from './Login'
import Contact from './Contact'
import Navbar from './Navbar'


ReactDOM.render((
  <Router>
    <div>
    < Navbar />
    <br></br>
    <Route exact path="/about" component={About} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/" component={Home} />
    </div>
  </Router>),
  document.getElementById('root')
);
