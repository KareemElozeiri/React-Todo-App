import Navbar  from './Navbar';
import Home from './Home';
import React from 'react';

class App extends React.Component {
  render(){
  return (
    <div className="App">
      <Navbar/>
      <Home/>
    </div>
  );
  }
}

export default App;
