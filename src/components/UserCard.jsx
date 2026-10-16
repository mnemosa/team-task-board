import { useNavigate } from "react-router-dom"

function UserCard({ id, name, email, company}) {
    const navigate = useNavigate()

    return (
        <li>
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{company}</p>
            <button onClick={() => 
                navigate(`/users/${id}`)}>Open</button>
        </li>
    )
}
export default UserCard