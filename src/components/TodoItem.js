
const TodoItem = (props) => {
    const {taskName, description, text } = props.task
    return (
        <div>
            <h3>*{taskName}</h3>
            <h4>1) {description}</h4>
            <h4>2) {text}</h4>
            {/* <h2>{completed}</h2> */}
        </div>
    )
}

export default TodoItem;