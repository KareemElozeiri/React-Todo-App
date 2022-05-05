const TodoObj = (props) => {
    const title = props.title;
    const description = props.description;
    const id = props.id;
    return ( 
        <div className="todo-obj" key={id}>
                    <h3>{title}</h3>
                    <p>{description}</p>
        </div>
     );
}
 
export default TodoObj;