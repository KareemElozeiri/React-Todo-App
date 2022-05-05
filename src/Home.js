import { useState } from "react";
const Home = () => {

    const [todos, setTodos] = useState([
        {"title":"Todo 1","decription":"..","id":1},
        {"title":"Todo 2","decription":"...","id":2},
        {"title":"Todo 3","decription":"....","id":3},
    ]);

    return (
        <div className="home">
            {todos.map((todo)=>(
                <div className="todo-preview" key={todo.id}>
                    <h3>{todo.title}</h3>
                    <p>{todo.decription}</p>
                </div>
            )
            )}
        </div>
      );
}
 
export default Home;