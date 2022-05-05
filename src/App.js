import Navbar  from './Navbar';
import Home from './Home';
import Create from './Create';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 

class App extends React.Component {
  render(){
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/create">
            <Create/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
  }
}

export default App;
