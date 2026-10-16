import { useEffect, useState } from "react"
import UserCard from "../components/UserCard"
function Users() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    const [users, setUsers] = useState([])
    const [attempt, setAttempt] = useState(0)

    useEffect(() => {
        async function getUsers() {
            try {
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/users")
                if (!response.ok) throw new Error("Failed to load users")
                setUsers(await response.json())
            } catch {
                setError("Failed to load users")
            } finally {
                setLoading(false)
            }
        }
        getUsers()
    }, [attempt])

    function handleRetry() {
        setError("")
        setLoading(true)
        setAttempt((a) => a + 1)
    }

    if (loading) return <h1>Loading...</h1>
    if (error) {
        return (
            <>
                <h1>{error}</h1>
                <button onClick={handleRetry}>Try again</button>
            </>
        )
    }

    return (
        <>

            <ul>

                {users.map((user) => (
                    <UserCard key={user.id} id={user.id} name={user.name}
                            email={user.email} company={user.company.name} />
                ))}
            </ul>
        </>
    )
}
export default Users