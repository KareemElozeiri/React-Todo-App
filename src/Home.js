import React from 'react';
import TodoList from './TodoList';
class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {todos :[
            {"title":"Todo 1","description":"llll","id":1},
            {"title":"Todo 2","description":"...","id":2},
            {"title":"Todo 3","description":"....","id":3},
        ],doneCount:0};
        this.handleDone = this.handleDone.bind(this);
    }

    

    handleDone(id){
        console.log(id);
        this.setState({todos:this.state.todos.filter(todo => todo.id !== id), doneCount: this.state.doneCount+1});
    }
    
    render()
    {
    return (
        <div className="home">
            <h3>Done: {this.state.doneCount}</h3>
            <TodoList todos={this.state.todos} handleDone={this.handleDone}/>
        </div>
      );
    }
}
 
export default Home;