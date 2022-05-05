import React from 'react';

class Navbar extends React.Component{
    render(){
    return (
        <nav className="navbar">
            <h1>MyTodos</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">Add Todo</a>
            </div>
        </nav>
      );
    }
}
 
export default Navbar;
