import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


function UserInfoPage(){

    const {id} = useParams()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

     useEffect(()=>{
        const controller = new AbortController()
        
        async function getUser() {
            
            try {
                const response = await fetch(
                `https://jsonplaceholder.typicode.com/users/${id}`, 
            { signal: controller.signal}
            )
                if (!response.ok) throw new Error("Failed to load user")
                setUser(await response.json())
            } catch (err){
                if(err.name === "AbortError") return
                setError("Failed to load user")
            } finally {
                if(!controller.signal.aborted)setLoading(false)
                
            }
        }
       
        getUser()

        return () => controller.abort()
    },[id])
    if (loading) return <h1>Loading...</h1>
    if (error) return <h1>{error}</h1>

    return(
        <>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
            <p>Address: {user.address.city}, {user.address.street}, {user.address.suite}</p>
            <p>Company: {user.company.name}</p>
        </>
    )
}
export default UserInfoPage