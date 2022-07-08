import TodoItem from "./TodoItem";

const TodosList = (props) => {
    return (
        <div>
            <h2>Todos List</h2>

            {/* Map over the array */}
            {props.tasks.map((task, idx) => <TodoItem task={task} key={idx} />)}
        </div>
    );
};

export default TodosList;