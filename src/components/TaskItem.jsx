

function TaskItem({ id, title, completed, onToggle }) {
    return (
        <li>
            <input type="checkbox" checked={completed}
                   onChange={() => onToggle(id)} />
            <span className={completed ? "done" : ""}>{title}</span>
        </li>
    )
}
export default TaskItem