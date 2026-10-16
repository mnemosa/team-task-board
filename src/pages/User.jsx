import { NavLink, Outlet, useNavigate, useParams } from "react-router-dom"
import FavoriteToggle from "../components/ToggleFavorite"

function User() {
    const navigate = useNavigate()
    const { id } = useParams()

    return (
        <>
            <FavoriteToggle id={Number(id)} />
            <h1>User {id}</h1>

            <NavLink to="tasks">Tasks</NavLink><br />
            <NavLink to="info">Info</NavLink><br />
            <button onClick={() => navigate("/")}>Back to Users</button>

            <Outlet />
        </>
    )
}
export default User