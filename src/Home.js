import React from 'react';
import TodoList from './TodoList';
class Home extends React.Component {
    constructor(props){
        super(props);
        this.todos = [
            {"title":"Todo 1","description":"llll","id":1},
            {"title":"Todo 2","description":"...","id":2},
            {"title":"Todo 3","description":"....","id":3},
        ];
    }
    
    render()
    {
    return (
        <div className="home">
            <TodoList todos={this.todos}/>
        </div>
      );
    }
}
 
export default Home;