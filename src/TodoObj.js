const TodoObj = (props) => {
    const title = props.title;
    const description = props.description;
    const id = props.id;
    const handleDone = props.handleDone;
    return ( 
        <div className="todo-obj" key={id}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <button onClick={()=>{handleDone(id)}}>Done</button>
        </div>
     );
}
 
export default TodoObj;