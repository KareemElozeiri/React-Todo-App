import TodoObj from "./TodoObj";
const TodoList = (props) => {
    const todos = props.todos;

    return (
        todos.map((todo)=>(
            <TodoObj title={todo.title} handleDone={props.handleDone} description={todo.description} id={todo.id} />
    )));
}
 
export default TodoList;