import TaskItem from "./TaskItem"

function TaskList({tasks, onToggle}){
 return(
    <>
        {tasks.length === 0 ? (
            <p>Завдань поки немає</p>
        ) : (
            <ul>
                {tasks.map((task) => (
                    <TaskItem
                        key={task.id}
                        id={task.id}
                        title={task.title}
                        completed={task.completed}
                        onToggle={onToggle}
                    />
                ))}
            </ul>
        )}
    </>
 )
    

}
export default TaskList