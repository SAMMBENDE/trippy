import React from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch,
  Link 
} from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import Hotels from './containers/Hotels';
import Restaurants from './containers/Restaurants';
import Login from './containers/Login';
import Signup from './containers/Signup';

class App extends React.Component {
  
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/hotels">Hotels</Link></li>
              <li><Link to="/restaurants">Restaurants</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/signup">Signup</Link></li>
            </ul>
          </nav>
              <Switch>
                <Route path="/">
                  <HomeContainer />
                </Route>
                <Route path="/hotels">
                  <Hotels />
                </Route>
                <Route path="/restaurants">
                  <Restaurants />
                </Route>
                <Route path="/login">
                  <Login />
                </Route> 
                <Route path="/signup">
                  <Signup />
                </Route> 
              </Switch>
        </div>
      </Router>  
    );
  }
}
export default App;