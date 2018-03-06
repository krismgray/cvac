import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Login from './Login';
import Flash from './Flash';
import Home from './Home';
import AboutUs from './AboutUs';
import Register from './Register';
import Gallery from './Gallery';
import ContactUs from './ContactUs';
import Map from './Map';
import Calendar from './Calendar';
import ProtectedRoute from './ProtectedRoute';
import AuthRoute from './AuthRoute';
import FetchUser from './FetchUser';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/Register' component={Register} />
            <Route exact path='/AboutUs' component={AboutUs} />
            <Route exact path='/Gallery' component={Gallery} />
            <Route exact path='/Calendar' component={Calendar} />
            <Route exact path='/ContactUs' component={ContactUs} />
            <Route component={NoMatch} />
          </Switch>
      </div>
    );
  }
}

export default App;
