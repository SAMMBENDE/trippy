import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navigation from './components/navigation/Navigation';
import HomeContainer from './containers/HomeContainer';
import HotelsContainer from './containers/HotelsContainer';
import HotelContainer from './containers/HotelContainer';
import LoginContainer from './containers/LoginContainer';
import SignupContainer from './containers/SignupContainer';
import NotFoundContainer from './containers/NotFoundContainer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';





class App extends Component {
  render() {    
    return (
      <Router>
        <div>
          <Navigation />          
          <Switch>            
            <Route path="/hotels/:id"><HotelContainer /></Route>
            <Route path="/hotels" component={HotelsContainer}></Route>
            <Route path="/login"><LoginContainer /></Route>
            <Route path="/signup"><SignupContainer /></Route>                        
            <Route path="/"><HomeContainer /></Route>
            <Route path="*"><NotFoundContainer /></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;