import { useEffect, useState, useRef } from "react"
import TaskList from "../components/TaskList"
import TaskStats from "../components/TaskStats"
import TaskForm from "../components/TaskForm"
import { useParams } from "react-router-dom"
function UserTasksPage(){
    const {id} = useParams()
    const [tasks, setTasks] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    const toggleCount = useRef(0)

    useEffect(()=>{
        return()=>{
        console.log("Toggles: ", toggleCount.current)}
    },[])

    useEffect(()=>{
        const controller = new AbortController()


        async function getUser() {
            
            try {
                const response = await fetch(
                `https://jsonplaceholder.typicode.com/todos?userId=${id}`,
            {signal: controller.signal}
            )
                if (!response.ok) throw new Error("Failed to load user")
                setTasks(await response.json())
            } catch (err){
                if(err.name === "AbortError")return
                setError("Failed to load user")
            } finally {
                if(!controller.signal.aborted)setLoading(false)
                
                
            }
        }
       
        getUser()
        return()=>controller.abort()
    },[id])


    function handleToggle(taskId) {
    toggleCount.current += 1
    setTasks(tasks.map((task) =>
        task.id === taskId
            ? { ...task, completed: !task.completed }
            : task
    ))
    }   

    function addTask(title){
        setTasks([...tasks,
            {
            id:Date.now(),
            title,
            completed: false
        }])

    }

    if (loading) return <h1>Loading...</h1>
    if (error) return <h1>{error}</h1>

    return(
        <>
            <TaskStats tasks={tasks}/>

            <TaskForm onAdd={addTask}/>
            

            <TaskList tasks={tasks} onToggle={handleToggle}/>
        </>
    )
}
export default UserTasksPage