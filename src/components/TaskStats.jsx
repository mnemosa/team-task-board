import "../index.css"

function TaskStats({tasks}){
    const allDone = tasks.length > 0 && 
    tasks.every((task) => task.completed)
    const doneCount = tasks.filter((task) => task.completed).length

    return allDone ? <p>Все виконано 🎉</p>
        : <p>Виконано {doneCount} з {tasks.length}</p>
}
export default TaskStats