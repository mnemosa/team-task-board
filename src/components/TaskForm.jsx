import { useRef, useState } from "react"

function TaskForm({onAdd}){

    const [inputTask, setInputTask] = useState("")
    const inputRef = useRef(null)

     function handleAdd() {
        onAdd(inputTask.trim())
        setInputTask("")
        inputRef.current.focus()
    }

    return(
        <>
        <input ref={inputRef} autoFocus 
        value={inputTask} onChange={(event)=>
        setInputTask(event.target.value)}></input>

        {inputTask.length > 0 && inputTask.trim().length < 3 
        && (<p>Мінімум 3 символи</p>)}

        <button disabled={inputTask.trim().length < 3}
        onClick={()=>handleAdd()}>Add task</button>
        </>
    )
}
export default TaskForm